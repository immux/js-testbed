import * as React from "react";
import * as ReactDom from "react-dom";

import "./WebRoot.css";
import { EvaluateError, EvaluateRequest, EvaluateResult } from "../../types";

function WebRoot() {
    let [expression, setExpression] = React.useState("1+1");
    let [result, setResult] = React.useState(0);
    return (
        <div>
            <input
                value={expression}
                onChange={event => setExpression(event.target.value)}
            />
            <button
                onClick={
                    async () => {
                        const request: EvaluateRequest = {
                            type: "Request",
                            expression,
                        };
                        const response = await fetch(`/api`, {
                            method: "POST",
                            body: JSON.stringify(request),
                        });
                        const data: EvaluateResult | EvaluateError = await response.json();
                        if (data.type === "Result") {
                            setResult(data.result);
                        }
                    }
                }
            >
                Calculate
            </button>
            <div>
                {result}
            </div>
        </div>
    )
}

ReactDom.render(<WebRoot />, document.getElementById("REACT-ROOT"));
