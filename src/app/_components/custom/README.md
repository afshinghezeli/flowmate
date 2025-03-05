# Custom Components

This directory contains custom components that combine or extend components from the UI libraries.

## Purpose

Use this directory for:
- **Composite components**: Combining multiple library components
- **Customized variants**: Modified versions of library components
- **Project-specific components**: Components tailored to your design system
- **Integration components**: Components that bridge different libraries

## Examples

### Composite Component
```typescript
// hero-section.tsx
import { Button } from "@/app/_components/ui/button"
import { LampEffect } from "@/app/_components/aceternity/lamp-effect"
import { AnimatedText } from "@/app/_components/ui/animated-text"

export function HeroSection() {
  return (
    <div className="relative">
      <LampEffect />
      <div className="relative z-10">
        <AnimatedText>Welcome to FlowMate</AnimatedText>
        <Button variant="primary">Get Started</Button>
      </div>
    </div>
  )
}
```

### Customized Variant
```typescript
// custom-button.tsx
import { Button, ButtonProps } from "@/app/_components/ui/button"
import { motion } from "framer-motion"

interface CustomButtonProps extends ButtonProps {
  animateOnHover?: boolean
}

export function CustomButton({ animateOnHover = false, ...props }: CustomButtonProps) {
  if (animateOnHover) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button {...props} />
      </motion.div>
    )
  }
  
  return <Button {...props} />
}
```

## Best Practices

1. **Composition over modification**: Prefer wrapping components over modifying library code
2. **Type safety**: Extend original component props when possible
3. **Performance**: Use memoization for expensive custom logic
4. **Documentation**: Document custom props and behavior
5. **Testing**: Test custom components thoroughly

## File Naming

- Use kebab-case: `hero-section.tsx`
- Be descriptive: `animated-pricing-card.tsx`
- Group related components: `form/`, `navigation/`, etc.

## Usage

Import like any other component:

```typescript
import { HeroSection } from "@/app/_components/custom/hero-section"
import { CustomButton } from "@/app/_components/custom/custom-button"
```

Or using relative imports from within the app directory:
```typescript
import { HeroSection } from "./_components/custom/hero-section"
```