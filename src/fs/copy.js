import * as fs from "fs/promises";

export const copy = async () => {
  try {
    var path = "files";
    var dir = "files_copy";
    const files = await fs.readdir(path);
    fs.mkdir(dir)
      .then(() => {
        for (let i = 0; i < files.length; i++) {
          fs.copyFile(path + "/" + files[i], dir + "/" + files[i]);
        }
      })
      .catch(() => console.log("FS operation failed"));
  } catch (error) {
    console.log("FS operation failed");
  }
};

copy();
