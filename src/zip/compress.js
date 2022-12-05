import { createReadStream, createWriteStream } from "node:fs";
import zlib from "zlib";

export const compress = async () => {
  var file = "files/fileToCompress.txt";
  var arc = "files/archive.gz";
  const gzip = zlib.createGzip();

  const inp = createReadStream(file);
  var out = createWriteStream(arc);
  inp.pipe(gzip).pipe(out);
};

compress();
