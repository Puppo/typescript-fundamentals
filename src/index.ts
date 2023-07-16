type Options = {
  debug: boolean;
  log: "info" | "warn" | "error";
  port: number;
};

function start({ debug = true, log = "warn", port = 3000 }: Partial<Options>) {
  // do something
}

start({});
