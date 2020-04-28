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

export function contentDisposition(filename: string)
{
	const encoded_filename = encode(filename);
	return `attachment; filename="${encoded_filename}"; filename*=UTF-8''${encoded_filename}`
}

export default contentDisposition
