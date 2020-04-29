import { basename } from 'path';

/**
 * Created by user on 2020/4/28.
 */
export { parse } from './lib/parse';

export function encode(filename: string)
{
	return encodeURIComponent(filename)
}

export function decode(encoded_filename: string)
{
	return decodeURIComponent(encoded_filename)
}

const NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/ug

export function contentDisposition(filename: string)
{
	filename = basename(filename);

	const encoded_filename = encode(filename);
	if (NON_LATIN1_REGEXP.test(filename))
	{
		filename = encoded_filename
	}

	return `attachment; filename="${filename}"; filename*=UTF-8''${encoded_filename}`
}

export default contentDisposition
