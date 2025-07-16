import { type NoseconeOptions, defaults, withVercelToolbar } from "@nosecone/next";
export { createMiddleware as noseconeMiddleware } from "@nosecone/next";

export const noseconeOptions: NoseconeOptions = {
  ...defaults,
  contentSecurityPolicy: false,
};

export const noseconeOptionsWithToolbar: NoseconeOptions = withVercelToolbar(noseconeOptions);
