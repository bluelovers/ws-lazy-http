export declare function getUserAgentFromWindow(win: Window): string;
export declare function getUserAgentFromHeaders(headers: any): string;
export declare function getUserAgent(opts?: {
    headers?: any;
    window?: Window;
}): string;
export default getUserAgent;
