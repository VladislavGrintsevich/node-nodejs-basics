export const parseEnv = () => {
  const arg = process.argv.slice(2);

  arg.forEach((val, i) => {
    if (val.slice(0, 4) === "RSS_") {
      console.log("RSS_name" + (i + 1) + "=" + val.slice(4));
    }
  });
};

parseEnv();
