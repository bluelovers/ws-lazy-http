"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAgentJSDOM = void 0;
const handleOptions_1 = __importDefault(require("../handleOptions"));
function userAgentJSDOM(options) {
    options = handleOptions_1.default(options, true);
    return `Mozilla/5.0 (${options.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${options.version}`;
}
exports.userAgentJSDOM = userAgentJSDOM;
exports.default = userAgentJSDOM;
//# sourceMappingURL=jsdom.js.map