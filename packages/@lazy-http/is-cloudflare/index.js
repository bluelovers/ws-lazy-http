"use strict";
/**
 * Created by user on 2020/4/27.
 */
exports.__esModule = true;
exports.isCloudflareCaptchaResponse = exports.isCloudflareResponse = exports.isCloudflareHeaders = void 0;
var isCloudflareHeaders_1 = require("./lib/headers/isCloudflareHeaders");
exports.isCloudflareHeaders = isCloudflareHeaders_1.isCloudflareHeaders;
var isCloudflareResponse_1 = require("./lib/response/isCloudflareResponse");
exports.isCloudflareResponse = isCloudflareResponse_1.isCloudflareResponse;
var isCloudflareCaptchaResponse_1 = require("./lib/response/isCloudflareCaptchaResponse");
exports.isCloudflareCaptchaResponse = isCloudflareCaptchaResponse_1.isCloudflareCaptchaResponse;
exports["default"] = {
    isCloudflareHeaders: isCloudflareHeaders_1.isCloudflareHeaders,
    isCloudflareResponse: isCloudflareResponse_1.isCloudflareResponse,
    isCloudflareCaptchaResponse: isCloudflareCaptchaResponse_1.isCloudflareCaptchaResponse,
};
