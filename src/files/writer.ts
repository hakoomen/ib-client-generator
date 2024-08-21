import { writeFile } from "fs";

export async function write(fileName: string, content: string) {
  return new Promise<void>((resolve) => {
    writeFile(fileName, content, () => {
      resolve();
    });
  });
}
