# live-stroke

Animated gradient border wrapper for React components with automatic border-radius inheritance.

Wrap any element — a button, card, input, or image — and it gets a smooth, rotating conic-gradient border. The animation is pure CSS (no JavaScript frame loop), so it stays performant even with many instances on the page.

## Features

- **Automatic border-radius inheritance** — reads the child's `borderRadius` from its inline style and matches it perfectly
- **Zero-config** — wrap any element, no extra setup
- **Pure CSS animation** — GPU-composited, no JS timer or frame loop
- **Self-injecting styles** — no CSS imports required
- **SSR-safe** — gracefully skips style injection during server rendering
- **TypeScript** — full type definitions included
- **Lightweight** — ~3.4KB gzipped (ESM + CJS)

## Installation

```bash
npm install live-stroke
```

## Quick Start

```tsx
import { LiveStroke } from "live-stroke";

function App() {
  return (
    <LiveStroke>
      <button style={{ borderRadius: 12, padding: "12px 24px" }}>
        Click me
      </button>
    </LiveStroke>
  );
}
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactElement` | required | A single React element to wrap with the animated border |
| `strokeSize` | `"sm"` \| `"md"` \| `"lg"` | `"md"` | Stroke thickness: 1px (sm), 2px (md), or 3px (lg) |
| `speed` | `"slow"` \| `"normal"` \| `"fast"` | `"normal"` | Animation duration: 4s, 2.5s, or 1.5s per rotation |
| `opacity` | `number` | `100` | Gradient opacity (0–100) |
| `shadow` | `boolean` | `true` | Whether to render a blurred glow behind the element |
| `radius` | `number` | `8` | Fallback border-radius (px) used only when the child has no explicit `borderRadius` in its inline style |

## Border-radius inheritance

LiveStroke automatically reads the wrapped element's `borderRadius` from its inline style and matches the inner clipping mask and the outer gradient border to that value.

This means you only need to set `borderRadius` on your component — LiveStroke adapts to it.

```tsx
// Just set borderRadius on your element — LiveStroke follows it
<LiveStroke>
  <div style={{ borderRadius: 16 }}>
    A card with 16px rounded corners
  </div>
</LiveStroke>
```

If the child does not have an explicit `borderRadius` in its inline style, LiveStroke falls back to the `radius` prop (default: 8px).

> **Note:** `borderRadius` defined via CSS classes is not detected. Use inline styles or the `radius` prop to control the border radius.

All common value types are supported:

- **Pixel values** — `borderRadius: 12` or `borderRadius: "12px"`
- **Percentage values** — `borderRadius: "50%"` (perfect circles)
- **Pill shapes** — `borderRadius: "9999px"` (fully rounded pills)

## Examples

### Button

```tsx
<LiveStroke strokeSize="md" speed="normal" opacity={100} shadow>
  <button style={{ borderRadius: 12, padding: "16px 32px", background: "#fff", border: "none" }}>
    Primary Button
  </button>
</LiveStroke>
```

### Square button

```tsx
<LiveStroke strokeSize="md" speed="normal" opacity={100} shadow>
  <button style={{ width: 100, height: 100, borderRadius: 12, background: "#fff", border: "none" }}>
    A
  </button>
</LiveStroke>
```

### Circular button

```tsx
<LiveStroke strokeSize="md" speed="normal" opacity={100} shadow>
  <button style={{ width: 100, height: 100, borderRadius: "50%", background: "#fff", border: "none" }}>
    A
  </button>
</LiveStroke>
```

### Card

```tsx
<LiveStroke strokeSize="md" speed="normal" opacity={100} shadow>
  <div style={{ width: 340, padding: 24, borderRadius: 16, background: "#fff" }}>
    <h3>Card Title</h3>
    <p>Card content goes here.</p>
  </div>
</LiveStroke>
```

### Input

```tsx
<LiveStroke strokeSize="md" speed="normal" opacity={100} shadow>
  <input
    placeholder="Search..."
    style={{ width: 320, height: 52, borderRadius: 12, border: "none", padding: "0 16px", background: "#fff" }}
  />
</LiveStroke>
```

## Browser support

LiveStroke relies on the CSS `@property` at-rule for animating the gradient rotation. This is supported in all modern browsers:

| Chrome | Firefox | Safari | Edge |
|--------|---------|--------|------|
| 85+ | 128+ | 16.4+ | 85+ |

For a complete compatibility table, see [caniuse.com/css-property](https://caniuse.com/css-property).

## TypeScript

Type definitions are included. `LiveStrokeProps` is exported for custom wrapper components:

```tsx
import { LiveStroke, type LiveStrokeProps } from "live-stroke";
```

## About the Creator

LiveStroke was ideated, designed, engineered, and open-sourced by Deepanjan Sen.

I'm a product designer and frontend engineer passionate about crafting thoughtful user experiences, design systems, developer tools, and open-source software.

If you enjoyed this project or would like to follow my work, I'd love to connect.

🌐 **Portfolio** — [d-s.me](https://d-s.me)

💼 **LinkedIn** — [linkedin.com/in/deepanjansen](https://www.linkedin.com/in/deepanjansen/)

🐦 **X (Twitter)** — [x.com/deepanjxn](https://x.com/deepanjxn)

⭐ If LiveStroke helped you, consider starring this repository.

## License

MIT

<p align="center">
  <img
    src="./assets/outro.webp"
    alt="Ideated, Designed, Shipped and Presented by Deepanjan Sen"
    width="100%"
  />
</p>
