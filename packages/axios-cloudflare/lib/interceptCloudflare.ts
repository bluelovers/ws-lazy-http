import url from "url";
import delay from 'delay';
import { Cookie } from 'tough-cookie';
import clearenceCookies from './clearenceCookies';
import { AxiosInstance, AxiosResponse } from 'axios';
import cheerio, { load } from "cheerio";

export function interceptCloudflare(response: AxiosResponse, axios: AxiosInstance)
{
	const $ = load(response.data);

	const $form = $('#challenge-form');
	const targetUrl = $form.attr('action');
	const jschl_vc = $form.find('input[name=jschl_vc]').attr('value');
	const pass = $form.find('input[name=pass]').attr('value');

	const urlObj = url.parse(response.config.url);
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
	})

	if (part1 === null)
	{
		throw new Error('Cloudflare interception failed!');
	}

	const varname = part1[1] + '.' + part1[2];
	let jschl_answer = eval(part1[3]);

	const challanges = scriptRows[15].split(';');

	{
		let x = jschl_answer;
		const saveToExec = /^x[+\-*]=[!+()[\]]+$/;

		challanges.forEach(challenge =>
		{
			challenge = challenge.replace(varname, 'x');

			if (saveToExec.test(challenge))
			{
				eval(challenge);
			}
		});

		jschl_answer = x;
	}

	jschl_answer += urlObj.hostname.length;

	return delay(4000).then(() =>
	{
		return axios({
			method: 'get',
			url: url.resolve(urlObj.href, targetUrl),
			params: { jschl_vc, pass, jschl_answer },
			validateStatus: status => status === 302,
			maxRedirects: 0,
		}).then(innerResponse =>
		{
			innerResponse.headers['set-cookie'].forEach(cookieString =>
			{
				const cookie = Cookie.parse(cookieString);

				if (cookie.key === 'cf_clearance')
				{
					clearenceCookies[urlObj.hostname] = cookie.value;
				}
			});

			return axios(response.config);
		});
	});
}

export default interceptCloudflare
