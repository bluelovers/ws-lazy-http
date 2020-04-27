"use strict";
/**
 * Created by user on 2020/4/27.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloudflareResponse = exports.isCloudflareHeaders = void 0;
const isCloudflareHeaders_1 = require("./lib/headers/isCloudflareHeaders");
Object.defineProperty(exports, "isCloudflareHeaders", { enumerable: true, get: function () { return isCloudflareHeaders_1.isCloudflareHeaders; } });
const isCloudflareResponse_1 = require("./lib/response/isCloudflareResponse");
Object.defineProperty(exports, "isCloudflareResponse", { enumerable: true, get: function () { return isCloudflareResponse_1.isCloudflareResponse; } });
exports.default = {
    isCloudflareHeaders: isCloudflareHeaders_1.isCloudflareHeaders,
    isCloudflareResponse: isCloudflareResponse_1.isCloudflareResponse,
};
//# sourceMappingURL=index.js.map