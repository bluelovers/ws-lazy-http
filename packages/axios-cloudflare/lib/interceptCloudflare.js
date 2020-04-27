"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.interceptCloudflare = void 0;
const url_1 = __importDefault(require("url"));
const delay_1 = __importDefault(require("delay"));
const tough_cookie_1 = require("tough-cookie");
const clearenceCookies_1 = __importDefault(require("./clearenceCookies"));
const cheerio_1 = require("cheerio");
function interceptCloudflare(response, axios) {
    const $ = cheerio_1.load(response.data);
    const $form = $('#challenge-form');
    const targetUrl = $form.attr('action');
    const jschl_vc = $form.find('input[name=jschl_vc]').attr('value');
    const pass = $form.find('input[name=pass]').attr('value');
    const urlObj = url_1.default.parse(response.config.url);
    const scriptRows = $('script').first().html().split('\n');
    const part1 = scriptRows[8].match(/^.*, (\w+)={"(\w+)":([!+()[\]]+)};.*$/);
    console.dir({
        $form,
        targetUrl,
        jschl_vc,
        pass,
        urlObj,
        scriptRows,
        part1,
    });
    if (part1 === null) {
        throw new Error('Cloudflare interception failed!');
    }
    const varname = part1[1] + '.' + part1[2];
    let jschl_answer = eval(part1[3]);
    const challanges = scriptRows[15].split(';');
    {
        let x = jschl_answer;
        const saveToExec = /^x[+\-*]=[!+()[\]]+$/;
        challanges.forEach(challenge => {
            challenge = challenge.replace(varname, 'x');
            if (saveToExec.test(challenge)) {
                eval(challenge);
            }
        });
        jschl_answer = x;
    }
    jschl_answer += urlObj.hostname.length;
    return delay_1.default(4000).then(() => {
        return axios({
            method: 'get',
            url: url_1.default.resolve(urlObj.href, targetUrl),
            params: { jschl_vc, pass, jschl_answer },
            validateStatus: status => status === 302,
            maxRedirects: 0,
        }).then(innerResponse => {
            innerResponse.headers['set-cookie'].forEach(cookieString => {
                const cookie = tough_cookie_1.Cookie.parse(cookieString);
                if (cookie.key === 'cf_clearance') {
                    clearenceCookies_1.default[urlObj.hostname] = cookie.value;
                }
            });
            return axios(response.config);
        });
    });
}
exports.interceptCloudflare = interceptCloudflare;
exports.default = interceptCloudflare;
//# sourceMappingURL=interceptCloudflare.js.map