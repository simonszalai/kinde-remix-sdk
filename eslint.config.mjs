import globals from "globals";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import eslintJs from "@eslint/js";

export default [
  // Base config for all files
  {
    ...eslintJs.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: {
      ...typescript.configs.recommended.rules,
    },
  },

  // Override for config files
  {
    files: [".eslintrc.{js,cjs}"],
    languageOptions: {
      sourceType: "script",
    },
  },
];
