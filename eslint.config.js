// eslint.config.js (Flat ESLint config for the monorepo root)

import { config as base } from "@repo/eslint-config/base";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...base,
  {
    ignores: ["apps/**", "packages/**"],
  },
];
