import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      // Unused vars: allow underscore-prefixed args (e.g. _event).
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],

      // Always use braces for if/else/for/while bodies.
      curly: ["error", "all"],

      // Prefer early return over else when the if block returns.
      "no-else-return": "error",

      // Disallow nested ternaries (a ? b : c ? d : e).
      "no-nested-ternary": "error",

      // Require === and !== (no type-coercing == / !=).
      eqeqeq: "error",

      // Always throw Error objects, not strings or literals.
      "@typescript-eslint/only-throw-error": "error",

      // Require `import type` for type-only imports.
      "@typescript-eslint/consistent-type-imports": "error",

      // Use object shorthand: { foo } not { foo: foo }.
      "object-shorthand": "error",

      // Use template literals instead of string concatenation.
      "prefer-template": "error",

      // Require a blank line between consecutive if statements.
      "padding-line-between-statements": [
        "error",
        // Add padding before most non-leading `return` statements.
        {
          blankLine: "always",
          prev: [
            "const",
            "let",
            "var",
            "expression",
            "if",
            "for",
            "while",
            "do",
            "switch",
            "try",
            "block",
          ],
          next: "return",
        },
        // Separate consecutive `if` statements.
        { blankLine: "always", prev: "if", next: "if" },
      ],
    },
  },
];
