import { isInterfaceDeclaration, Node } from "typescript";
import type { GenericExtractor } from "~/extractor";

export const extractor = {
  extractPaths: (ast: Node[]) => {
    return ast.find((node) => {
      if (isInterfaceDeclaration(node)) {
        if (node.name.text === "paths") {
          return node;
        }
      }
    });
  },
  extractComponents: (ast: Node[]) => {
    return ast.find((node) => {
      if (isInterfaceDeclaration(node)) {
        if (node.name.text === "components") {
          return node;
        }
      }
    });
  },
  extractTargetPath(ast, path, endPoint) {
    return ast[0];
  },
} satisfies GenericExtractor;
