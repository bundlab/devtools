# 🤝 Contributing to AI Powered DevTools

First off, thank you for considering contributing to **AI Powered DevTools**! 🎉

Whether you are fixing a bug, adding a new static analysis rule, improving documentation, or optimizing performance, your contributions are highly welcome and appreciated.

---

## 📜 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#-development-setup)
- [Project Architecture](#-project-architecture)
- [Style & Commit Guidelines](#-style--commit-guidelines)
- [License](#-license)

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful, welcoming, and safe environment for everyone. Please treat all contributors with respect, regardless of experience level or background.

---

## 💡 How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check the [existing issues](https://github.com/bundlab/devtools/issues) to avoid duplicates.

When filing a bug report, please include:
* **Clear Title**: A concise summary of the problem.
* **Environment**: Node.js version, OS, package version.
* **Steps to Reproduce**: Minimal code snippet or sample file triggering the issue.
* **Expected vs. Actual Behavior**: What should happen vs. what actually happens.

---

### Suggesting Enhancements

We are always looking to expand our analysis rules and feature set!

When proposing a new feature or analyzer rule:
* Explain **why** the feature or rule is useful (e.g., security threat vector, performance bottleneck).
* Provide **code examples** demonstrating inputs and expected issue/suggestion outputs.
* Indicate which module it belongs to (`CodeAnalyzer`, `PerformanceAnalyzer`, or `SecurityAnalyzer`).

---

### Submitting Pull Requests

1. **Fork** the repository and create your feature branch from `main`.
2. **Install** dependencies and ensure local build passes.
3. **Add unit tests** covering your new functionality or bug fix.
4. **Ensure all tests pass** (`npm test`) and code compiles clean (`npm run build`).
5. **Open a Pull Request** against the `main` branch with a clear description of your changes.

---

## 🛠️ Development Setup

To work on the project locally:

```bash
# 1. Clone your fork
git clone [https://github.com/YOUR_USERNAME/devtools.git](https://github.com/YOUR_USERNAME/ai-powered-devtools.git)
cd ai-powered-devtools

# 2. Install dependencies
npm install

# 3. Run test suite in watch mode while developing
npm run test:watch

# 4. Verify TypeScript build output
npm run build
```
## 📐 Project Architecture
Keep code localized to its primary domain:
```Plaintext
src/
├── analyzer/
│   ├── codeAnalyzer.ts         # Code smells, complexity & maintainability
│   ├── performanceAnalyzer.ts  # Algorithmic loops & efficiency rules
│   └── securityAnalyzer.ts     # Vulnerability scanning (XSS, SQLi, secrets)
├── types/
│   └── index.ts                # TypeScript interface definitions
└── index.ts                    # Main AIDevTools orchestrator class
```
When adding a new analyzer rule, place unit tests in the matching suite under `src/__tests__/.`
## 🎨 Style & Commit Guidelines
Conventional Commits

We follow standard Conventional Commits for git commit messages:

- `feat:` — A new feature or rule implementation

- `fix:` — A bug fix in an existing analyzer

- `docs:` — Documentation changes only

- `test:` — Adding or updating test cases

- `refactor:` — Code changes that neither fix a bug nor add a feature

- `ci:` — Changes to CI/CD workflows or GitHub Actions

Example Commit Message:

```Plaintext
feat(security): add detection rule for dangerous regex ReDoS patterns
```
## 📄 License
By contributing, you agree that your contributions will be licensed under the project's MIT License.