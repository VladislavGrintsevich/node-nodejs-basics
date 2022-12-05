import { createReadStream, createWriteStream } from "node:fs";

export const transform = async () => {
  var fileread = "files/fileToRead.txt";
  var filewrite = "files/fileToWrite.txt";
  const readStream = createReadStream(fileread);
  const writeStream = createWriteStream(filewrite);

  readStream.pipe(writeStream);
};

transform();
