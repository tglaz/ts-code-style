# ts-code-style

Personal code style config for TypeScript projects.

## Install

```bash
npm install -D github:tglaz/ts-code-style
```

## ESLint Usage

Import and spread into your `eslint.config.js`. Add repo-specific config (ignores, project service) before it, overrides after it.

```js
import { defineConfig } from "eslint/config";
import eslintConfig from "@tglaz/ts-code-style/eslint";

export default defineConfig(
  { ignores: ["**/node_modules/**", "**/dist/**"] },
  {
    languageOptions: {
      parserOptions: {
        projectService: { defaultProject: "./tsconfig.json" },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...eslintConfig,
  {
    // optional: override specific rules per repo
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  }
);
```

## Prettier Usage

**No overrides** — reference directly in `package.json`:

```json
{
  "prettier": "@tglaz/ts-code-style/prettier"
}
```

**With overrides** — create a `.prettierrc.js` instead:

```js
import baseConfig from "@tglaz/ts-code-style/prettier";

export default {
  ...baseConfig,
  printWidth: 120,
};
```
