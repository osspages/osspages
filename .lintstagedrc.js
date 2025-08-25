/**
 * @type {import('lint-staged').Configuration}
 */
export default {
  "(apps|packages)/**/*.{js,ts,jsx,tsx,md,mdx}": ["prettier --write"],
  "*.json": ["prettier --write"],
  "**/package.json": () => "pnpm run syncpack:fix:format-safe",
};
