import * as fs from "fs/promises";

export const read = async () => {
  try {
    var file = "files/fileToRead.txt";
    let fileContent = await fs.readFile(file, "utf8");
    console.log(fileContent);
  } catch (error) {
    console.log("FS operation failed");
  }
};

read();
