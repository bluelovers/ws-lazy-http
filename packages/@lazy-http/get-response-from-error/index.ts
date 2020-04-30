/**
 * Created by user on 2020/5/1.
 */

export type IWithResponse<R> = {
	response?: R
}

export type IUnpackResponse<E> = E extends IWithResponse<infer R> ? R : never;

export function getResponseFromError<R>(err: IWithResponse<R>)
{
	return err.response;
}

export default getResponseFromError
