"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCloudflareTimeout = exports.timeoutReg = void 0;
exports.timeoutReg = /setTimeout\(\s*function\s*\(\){\s*(var\s+(?:[a-z]\s*,\s*)(?:[a-z]\s*,\s*)+(?:[a-z]\s*,\s*).+?\r?\n[\s\S]+?a\.value\s*=.+?)\r?\n[\s\S]+?,\s*(\d{4,5})\);\s*(?:\/\*eoc\*\/)?/;
function getCloudflareTimeout(body, defaultTimeout = 5000) {
    const timeout = exports.timeoutReg.exec(String(body));
    let ms = (timeout === null || timeout === void 0 ? void 0 : timeout.length) > 1 ? Number(timeout[2]) : defaultTimeout;
    if (ms <= 0) {
        ms = defaultTimeout;
    }
    return ms;
}
exports.getCloudflareTimeout = getCloudflareTimeout;
exports.default = getCloudflareTimeout;
//# sourceMappingURL=timeout.js.map