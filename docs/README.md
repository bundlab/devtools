# Documentation

## Overview

AI-Powered DevTools is a TypeScript-based toolkit designed to enhance the development experience with AI-powered features.

## Getting Started

### Installation

```bash
npm install
```

### Running in Development Mode

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── src/                 # Source code
│   ├── index.ts        # Main entry point
│   └── __tests__/      # Test files
├── dist/               # Compiled JavaScript (generated)
├── docs/               # Documentation
├── package.json        # Project metadata
├── tsconfig.json       # TypeScript configuration
└── jest.config.js      # Jest testing configuration
```

## Features

- ✨ TypeScript support
- 🧪 Jest testing framework
- 📝 ESLint for code quality
- 🚀 Fast development with tsx
- 📦 Ready for npm publishing

## API

### `greet(name: string): string`

Returns a greeting message.

```typescript
import { greet } from 'ai-powered-devtools';

console.log(greet('Developer'));
// Output: Welcome to AI-Powered DevTools, Developer!
```

### `initialize(): Promise<void>`

Initializes the DevTools application.

```typescript
import { initialize } from 'ai-powered-devtools';

await initialize();
```

## Support

For issues and questions, please open an issue on GitHub.
