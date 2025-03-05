# shadcn/ui + Magic UI Components

This directory contains components from:
- **shadcn/ui**: Base UI components
- **Magic UI**: Animated components and effects

## Installation Commands

### shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

### Magic UI components:
```bash
npx shadcn@latest add "https://magicui.design/r/[component-name].json"
```

## Usage

Import components like any React component:

```typescript
import { Button } from "@/app/_components/ui/button"
import { AnimatedBackground } from "@/app/_components/ui/animated-background"
```

Or using relative imports from within the app directory:
```typescript
import { Button } from "./_components/ui/button"
```

## Component Registry

Use the component manager to track installations:
```bash
bun run components:add [component-name] [library] [usage] [notes]
```