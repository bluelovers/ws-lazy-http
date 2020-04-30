import { IHeaders } from 'typed-http-headers';
declare module 'typed-http-headers' {
    interface IHeaders extends Record<any, any> {
        'cf-ray'?: string;
        server?: string;
    }
}
export interface IResponse extends Record<any, any> {
    headers?: IHeaders;
    data?: any;
}
export { IHeaders };
