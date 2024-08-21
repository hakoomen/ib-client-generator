import { Node } from "typescript";

export type Extractor = {};

export type GenericExtractor = {
  extractPaths: (ast: Node[]) => Node | undefined;
  extractComponents: (ast: Node[]) => Node | undefined;
  extractTargetPath: (ast: Node[], path: Node, endPoint: string) => Node;
};
