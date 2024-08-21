import { isInterfaceDeclaration, Node } from "typescript";
import { Generator } from "~/generators";

export default {
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
} satisfies Generator;
