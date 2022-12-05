import * as fs from "fs/promises";

export const remove = async () => {
  try {
    var delfile = "files/fileToRemove.txt";
    fs.access(delfile)
      .then(() => fs.unlink(delfile))
      .catch(() => console.log("FS operation failed"));
  } catch (error) {
    console.log("FS operation failed");
  }
};

remove();
