import openapiTS, { astToString } from "openapi-typescript";
import { write } from "~/files";
import { commonExtractor, type Extractor } from "~/extractor";

export type Config = {
  source: Parameters<typeof openapiTS>[0];
  extractor: Extractor;
  options: Parameters<typeof openapiTS>[1] & { endPoint: string };
};

export async function parse({ source, extractor, options }: Config) {
  const ast = await openapiTS(source, options);
  write("whole-api.ts", astToString(ast));

  const paths = commonExtractor.extractPaths(ast);
  if (!paths) {
    throw new Error("paths not found in ast");
  }

  const components = commonExtractor.extractComponents(ast);
  if (!components) {
    throw new Error("components not found in ast");
  }

  const targetPath = commonExtractor.extractTargetPath(
    ast,
    paths,
    options.endPoint,
  );
}
