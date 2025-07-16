import { nextJsConfig } from "@repo/eslint-config/next";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...nextJsConfig,

  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: new URL(".", import.meta.url).pathname,
      },
    },
  },
];
