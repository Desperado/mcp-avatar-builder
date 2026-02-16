# MCP Avatar Builder

An MCP server that generates composable avatars via SVG layer composition. Plug it into Claude Code (or any MCP client) to create avatars on the fly.

## Quick Start

```bash
npm install
npm run build
```

### Add to Claude Code

```json
{
  "mcpServers": {
    "avatar-builder": {
      "command": "node",
      "args": ["/path/to/mcp-avatar-builder/build/index.js"]
    }
  }
}
```

## Tools

### `generate_avatar`

Generate a composable avatar with customizable parts and colors.

```
style: "chibi"           # Avatar style (default: chibi)
options: {                # Part selections per category
  hair_front: "bangs",
  eyes: "sparkle",
  mouth: "cat"
}
colors: {                 # Color overrides (hex or palette name)
  skin: "honey",
  hair: "#FF69B4",
  eyes: "violet"
}
seed: "my-avatar"         # Deterministic random (optional)
format: "svg" | "png"     # Output format (default: svg)
size: 400                 # PNG size in pixels (default: 200)
```

### `list_styles`

List all available avatar styles with their categories and palettes.

### `list_parts`

List available parts/variants for a style, optionally filtered by category.

```
style: "chibi"
category: "eyes"          # Optional filter
```

## Architecture

Avatars are composed from SVG fragment layers stacked in z-order. Each style defines its own categories (head, eyes, hair, etc.), color palettes, and part variants. The composer assembles fragments into a complete SVG, and an optional rasterizer converts to PNG.

```
Style → Part Renderers → Composer (SVG) → Rasterizer (PNG)
```

### Adding a New Style

1. Create `src/styles/<name>/` with parts, palettes, and an index
2. Implement the `AvatarStyle` interface
3. Register in `src/styles/index.ts`

## Available Styles

### Chibi

Categories: head, eyes, eyebrows, mouth, hair_back, hair_front, clothing, accessories

Palettes:
- **Skin**: porcelain, ivory, sand, honey, chestnut, espresso
- **Hair**: black, dark-brown, brown, auburn, ginger, blonde, platinum, pink
- **Eyes**: brown, hazel, green, blue, gray, violet

## License

MIT
