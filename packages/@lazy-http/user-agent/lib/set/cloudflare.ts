/**
 * Created by user on 2020/5/1.
 */

import { IOptions } from '../types';
import handleOptions from '../handleOptions';

export function userAgentCloudflare(options?: IOptions)
{
	//options = handleOptions(options, true);
	return `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.62 Safari/537.36`
}

export default userAgentCloudflare
