import { astToString } from "openapi-typescript";

export const inlineType = ((ast, options) => {
  return astToString(ast, options);
}) satisfies typeof astToString;
