import { IOptions } from './lib/types';
import userAgentJSDOM from './lib/set/jsdom';
import userAgentCloudflare from './lib/set/cloudflare';
import RandomUserAgents from 'user-agents';
import userAgentDefault from './lib/set/default';

export function userAgent(options?: IOptions)
{
	switch (options?.typeSet)
	{
		case 'random':
			return new RandomUserAgents(options);
		case 'jsdom':
			return userAgentJSDOM(options);
		case 'cloudflare':
			return userAgentCloudflare(options);
		case 'default':
		default:
			return userAgentDefault(options);
	}
}

export default userAgent
