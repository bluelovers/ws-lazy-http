"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAgent = void 0;
const jsdom_1 = __importDefault(require("./lib/set/jsdom"));
const cloudflare_1 = __importDefault(require("./lib/set/cloudflare"));
const user_agents_1 = __importDefault(require("user-agents"));
const default_1 = __importDefault(require("./lib/set/default"));
function userAgent(options) {
    switch (options === null || options === void 0 ? void 0 : options.typeSet) {
        case 'random':
            return new user_agents_1.default(options);
        case 'jsdom':
            return jsdom_1.default(options);
        case 'cloudflare':
            return cloudflare_1.default(options);
        case 'default':
        default:
            return default_1.default(options);
    }
}
exports.userAgent = userAgent;
exports.default = userAgent;
//# sourceMappingURL=index.js.map