import * as fs from "fs/promises";

export const create = async () => {
  try {
    fs.access("files/fresh.txt")
      .then(() => console.log("FS operation failed"))
      .catch(() => {
        fs.writeFile("files/fresh.txt", "I am fresh and young");
      });
  } catch (error) {
    console.log("FS operation failed");
  }
};

create();
