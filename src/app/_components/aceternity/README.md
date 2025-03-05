# Aceternity UI Components

This directory contains manually installed components from [Aceternity UI](https://ui.aceternity.com/components).

## Installation Process

1. Visit [ui.aceternity.com/components](https://ui.aceternity.com/components)
2. Find the component you need
3. Copy the component code
4. Create a new file: `[component-name].tsx`
5. Paste and customize as needed
6. Install any additional dependencies
7. Update component registry

## File Structure

Each component should be in its own file:
```
aceternity/
├── floating-navbar.tsx
├── lamp-effect.tsx
├── spotlight.tsx
└── README.md
```

## Usage

Import components like any React component:

```typescript
import { FloatingNavbar } from "@/app/_components/aceternity/floating-navbar"
import { LampEffect } from "@/app/_components/aceternity/lamp-effect"
```

Or using relative imports from within the app directory:
```typescript
import { FloatingNavbar } from "./_components/aceternity/floating-navbar"
```

## Common Dependencies

Most Aceternity UI components may require:
- `framer-motion` ✅ (already installed)
- `clsx` ✅ (already installed)
- `tailwind-merge` ✅ (already installed)

Additional dependencies will be installed as needed per component.

## Performance Notes

- Use lazy loading for heavy animated components
- Implement `Suspense` boundaries for better UX
- Consider disabling animations on mobile if performance is impacted

## Component Registry

Track installations with:
```bash
bun run components:add [component-name] aceternity [usage] [notes]
```