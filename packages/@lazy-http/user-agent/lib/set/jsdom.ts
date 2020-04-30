
import { IOptions } from '../types';
import handleOptions from '../handleOptions';

export function userAgentJSDOM(options?: IOptions)
{
	options = handleOptions(options, true);
	return `Mozilla/5.0 (${options.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${options.version}`
}

export default userAgentJSDOM
