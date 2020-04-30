"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloudflareCaptchaResponse = void 0;
const isCloudflareHeaders_1 = __importDefault(require("../headers/isCloudflareHeaders"));
const hasCloudflareCaptcha_1 = __importDefault(require("./body/hasCloudflareCaptcha"));
function isCloudflareCaptchaResponse(response) {
    if (isCloudflareHeaders_1.default(response.headers)) {
        return hasCloudflareCaptcha_1.default(response.data);
    }
    return false;
}
exports.isCloudflareCaptchaResponse = isCloudflareCaptchaResponse;
exports.default = isCloudflareCaptchaResponse;
//# sourceMappingURL=isCloudflareCaptchaResponse.js.map