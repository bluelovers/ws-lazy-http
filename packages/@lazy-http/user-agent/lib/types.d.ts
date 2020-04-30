/**
 * Created by user on 2020/5/1.
 */
import UserAgents from 'user-agents';
declare type _UserAgentsData = Partial<UserAgents["data"]>;
export declare type IUserAgentTypeSet = string | 'cloudflare' | 'jsdom' | 'random' | 'default';
export declare type IUserAgentDeviceCategory = string | 'desktop' | 'mobile' | 'tablet';
export declare type IUserAgentPlatform = string | 'Win32' | 'Win64';
export interface IOptions extends _UserAgentsData {
    version?: string;
    typeSet?: IUserAgentTypeSet;
    platform?: IUserAgentPlatform;
    deviceCategory?: IUserAgentDeviceCategory;
}
export {};
