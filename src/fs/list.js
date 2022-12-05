import * as fs from "fs/promises";

export const list = async () => {
  try {
    var path = "files";
    const files = await fs.readdir(path); // Читаем содержимое path
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  } catch (error) {
    console.log("FS operation failed");
  }
};

list();
