# Causality

Causality is a realtime coordination platform for teams building software with AI.
See [AGENTS.md](./AGENTS.md) for the product context and architecture principles.

This repository currently contains only the project foundation: empty-but-working
scaffolds for each surface. No product features are implemented yet.

## Repository structure

```
apps/web           Next.js (React) web app — placeholder page only
apps/api           Node.js + TypeScript REST API (Express) — /health only
extension          VS Code extension (TypeScript) — Hello World command only
packages/shared    Shared TypeScript package (types/helpers used by the surfaces)
docs               Technical architecture documentation (placeholder)
```

The repository is an npm workspaces monorepo. Workspace packages:

| Path              | Package name        |
| ----------------- | ------------------- |
| `apps/web`        | `@causality/web`    |
| `apps/api`        | `@causality/api`    |
| `packages/shared` | `@causality/shared` |
| `extension`       | `causality-vscode`  |

TypeScript settings shared by every package live in [`tsconfig.base.json`](./tsconfig.base.json).

## Requirements

- Node.js >= 20
- npm >= 10

## Local development

Install all workspace dependencies from the repository root:

```bash
npm install
```

Build the shared package once so that the web app, API and extension can resolve its
compiled output (`npm run build` and `npm run typecheck` do this for you, but the dev
servers do not):

```bash
npm run build:shared
```

Then start the surfaces you need:

```bash
npm run dev:api    # http://localhost:4000  (GET /health)
npm run dev:web    # http://localhost:3000
```

The API port can be overridden with the `PORT` environment variable.

### VS Code extension

```bash
npm run build --workspace causality-vscode      # compile to extension/out
npm run package --workspace causality-vscode    # produce extension/causality-vscode.vsix
```

Open the `extension` folder in VS Code and press `F5` to launch an Extension
Development Host, then run `Causality: Hello World` from the command palette.

## Common commands (run from the repository root)

```bash
npm run build         # build shared, then every other workspace
npm run typecheck     # TypeScript checks for every workspace
npm run test          # run tests for workspaces that define them (none yet)
npm run format        # format with Prettier
npm run format:check  # verify formatting
```

## Shared package

`@causality/shared` is the place for types shared between web, API and extension.
It currently exports a single example helper used by all three surfaces to prove that
cross-workspace imports work:

```ts
import { createHealthStatus } from '@causality/shared';
```
