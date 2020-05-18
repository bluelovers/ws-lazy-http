"use strict";
/**
 * Created by user on 2020/5/2.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudflareScriptBody = exports.reScriptBody = void 0;
exports.reScriptBody = /setTimeout\(\s*function\s*\(\)\{\s*(var\s+(?:[a-z]\s*,\s*)(?:[a-z]\s*,\s*)+(?:[a-z]\s*,\s*).+?\r?\n[\s\S]+?a\.value\s*=.+?)\r?\n[\s\S]+?\},\s*(\d{4,5})\);\s*(?:\/\*eoc\*\/)?/;
function getCloudflareScriptBody(body) {
    body = String(body);
    return exports.reScriptBody.exec(body)[1];
}
exports.getCloudflareScriptBody = getCloudflareScriptBody;
exports.default = getCloudflareScriptBody;
//# sourceMappingURL=script_body.js.map