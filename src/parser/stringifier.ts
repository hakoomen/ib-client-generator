import {
  TypeNode,
  createPrinter,
  createSourceFile,
  ScriptTarget,
  ScriptKind,
  EmitHint,
} from "typescript";

export function stringify(node: TypeNode) {
  const printer = createPrinter();
  const resultFile = createSourceFile(
    "temp.ts",
    "",
    ScriptTarget.Latest,
    false,
    ScriptKind.TS,
  );

  return printer.printNode(EmitHint.Unspecified, node, resultFile);
}
