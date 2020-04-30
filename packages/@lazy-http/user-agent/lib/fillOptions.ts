/**
 * Created by user on 2020/5/1.
 */

import { IOptions } from './types';
import handleOptions from './handleOptions';

export function fillOptions(options?: IOptions, clone?: boolean)
{
	if (clone)
	{
		options = {
			...options,
		};
	}
	else
	{
		options = options || {};
	}

	const processVar = (typeof process !== 'undefined' ? process : void 0) || {} as typeof process;

	options.platform = options.platform || processVar.platform;
	options.version = options.version || processVar.version;

	return handleOptions(options)
}

export default fillOptions
