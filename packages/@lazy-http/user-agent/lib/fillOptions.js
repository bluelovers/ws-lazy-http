"use strict";
/**
 * Created by user on 2020/5/1.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillOptions = void 0;
const handleOptions_1 = __importDefault(require("./handleOptions"));
function fillOptions(options, clone) {
    if (clone) {
        options = {
            ...options,
        };
    }
    else {
        options = options || {};
    }
    const processVar = (typeof process !== 'undefined' ? process : void 0) || {};
    options.platform = options.platform || processVar.platform;
    options.version = options.version || processVar.version;
    return handleOptions_1.default(options);
}
exports.fillOptions = fillOptions;
exports.default = fillOptions;
//# sourceMappingURL=fillOptions.js.map