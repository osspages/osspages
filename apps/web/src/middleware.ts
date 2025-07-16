import { noseconeOptions, noseconeOptionsWithToolbar, noseconeMiddleware } from "@repo/security/middleware";

const securityHeaders = noseconeMiddleware(
  process.env.VERCEL_ENV === "preview" ? noseconeOptionsWithToolbar : noseconeOptions
);

export default securityHeaders;
