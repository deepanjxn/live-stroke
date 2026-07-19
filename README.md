# LiveStroke

Animated gradient borders for React buttons.

## Overview

LiveStroke is an opinionated React component library that adds beautifully animated gradient borders around React buttons.

## Project Structure

```
live-stroke/
├── packages/
│   └── live-stroke/          # The live-stroke library package
│       ├── src/
│       │   ├── components/   # React components
│       │   ├── hooks/        # Custom React hooks
│       │   ├── lib/          # Core library logic
│       │   ├── styles/       # CSS / style utilities
│       │   ├── types/        # TypeScript type definitions
│       │   ├── utils/        # Utility functions
│       │   ├── LiveStroke.tsx
│       │   └── index.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
├── playground/               # Vite React app for local development
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
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
- **`playground`** (`playground/`) — A Vite React application for local development and testing.

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
| `pnpm dev`         | Start the playground dev server                   |
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

### Playground

The playground imports `live-stroke` via the pnpm workspace protocol (`workspace:*`). During development, Vite resolves `live-stroke` directly to the package source for instant HMR.

```bash
pnpm dev
```

## License

MIT
