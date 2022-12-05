import { createReadStream } from "node:fs";

export const read = async () => {
  var file = "files/fileToRead.txt";
  const stream = createReadStream(file);

  stream.on("data", (data) => {
    process.stdout.write(data);
  });
};

read();
