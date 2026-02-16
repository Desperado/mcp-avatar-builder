import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getStyle, listStyles } from "./styles/index.js";
import { compose } from "./composer.js";
import { rasterize } from "./rasterizer.js";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "mcp-avatar-builder",
    version: "0.2.0",
  });

  server.tool(
    "generate_avatar",
    "Generate a composable avatar. Produces SVG or PNG output with customizable parts and colors.",
    {
      style: z.string().default("chibi").describe("Avatar style to use"),
      options: z.record(z.union([z.string(), z.number()])).optional().describe("Part selections per category (e.g. {hair_front: 'bangs', eyes: 'cat'})"),
      colors: z.object({
        skin: z.string().optional(),
        hair: z.string().optional(),
        eyes: z.string().optional(),
        clothing: z.string().optional(),
        neon: z.string().optional().describe("Neon accent color (cyberpunk style)"),
        accent: z.string().optional().describe("Metal/accent color (cyberpunk, retro styles)"),
        blood: z.string().optional().describe("Blood/wound color (horror style)"),
        atmosphere: z.string().optional().describe("Atmospheric accent color (horror style)"),
        retro: z.string().optional().describe("Retro highlight color (retro style)"),
      }).optional().describe("Color overrides (hex values or palette names)"),
      seed: z.string().optional().describe("Seed for deterministic random generation"),
      format: z.enum(["svg", "png"]).default("svg").describe("Output format"),
      size: z.number().min(16).max(2048).default(200).describe("Output size in pixels (for PNG)"),
    },
    async ({ style: styleName, options, colors, seed, format, size }) => {
      const style = getStyle(styleName);
      if (!style) {
        return {
          content: [{ type: "text", text: `Unknown style: "${styleName}". Use list_styles to see available styles.` }],
          isError: true,
        };
      }

      // Resolve palette names to hex values
      const resolvedColors = colors ? { ...colors } : undefined;
      if (resolvedColors) {
        for (const [key, val] of Object.entries(resolvedColors)) {
          if (val && !val.startsWith("#")) {
            const palette = style.palettes[key];
            if (palette) {
              const entry = palette.find((p) => p.name === val);
              if (entry) {
                (resolvedColors as Record<string, string>)[key] = entry.value;
              }
            }
          }
        }
      }

      const avatarOptions = { parts: options as Record<string, string> | undefined, colors: resolvedColors };
      const svg = compose(style, avatarOptions, seed);

      if (format === "png") {
        const png = rasterize(svg, size);
        return {
          content: [{
            type: "image",
            data: png.toString("base64"),
            mimeType: "image/png",
          }],
        };
      }

      return {
        content: [{ type: "text", text: svg }],
      };
    },
  );

  server.tool(
    "list_styles",
    "List all available avatar styles with their categories and palette info.",
    {},
    async () => {
      const styles = listStyles();
      const lines = styles.map((s) => {
        const cats = s.categories.map((c) => `  - ${c.name}: ${c.variants.join(", ")}${c.optional ? " (optional)" : ""}`);
        const palettes = Object.entries(s.palettes).map(([k, v]) => `  - ${k}: ${v.map((p) => p.name).join(", ")}`);
        return [
          `## ${s.meta.title} (\`${s.name}\`)`,
          `Author: ${s.meta.author} | License: ${s.meta.license}`,
          "",
          "**Categories:**",
          ...cats,
          "",
          "**Palettes:**",
          ...palettes,
        ].join("\n");
      });

      return {
        content: [{ type: "text", text: lines.join("\n\n") }],
      };
    },
  );

  server.tool(
    "list_parts",
    "List available parts and variants for a specific style, optionally filtered by category.",
    {
      style: z.string().describe("Style name"),
      category: z.string().optional().describe("Filter to a specific category"),
    },
    async ({ style: styleName, category }) => {
      const style = getStyle(styleName);
      if (!style) {
        return {
          content: [{ type: "text", text: `Unknown style: "${styleName}". Use list_styles to see available styles.` }],
          isError: true,
        };
      }

      let categories = style.categories;
      if (category) {
        categories = categories.filter((c) => c.name === category);
        if (categories.length === 0) {
          return {
            content: [{ type: "text", text: `Unknown category: "${category}" in style "${styleName}".` }],
            isError: true,
          };
        }
      }

      const lines = categories.map((c) => {
        const defaultLabel = c.variants[c.default];
        return [
          `**${c.name}**${c.optional ? " (optional)" : ""}`,
          ...c.variants.map((v) => `  - \`${v}\`${v === defaultLabel ? " (default)" : ""}`),
        ].join("\n");
      });

      return {
        content: [{ type: "text", text: lines.join("\n\n") }],
      };
    },
  );

  return server;
}
