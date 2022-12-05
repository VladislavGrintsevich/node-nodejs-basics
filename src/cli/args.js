export const parseArgs = () => {
  const arg = process.argv.slice(2);

  arg.forEach((val, i) => {
    if (val.slice(0, 2) === "--") {
      console.log(val.slice(2) + " is " + arg[i + 1]);
    }
  });
};

parseArgs();
