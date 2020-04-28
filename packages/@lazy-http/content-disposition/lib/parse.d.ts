/**
 * Created by user on 2020/4/28.
 */
/**
 * @see https://github.com/hapijs/content/blob/master/lib/index.js
 */
export declare function parse(header: string): {
    type: string;
    value: string;
    result: Record<string, string>;
};
export default parse;
