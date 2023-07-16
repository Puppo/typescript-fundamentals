type FunctionResult =
  | {
      result: "success";
      value: string;
    }
  | {
      result: "error";
      error: Error;
    };

type GetError<T> = T extends { result: "error" } ? T : never;

type GetSuccess<T> = T extends { result: "success" } ? T : never;

type ErrorResult = GetError<FunctionResult>;
type SuccessResult = GetSuccess<FunctionResult>;
