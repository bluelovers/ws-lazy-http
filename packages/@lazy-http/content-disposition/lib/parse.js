"use strict";
/**
 * Created by user on 2020/4/28.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const contentDispositionRegex = /^\s*(form-data|attachment)\s*(?:;\s*(.+))?$/i;
/**
 * 1: name
 * 2: *
 * 3: ext-value
 * 4: quoted
 * 5: token
 */
const contentDispositionParamRegex = /([^\=\*\s]+)(\*)?\s*\=\s*(?:([^;'"\s]+\'[\w-]*\'[^;\s]+)|(?:\"([^"]*)\")|([^;\s]*))(?:\s*(?:;\s*)|$)/g;
/**
 * @see https://github.com/hapijs/content/blob/master/lib/index.js
 */
function parse(header) {
    var _a, _b, _c, _d;
    if (!header) {
        throw new TypeError('Missing content-disposition header');
    }
    const match = header.match(contentDispositionRegex);
    if (!match) {
        throw new TypeError('Invalid content-disposition header format');
    }
    const type = match[1].toLowerCase();
    const parameters = match[2];
    if (!parameters) {
        throw new TypeError('Invalid content-disposition header missing parameters');
    }
    let keyCache;
    let value;
    const result = {};
    parameters.replace(contentDispositionParamRegex, ($0, $1, $2, $3, $4, $5) => {
        if ($1 === '__proto__') {
            throw new TypeError('Invalid content-disposition header format includes invalid parameters');
        }
        const _key = `${$1}${$2 !== null && $2 !== void 0 ? $2 : ''}`;
        let _value;
        if ($2) {
            if (!$3) {
                throw new TypeError('Invalid content-disposition header format includes invalid parameters');
            }
            try {
                _value = $3.split('\'')[2];
                if (_value.length && !(value === null || value === void 0 ? void 0 : value.length)) {
                    value = _value;
                    keyCache = _key;
                }
            }
            catch (err) {
                throw new TypeError('Invalid content-disposition header format includes invalid parameters');
            }
        }
        else {
            _value = $4 || $5 || '';
            if (_value.length && !(value === null || value === void 0 ? void 0 : value.length)) {
                keyCache = _key;
            }
        }
        if ($1 === 'name' &&
            _value === '__proto__') {
            throw new TypeError('Invalid content-disposition header format includes invalid parameters');
        }
        result[_key] = _value;
        return $0;
    });
    if (type === 'form-data' && !result.name) {
        throw new TypeError('Invalid content-disposition header missing name parameter');
    }
    value = ((_d = (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result['filename*']) !== null && _a !== void 0 ? _a : result === null || result === void 0 ? void 0 : result['filename']) !== null && _b !== void 0 ? _b : ((value === null || value === void 0 ? void 0 : value.length) && value)) !== null && _c !== void 0 ? _c : result === null || result === void 0 ? void 0 : result[`${keyCache}*`]) !== null && _d !== void 0 ? _d : result === null || result === void 0 ? void 0 : result[`${keyCache}`]);
    if (typeof value !== 'undefined') {
        value = decodeURIComponent(value);
    }
    return {
        type,
        value,
        result,
    };
}
exports.parse = parse;
exports.default = parse;
//# sourceMappingURL=parse.js.map