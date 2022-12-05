import * as fs from "fs/promises";
import crypto from "crypto";

export const calculateHash = async () => {
  var file = "files/fileToCalculateHashFor.txt";
  let data = await fs.readFile(file, "utf8");

  var hash = crypto.createHash("sha256").update(data).digest("hex");
  console.log(hash);
};

calculateHash();
