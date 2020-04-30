"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleOptions = void 0;
function handleOptions(options, clone) {
    if (clone) {
        options = {
            ...options,
        };
    }
    else {
        options = options || {};
    }
    options.platform = options.platform || "Win64";
    options.version = options.version || '1.0.0';
    return options;
}
exports.handleOptions = handleOptions;
exports.default = handleOptions;
//# sourceMappingURL=handleOptions.js.map