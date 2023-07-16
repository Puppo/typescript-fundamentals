type Status = "idle" | "loading" | "loaded" | "error";

type MyExclude<T, U> = T extends U ? never : T;

type StatusWithoutError = Exclude<Status, "error">;

const t: StatusWithoutError = "idle";
