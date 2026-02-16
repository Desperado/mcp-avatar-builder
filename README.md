# MCP Avatar Builder

An MCP server that generates composable avatars via SVG layer composition. Plug it into Claude Code (or any MCP client) to create avatars on the fly.

## Install as Agent Skill

```bash
npx skills add Desperado/mcp-avatar-builder
```

This registers the avatar-builder skill so your AI agent knows when and how to generate avatars. Browse it on [skills.sh](https://skills.sh/Desperado/mcp-avatar-builder/avatar-builder).

## Quick Start

```bash
npm install
npm run build
```

### Add to Claude Code

Add to your MCP settings (`~/.claude/settings.json` or project `.mcp.json`):

```json
{
  "mcpServers": {
    "avatar-builder": {
      "command": "npx",
      "args": ["-y", "mcp-avatar-builder"]
    }
  }
}
```

Or point to a local build:

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

### Other MCP Clients

Any MCP-compatible client (Cursor, Cline, GitHub Copilot, etc.) can use this server. Configure the command as shown above in your client's MCP settings.

## Tools

### `generate_avatar`

Generate a composable avatar with customizable parts and colors.

| Parameter | Type   | Default   | Description                          |
| --------- | ------ | --------- | ------------------------------------ |
| `style`   | string | `"chibi"` | Style: `chibi` or `cyberpunk`        |
| `options`  | object | random    | Part selections per category         |
| `colors`  | object | palette   | Color overrides (hex or palette name)|
| `seed`    | string | —         | Seed for deterministic generation    |
| `format`  | string | `"svg"`   | Output: `svg` or `png`               |
| `size`    | number | `200`     | PNG size in pixels (16–2048)         |

Example:

```json
{
  "style": "cyberpunk",
  "options": {
    "background": "rain_city",
    "head": "angular",
    "eyes": "led",
    "mouth": "smirk",
    "hair_back": "mohawk",
    "hair_front": "mohawk",
    "face_mods": "led_tattoo",
    "clothing": "techwear",
    "effects": "glitch"
  },
  "colors": {
    "neon": "hot-pink",
    "hair": "electric-blue",
    "eyes": "cyan"
  },
  "seed": "my-avatar",
  "format": "png",
  "size": 800
}
```

### `list_styles`

List all available avatar styles with their categories and palettes.

### `list_parts`

List available parts/variants for a style, optionally filtered by category.

```json
{ "style": "cyberpunk", "category": "eyes" }
```

## Available Styles

### Chibi (200x200)

Simple, cute pixel-art style.

**Categories:** head, eyes, eyebrows, mouth, hair_back, hair_front, clothing, accessories

**Palettes:**
- **Skin**: porcelain, ivory, sand, honey, chestnut, espresso
- **Hair**: black, dark-brown, brown, auburn, ginger, blonde, platinum, pink
- **Eyes**: brown, hazel, green, blue, gray, violet

### Cyberpunk (400x400)

High-detail style with neon glow effects, dark backgrounds, and cybernetic parts. Uses SVG filters (glow, scanlines, noise) and gradient fills for a rich look.

**Categories:** background, head, eyes, eyebrows, mouth, hair_back, hair_front, face_mods, clothing, accessories, effects

**Palettes:**
- **Skin**: pale-tech, porcelain, tan, bronze, dark, deep
- **Hair**: jet-black, chrome, neon-pink, electric-blue, toxic-green, white, purple, red
- **Eyes**: amber-led, cyan, red, white, green-circuit, chrome
- **Neon**: hot-pink, cyan, yellow, purple, green, orange
- **Accent**: chrome, gunmetal, matte-black, brushed-steel

**Parts:**

| Category      | Variants                                     |
| ------------- | -------------------------------------------- |
| background    | circuit_grid, rain_city, dark_void           |
| head          | angular, scarred, implanted                  |
| eyes          | led, visor, cyber                            |
| eyebrows      | sharp, none                                  |
| mouth         | neutral, respirator, smirk                   |
| hair          | mohawk, undercut, wired, shaved              |
| face_mods     | neural_port, led_tattoo, jaw_plate           |
| clothing      | techwear, tactical_vest, collar_rig          |
| accessories   | none, headset, holo_visor                    |
| effects       | none, scanlines, glitch                      |

## Architecture

Avatars are composed from SVG fragment layers stacked in z-order. Each style defines its own categories (head, eyes, hair, etc.), color palettes, and part variants. The composer assembles fragments into a complete SVG, and an optional rasterizer converts to PNG via resvg.

```
Style → Part Renderers → Composer (SVG) → Rasterizer (PNG)
```

### Adding a New Style

1. Create `src/styles/<name>/` with `index.ts`, `palettes.ts`, and `parts/` directory
2. Implement the `AvatarStyle` interface (see `src/styles/style.ts`)
3. Register in `src/styles/index.ts`

## License

MIT
