"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudflareAnswer = exports.reScriptBody = void 0;
const jsdom_1 = require("jsdom");
exports.reScriptBody = /setTimeout\(\s*function\s*\(\)\{\s*(var\s+(?:[a-z]\s*,\s*)(?:[a-z]\s*,\s*)+(?:[a-z]\s*,\s*).+?\r?\n[\s\S]+?a\.value\s*=.+?)\r?\n[\s\S]+?\},\s*(\d{4,5})\);\s*(?:\/\*eoc\*\/)?/;
function getCloudflareAnswer(body, domain) {
    body = String(body);
    let code;
    body = body.replace(exports.reScriptBody, ($0, $1, $2) => {
        return code = `(function () {${$1.replace('.submit()', '')}})();`;
    });
    body += `<script>${code}</script>`;
    let runScripts = 'dangerously';
    runScripts = 'outside-only';
    let url = `https://${domain}`;
    const jsdom = new jsdom_1.JSDOM(body, {
        url: url,
        referrer: url,
        // @ts-ignore
        runScripts,
    });
    if (runScripts === 'outside-only') {
        jsdom.window.eval(code);
    }
    return jsdom.window['jschl-answer'].value;
}
exports.getCloudflareAnswer = getCloudflareAnswer;
exports.default = getCloudflareAnswer;
//# sourceMappingURL=answer.js.map