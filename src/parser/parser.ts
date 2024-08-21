import openapiTS, { astToString } from "openapi-typescript";
import { write } from "~/files";
import type { Generator } from "~/generators";

export type Config = {
  source: Parameters<typeof openapiTS>[0];
  generator: Generator;
  options: Parameters<typeof openapiTS>[1] & { endPoint: string };
};

export async function parse({ source, generator, options }: Config) {
  const ast = await openapiTS(source, options);
  write("whole-api.ts", astToString(ast));

  const paths = generator.extractPaths(ast);
  if (!paths) {
    throw new Error("paths not found in ast");
  }

  const components = generator.extractComponents(ast);
  if (!components) {
    throw new Error("components not found in ast");
  }
}
