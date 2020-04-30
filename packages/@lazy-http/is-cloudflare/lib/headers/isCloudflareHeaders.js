"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloudflareHeaders = void 0;
function isCloudflareHeaders(headers) {
    var _a;
    return typeof headers['cf-ray'] !== 'undefined'
        //&& headers['server']?.indexOf('cloudflare') !== -1
        && /^(cloudflare|sucuri)/i.test((_a = headers['server']) !== null && _a !== void 0 ? _a : '');
}
exports.isCloudflareHeaders = isCloudflareHeaders;
exports.default = isCloudflareHeaders;
//# sourceMappingURL=isCloudflareHeaders.js.map