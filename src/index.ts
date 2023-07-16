type FunctionResult =
  | {
      result: "success";
      value: string;
    }
  | {
      result: "error";
      error: Error;
    };

type ErrorResult =
  Extract<FunctionResult, { result: "error" }>;
type SuccessResult =
  Extract<FunctionResult, { result: "success" }>;
