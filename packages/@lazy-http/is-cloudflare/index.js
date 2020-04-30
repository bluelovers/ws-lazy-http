"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloudflareCaptchaResponse = exports.isCloudflareResponse = exports.isCloudflareHeaders = void 0;
const isCloudflareHeaders_1 = require("./lib/headers/isCloudflareHeaders");
Object.defineProperty(exports, "isCloudflareHeaders", { enumerable: true, get: function () { return isCloudflareHeaders_1.isCloudflareHeaders; } });
const isCloudflareResponse_1 = require("./lib/response/isCloudflareResponse");
Object.defineProperty(exports, "isCloudflareResponse", { enumerable: true, get: function () { return isCloudflareResponse_1.isCloudflareResponse; } });
const isCloudflareCaptchaResponse_1 = require("./lib/response/isCloudflareCaptchaResponse");
Object.defineProperty(exports, "isCloudflareCaptchaResponse", { enumerable: true, get: function () { return isCloudflareCaptchaResponse_1.isCloudflareCaptchaResponse; } });
exports.default = {
    isCloudflareHeaders: isCloudflareHeaders_1.isCloudflareHeaders,
    isCloudflareResponse: isCloudflareResponse_1.isCloudflareResponse,
    isCloudflareCaptchaResponse: isCloudflareCaptchaResponse_1.isCloudflareCaptchaResponse,
};
//# sourceMappingURL=index.js.map