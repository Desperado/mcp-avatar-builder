---
name: avatar-builder
description: Generate composable pixel-art and cyberpunk avatars as SVG or PNG. Use when the user asks to create an avatar, profile picture, character portrait, or any kind of generated face/person image. Supports multiple styles (chibi, cyberpunk), customizable parts (hair, eyes, clothing, accessories), color palettes, and deterministic seed-based generation.
---

# Avatar Builder

Generate composable avatars using the MCP Avatar Builder server. Produces SVG or high-quality PNG output with fully customizable parts, colors, and styles.

## When to Use

Use this skill when the user:

- Asks to create an avatar, profile picture, or character image
- Wants a generated face or portrait (pixel art, cyberpunk, chibi)
- Needs a placeholder avatar or user icon
- Asks to customize hair, eyes, clothing, or accessories on a character
- Wants deterministic avatar generation from a username or seed

## Setup

The avatar builder is an MCP server. Ensure it's configured in your MCP settings:

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

## Available Tools

### `generate_avatar`

Create an avatar with customizable style, parts, colors, and output format.

**Parameters:**

| Parameter | Type   | Default   | Description                                   |
| --------- | ------ | --------- | --------------------------------------------- |
| `style`   | string | `"chibi"` | Style: `chibi` or `cyberpunk`                 |
| `options`  | object | random    | Part selections per category                  |
| `colors`  | object | palette   | Color overrides (hex or palette name)          |
| `seed`    | string | —         | Seed for deterministic generation              |
| `format`  | string | `"svg"`   | Output: `svg` or `png`                         |
| `size`    | number | `200`     | PNG size in pixels (16–2048)                   |

### `list_styles`

List all available styles with their categories and palettes.

### `list_parts`

List available parts and variants for a style, optionally filtered by category.

## Styles

### Chibi (200x200)

Simple, cute style. Categories: `head`, `eyes`, `eyebrows`, `mouth`, `hair_back`, `hair_front`, `clothing`, `accessories`.

Colors: `skin`, `hair`, `eyes`, `clothing`.

### Cyberpunk (400x400)

High-detail style with neon glow effects, dark backgrounds, and cybernetic parts. Categories: `background`, `head`, `eyes`, `eyebrows`, `mouth`, `hair_back`, `hair_front`, `face_mods`, `clothing`, `accessories`, `effects`.

Colors: `skin`, `hair`, `eyes`, `clothing`, `neon`, `accent`.

**Cyberpunk-specific parts:**

- **background**: `circuit_grid`, `rain_city`, `dark_void`
- **eyes**: `led`, `visor`, `cyber`
- **mouth**: `neutral`, `respirator`, `smirk`
- **hair**: `mohawk`, `undercut`, `wired`, `shaved`
- **face_mods**: `neural_port`, `led_tattoo`, `jaw_plate`
- **clothing**: `techwear`, `tactical_vest`, `collar_rig`
- **accessories**: `none`, `headset`, `holo_visor`
- **effects**: `none`, `scanlines`, `glitch`

## Instructions

1. **Start by asking** what style the user wants (or pick based on context)
2. **Use `list_styles`** if you need to show all options
3. **Generate** with `generate_avatar` — use `seed` for reproducible results
4. **For PNG output**, set `format: "png"` and `size: 800` for high quality
5. **Customize** by passing specific `options` and `colors`

### Example: Quick Random Avatar

```json
{
  "style": "cyberpunk",
  "seed": "username123",
  "format": "png",
  "size": 800
}
```

### Example: Fully Customized Cyberpunk

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
  "format": "png",
  "size": 800
}
```

## Tips

- Use palette **names** (e.g. `"hot-pink"`, `"chrome"`) or **hex values** (e.g. `"#FF2D95"`) for colors
- The `seed` parameter produces identical output every time — great for user avatars derived from usernames
- For cyberpunk, `neon` controls glow/accent color and `accent` controls metal/mechanical surfaces
- `effects: "scanlines"` adds a CRT overlay; `"glitch"` adds color displacement bars
- Omitted parts are randomly selected; use `seed` to keep random selections stable
