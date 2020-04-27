"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCloudflareResponse = void 0;
const isCloudflareHeaders_1 = __importDefault(require("../headers/isCloudflareHeaders"));
const cheerio_1 = require("cheerio");
function isCloudflareResponse(response) {
    if (isCloudflareHeaders_1.default(response.headers)) {
        const $ = cheerio_1.load(response.data);
        if ($('#challenge-form input[name=jschl_vc]').length > 0) {
            return true;
        }
    }
    return false;
}
exports.isCloudflareResponse = isCloudflareResponse;
exports.default = isCloudflareResponse;
//# sourceMappingURL=isCloudflareResponse.js.map