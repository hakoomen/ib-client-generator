import { Node } from "typescript";

export type Generator = {
  extractPaths: (ast: Node[]) => Node | undefined;
  extractComponents: (ast: Node[]) => Node | undefined;
};
