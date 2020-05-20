export interface EvaluateRequest {
    type: "Request",
    expression: string,
}

export interface EvaluateResult {
    type: "Result",
    result: number,
}

export interface EvaluateError {
    type: "Error",
    message: number,
}