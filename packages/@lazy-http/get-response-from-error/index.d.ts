/**
 * Created by user on 2020/5/1.
 */
export declare type IWithResponse<R> = {
    response?: R;
};
export declare type IUnpackResponse<E> = E extends IWithResponse<infer R> ? R : never;
export declare function getResponseFromError<R>(err: IWithResponse<R>): R;
export default getResponseFromError;
