/// <reference types="node" />
export declare const timeoutReg: RegExp;
export declare function getCloudflareTimeout(body: string | Buffer, defaultTimeout?: number): number;
export default getCloudflareTimeout;
