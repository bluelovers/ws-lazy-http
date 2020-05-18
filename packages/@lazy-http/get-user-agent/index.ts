import valueFromRecord from 'value-from-record'
import getWindow from '../get-window';

export function getUserAgentFromWindow(win: Window): string
{
	return win?.navigator?.userAgent
}

export function getUserAgentFromHeaders(headers: any): string
{
	return (headers as Headers)?.get?.('user-agent') || valueFromRecord('user-agent', headers, {
		allowUndefinedRecord: true,
	})
}

export function getUserAgent(opts?: {
	headers?: any,
	window?: Window,
})
{
	return getUserAgentFromHeaders(opts?.headers) ?? getUserAgentFromWindow(opts?.window ?? getWindow())
}

export default getUserAgent
