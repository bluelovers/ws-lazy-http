import { parse } from "url";
import clearenceCookies from './clearenceCookies';
import { AxiosRequestConfig } from 'axios';

export function cloudflareRequestInterceptor(config: AxiosRequestConfig)
{
	const urlObj = parse(config.url);

	if (typeof clearenceCookies[urlObj.hostname] !== 'undefined')
	{
		if (typeof config.headers['cookie'] === 'undefined')
		{
			config.headers['cookie'] = '';
		}
		else
		{
			config.headers['cookie'] += ';';
		}

		config.headers['cookie'] += 'cf_clearance=' + clearenceCookies[urlObj.hostname];
	}

	return config;
}

export default cloudflareRequestInterceptor
