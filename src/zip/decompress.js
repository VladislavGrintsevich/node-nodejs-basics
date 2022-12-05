import { createReadStream, createWriteStream } from "node:fs";
import zlib from "zlib";

export const decompress = async () => {
  var file = "files/fileToCompress.txt";
  var arc = "files/archive.gz";
  const gzip = zlib.Gunzip();

  const inp = createReadStream(arc);
  var out = createWriteStream(file);
  inp.pipe(gzip).pipe(out);
};

decompress();
