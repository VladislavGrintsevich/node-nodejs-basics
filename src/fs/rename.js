import * as fs from "fs/promises";

export const rename = async () => {
  var file = "files/wrongFilename.txt";
  var new_file = "files/properFilename.md";

  fs.access(file)
    .then(() => {
      fs.access(new_file)
        .then(() => console.log("FS operation failed"))
        .catch(() => {
          fs.rename(file, new_file);
        });
    })
    .catch(() => console.log("FS operation failed"));
};

rename();
