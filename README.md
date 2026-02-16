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
| `style`   | string | `"chibi"` | Style: `chibi`, `cyberpunk`, `horror`, `retro` |
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

### Horror (400x400)

Dark survival-horror style with sickly skin tones, wound effects, and atmospheric backgrounds. Inspired by Resident Evil, Silent Hill, and The Last of Us.

**Categories:** background, head, eyes, eyebrows, mouth, hair_back, hair_front, face_mods, clothing, accessories, effects

**Palettes:**
- **Skin**: pallid, gray-green, jaundiced, ashen, bruised, corpse
- **Hair**: matted-black, dirty-brown, gray, blood-red, white, rust
- **Eyes**: amber, bloodshot-blue, milky, green-sick, red, dead-gray
- **Blood**: crimson, dark-red, black-blood, dried-brown, arterial, infected-green
- **Atmosphere**: steel, rust, concrete, moss

**Parts:**

| Category      | Variants                                     |
| ------------- | -------------------------------------------- |
| background    | lab_corridor, hive, dark_forest              |
| head          | gaunt, scarred, infected                     |
| eyes          | bloodshot, mutant, hollow                    |
| eyebrows      | thin, furrowed, none                         |
| mouth         | grimace, gas_mask, stitched                  |
| hair          | military, messy, slicked                     |
| face_mods     | bite_wound, stitches, infection              |
| clothing      | tactical_vest, lab_coat, jumpsuit            |
| accessories   | none, dog_tags, herb_vial                    |
| effects       | none, fog, blood_splatter                    |

### Retro (400x400)

Warm 1980s nostalgia style inspired by Stranger Things, The Goonies, and Stand By Me. Sunset backgrounds, feathered hair, denim jackets, and VHS effects.

**Categories:** background, head, eyes, eyebrows, mouth, hair_back, hair_front, face_mods, clothing, accessories, effects

**Palettes:**
- **Skin**: porcelain, fair, warm, tan, brown, deep
- **Hair**: black, dark-brown, brown, auburn, ginger, blonde, platinum, strawberry
- **Eyes**: brown, hazel, green, blue, gray, amber
- **Retro**: sunset-orange, neon-pink, electric-blue, arcade-yellow, synth-purple, miami-teal
- **Accent**: denim, leather, chrome, matte-black

**Parts:**

| Category      | Variants                                     |
| ------------- | -------------------------------------------- |
| background    | sunset, arcade, suburban                     |
| head          | round, square_jaw, soft                      |
| eyes          | wide, determined, cool                       |
| eyebrows      | thick, thin, arched                          |
| mouth         | grin, bubblegum, neutral                     |
| hair          | feathered, mullet, shaved, ponytail          |
| face_mods     | nosebleed, freckles, band_aid                |
| clothing      | denim_jacket, hawkins_tee, leather_jacket    |
| accessories   | none, headband, shades                       |
| effects       | none, vhs_lines, warm_glow                   |

## Examples

The `examples/` directory has runnable scripts showing how to use the avatar builder programmatically (no MCP server needed):

```bash
npm run build                              # build first

node examples/basic-generation.mjs         # one avatar per style → SVG files
node examples/custom-cyberpunk.mjs         # fully customized cyberpunk avatar
node examples/team-avatars.mjs             # deterministic seed-based team avatars
node examples/png-export.mjs               # export as PNG at multiple sizes
node examples/list-all-parts.mjs           # print all styles, parts, and palettes
node examples/list-all-parts.mjs retro     # filter to a single style
```

Output goes to `examples/output/`. See the source for the programmatic API (`compose`, `getStyle`, `listStyles`, `rasterize`).

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
