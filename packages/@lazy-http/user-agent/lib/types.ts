/**
 * Created by user on 2020/5/1.
 */

import UserAgents from 'user-agents';
type _UserAgentsData = Partial<UserAgents["data"]>

export type IUserAgentTypeSet = string | 'cloudflare' | 'jsdom' | 'random' | 'default';
export type IUserAgentDeviceCategory = string | 'desktop' | 'mobile' | 'tablet';
export type IUserAgentPlatform = string | 'Win32' | 'Win64';

export interface IOptions extends _UserAgentsData
{
	version?: string,
	typeSet?: IUserAgentTypeSet,

	platform?: IUserAgentPlatform,
	deviceCategory?: IUserAgentDeviceCategory,
}
