import * as http from "http";
import { EvaluateError, EvaluateRequest, EvaluateResult } from "../types";

function onGet(url?: string): string {
    return `Get method ${url}`;
}

function onPost(body: string): EvaluateResult | EvaluateError {
    const request: EvaluateRequest = JSON.parse(body);
    const result = eval(request.expression);
    return {
        type: "Result",
        result,
    }
}

function main() {
    const server = http.createServer(function(request, response) {
        if (request.method == "POST") {
            let body = "";
            request.on("data", function(data) {
                body += data;
            });
            request.on("end", function() {
                response.writeHead(200, {"Content-Type": "application/json"});
                response.end(JSON.stringify(onPost(body)));
            })
        } else {
            response.end(onGet(request.url));
        }
    });
    server.listen(3002);
}

if (require.main === module) {
    main();
}
