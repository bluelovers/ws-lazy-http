import { IOptions } from './types';

export function handleOptions(options?: IOptions, clone?: boolean)
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

	options.platform = options.platform || "Win64";
	options.version = options.version || '1.0.0';

	return options
}

export default handleOptions
