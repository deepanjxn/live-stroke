# LiveStroke

Animated gradient borders for React.

## Overview

LiveStroke is an opinionated React component library that adds beautifully animated gradient borders around any React element.

## Project Structure

```
live-stroke/
├── packages/
│   └── live-stroke/          # The live-stroke library package
│       ├── src/
│       │   ├── types/        # TypeScript type definitions
│       │   ├── LiveStroke.tsx
│       │   └── index.ts
│       ├── dist/             # Built output (ESM, CJS, .d.ts)
│       ├── tsup.config.ts
│       └── package.json
├── website/                  # Next.js documentation and playground
│   ├── src/
│   │   ├── app/
│   │   └── components/
│   ├── public/
│   └── package.json
├── package.json              # Workspace root
├── pnpm-workspace.yaml       # pnpm workspace definition
├── tsconfig.base.json        # Shared TypeScript configuration
├── eslint.config.js          # ESLint flat config
├── .prettierrc               # Prettier configuration
├── .editorconfig             # Editor settings
└── .gitignore
```

## Workspace

This repository uses [pnpm workspaces](https://pnpm.io/workspaces). The workspace contains two packages:

- **`live-stroke`** (`packages/live-stroke/`) — The published library.
- **`website`** (`website/`) — A Next.js documentation site with an interactive playground.

## Development

### Prerequisites

- Node.js >= 18
- pnpm >= 9

### Setup

```bash
pnpm install
```

### Commands

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `pnpm build`       | Build the library package                         |
| `pnpm dev`         | Start the website dev server                      |
| `pnpm lint`        | Lint all packages                                 |
| `pnpm format`      | Format code with Prettier                         |
| `pnpm typecheck`   | Run TypeScript type checking across all packages  |
| `pnpm clean`       | Clean build artifacts                             |

### Building

To build the library:

```bash
pnpm build
```

This generates ESM, CommonJS, and TypeScript declaration files in `packages/live-stroke/dist/`.

### Website

The website imports `live-stroke` via the pnpm workspace protocol (`workspace:*`). During development, Next.js resolves `live-stroke` to the built dist.

```bash
pnpm dev
```

## Design Rationale

### Minimum Opacity

The minimum opacity is intentionally 10%.

If the opacity reached 0%, both the stroke and the glow would completely disappear, making it seem like the component stopped rendering. Keeping a 10% minimum ensures the component always remains visible while still allowing users to understand the opacity control.

### Glow Opacity

The glow uses a fixed intensity of 20%.

The glow is designed to be subtle. It adds depth around the component without becoming distracting or overpowering the stroke itself.

### Transparent Border Architecture

The component uses a transparent CSS border instead of an SVG-based solution.

Using a transparent border allows the animated stroke to wrap around any child component while preserving native border radius behavior. It keeps the implementation lightweight, flexible, and easy to integrate with any React component without requiring SVG rendering.

## License

MIT
