import { IOptions } from '../types';

export function userAgentDefault(options?: IOptions)
{
	//options = handleOptions(options, true);
	return `Mozilla 5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.129 Safari/537.36`
}

export default userAgentDefault
