# live-stroke

Animated gradient borders for React buttons.

## Installation

```bash
npm install live-stroke
```

## Build Output

The package is built with [tsup](https://tsup.egoist.dev/) and produces:

- **ESM** — `dist/index.js`
- **CommonJS** — `dist/index.cjs`
- **TypeScript declarations** — `dist/index.d.ts` / `dist/index.d.cts`

React is externalized as a peer dependency to keep the bundle minimal.

## Development

```bash
# Build the package
pnpm build

# Watch mode
pnpm dev

# Type check
pnpm typecheck

# Clean build artifacts
pnpm clean
```

## Publishing

1. Bump the version in `package.json`.
2. Run `pnpm build`.
3. Run `npm publish` from the `packages/live-stroke` directory.

## License

MIT
