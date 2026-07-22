# ⚡ AI Powered DevTools

> Next-generation code quality, performance, and security analysis engine for TypeScript and JavaScript.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0%2B-blue.svg)](https://www.typescriptlang.org/)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()

**AI Powered DevTools** provides intelligent static analysis, algorithm complexity estimation, AST-level issue detection, and security vulnerability scanning with actionable remediation advice.

---

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
├── jest.config.js      # Jest testing configuration
├── .gitignore
├── LICENSE
└── README.md
```

## ✨ Features Overview

* 🧹 **Code Analyzer**: Detects code smells (`var`, `console.log`, empty `catch` blocks, pending `TODO`s) and computes cyclomatic complexity.
* ⚡ **Performance Analyzer**: Identifies $O(N^2)$ loops, suboptimal data structure choices (e.g., `Array.includes` inside loops), and suggests optimizations.
* 🛡️ **Security Scanner**: Detects critical vulnerabilities like `eval()`, potential XSS, hardcoded credentials, SQL injection patterns, and permissive CORS setup.
* 📊 **Unified Score**: Multi-dimensional scoring for Maintainability, Security, Performance, and overall Health Index.
* 🤖 **AI Suggestions**: Provides contextual explanations and code refactoring hints.

---

## 📦 Installation

```bash
npm install @bundlab/ai-powered-devtools
# or
yarn add @bundlab/ai-powered-devtools
```
## 📐 Architecture Overview
```text
                      ┌────────────────────────┐
                      │      AIDevTools        │
                      └───────────┬────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┐
         ▼                        ▼                        ▼
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│   CodeAnalyzer   │    │PerformanceAnalyzer│    │ SecurityAnalyzer │
└──────────────────┘    └──────────────────┘    └──────────────────┘
```

## 🛠️ Development Setup
```bash
# Clone repository
git clone [https://github.com/bundlab/ai-powered-devtools.git](https://github.com/bundlab/ai-powered-devtools.git)
cd ai-powered-devtools

# Install dependencies
npm install

# Build
npm run build

# Run unit test suite
npm test
```

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


## 🗺️ Roadmap
- [x] Initial Static Analysis Engine & Rule Set
- [ ] Language Server Protocol (LSP) integration for VS Code
- [ ] Integration with AST parsers (@babel/parser, typescript)
- [ ] Direct LLM API hooks (OpenAI / Anthropic / Local Ollama)
- [ ] Automated Git pre-commit hook runner