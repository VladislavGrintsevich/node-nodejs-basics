import { createWriteStream } from "node:fs";

export const write = async () => {
  var file = "files/fileToWrite.txt";
  const writableStream = createWriteStream(file);

  writableStream.write("Something important data");
  writableStream.end();
};

write();
