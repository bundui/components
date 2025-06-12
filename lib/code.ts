import fs from "fs";

export const extractCodeFromFilePath = (filePath: string) => {
  return fs.readFileSync(filePath, "utf-8");
};
