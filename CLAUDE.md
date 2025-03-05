# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` or `bun dev` - Start development server with Turbopack
- `npm run build` or `bun run build` - Build for production
- `npm start` or `bun start` - Start production server
- `npm run lint` or `bun run lint` - Run ESLint

### Package Management
This project uses Bun as the package manager (bun.lock present). Use `bun` commands instead of `npm` when possible.

## Architecture

### Project Structure
- **Next.js 15.4.5** with App Router architecture
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling with custom design system
- **React 19.1.0** with React DOM
- Uses **Inter Tight** font family via Google Fonts

### Key Configuration Files
- `tailwind.config.ts` - Contains custom color system with primary/secondary color palettes
- `tsconfig.json` - TypeScript config with path mapping (`@/*` → `./src/*`)
- `eslint.config.mjs` - ESLint config extending Next.js core web vitals and TypeScript rules

### Custom Design System
The project has a custom color system defined in `tailwind.config.ts`:
- **Primary colors**: 6 tints from light (`tint-1: #F4EEFF`) to dark (`tint-6: #713DDD`)
- **Secondary colors**: 6 tints from light (`tint-1: #E5EFFF`) to dark (`tint-6: #0062FF`)
- **Custom font**: Inter Tight with CSS variable `--font-interTight`

Use these custom colors (e.g., `bg-primary-tint-3`, `text-secondary-tint-6`) instead of default Tailwind colors.

### Font Configuration
- Inter Tight font is loaded in `layout.tsx` with weights 300-900
- Font variable is available as `font-interTight` class
- Applied at the root layout level

### App Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/app/globals.css` - Global CSS imports
- `/src/app/layout.tsx` - Root layout with font setup
- `/src/app/page.tsx` - Homepage component