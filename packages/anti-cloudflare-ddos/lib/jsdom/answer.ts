import { JSDOM } from 'jsdom';

export const reScriptBody = /setTimeout\(\s*function\s*\(\)\{\s*(var\s+(?:[a-z]\s*,\s*)(?:[a-z]\s*,\s*)+(?:[a-z]\s*,\s*).+?\r?\n[\s\S]+?a\.value\s*=.+?)\r?\n[\s\S]+?\},\s*(\d{4,5})\);\s*(?:\/\*eoc\*\/)?/;

export function getCloudflareAnswer(body: string | Buffer, domain: string)
{
	body = String(body);
	let code: string;

	body = body.replace(reScriptBody, ($0, $1, $2) => {

		return code = `(function () {${$1.replace('.submit()', '')}})();`;
	});

	body += `<script>${code}</script>`;

	let runScripts = 'dangerously';
	runScripts = 'outside-only';

	let url = `https://${domain}`;

	const jsdom = new JSDOM(body, {
		url: url,
		referrer: url,
		// @ts-ignore
		runScripts,
	})

	if (runScripts === 'outside-only')
	{
		jsdom.window.eval(code);
	}

	return jsdom.window['jschl-answer'].value as string
}

export default getCloudflareAnswer
