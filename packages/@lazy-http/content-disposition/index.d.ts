/**
 * Created by user on 2020/4/28.
 */
export { parse } from './lib/parse';
export declare function encode(filename: string): string;
export declare function decode(encoded_filename: string): string;
export declare function contentDisposition(filename: string): string;
export default contentDisposition;
