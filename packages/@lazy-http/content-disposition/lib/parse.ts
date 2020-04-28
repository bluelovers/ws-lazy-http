/**
 * Created by user on 2020/4/28.
 */

const contentDispositionRegex = /^\s*(form-data|attachment)\s*(?:;\s*(.+))?$/i;

/**
 * 1: name
 * 2: *
 * 3: ext-value
 * 4: quoted
 * 5: token
 */
const contentDispositionParamRegex = /([^\=\*\s]+)(\*)?\s*\=\s*(?:([^;'"\s]+\'[\w-]*\'[^;\s]+)|(?:\"([^"]*)\")|([^;\s]*))(?:\s*(?:;\s*)|$)/g;

/**
 * @see https://github.com/hapijs/content/blob/master/lib/index.js
 */
export function parse(header: string)
{
	if (!header)
	{
		throw new TypeError('Missing content-disposition header');
	}

	const match = header.match(contentDispositionRegex);
	if (!match)
	{
		throw new TypeError('Invalid content-disposition header format');
	}

	const type = match[1].toLowerCase();
	const parameters = match[2];
	if (!parameters)
	{
		throw new TypeError('Invalid content-disposition header missing parameters');
	}

	let keyCache: string;
	let value: string;
	const result: Record<string, string> = {};
	parameters.replace(contentDispositionParamRegex, ($0, $1, $2, $3, $4, $5) =>
	{

		if ($1 === '__proto__')
		{
			throw new TypeError('Invalid content-disposition header format includes invalid parameters');
		}

		const _key = `${$1}${$2 ?? ''}`;
		let _value: string;

		if ($2)
		{
			if (!$3)
			{
				throw new TypeError('Invalid content-disposition header format includes invalid parameters');
			}

			try
			{
				_value = $3.split('\'')[2];

				if (_value.length && !value?.length)
				{
					value = _value;
					keyCache = _key;
				}
			}
			catch (err)
			{
				throw new TypeError('Invalid content-disposition header format includes invalid parameters');
			}
		}
		else
		{
			_value = $4 || $5 || '';

			if (_value.length && !value?.length)
			{
				keyCache = _key;
			}
		}

		if ($1 === 'name' &&
			_value === '__proto__')
		{

			throw new TypeError('Invalid content-disposition header format includes invalid parameters');
		}

		result[_key] = _value;

		return $0
	});

	if (type === 'form-data' && !result.name)
	{
		throw new TypeError('Invalid content-disposition header missing name parameter');
	}

	value = (result?.['filename*'] ?? result?.['filename'] ?? (value?.length && value) ?? result?.[`${keyCache}*`] ?? result?.[`${keyCache}`]);
	if (typeof value !== 'undefined')
	{
		value = decodeURIComponent(value)
	}

	return {
		type,
		value,
		result,
	};
}

export default parse
