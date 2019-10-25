/**
 * Url modules.
 * @module zaxUrl
 * @author jsonchou
 * @description support server & client & miniprogram side
 * @see https://github.com/jsonchou/zax-url
 */
declare type IKV = {
    [key: string]: string | number;
};
declare type UrlObject = {
    href: string;
    hash: string;
    search: string;
    host?: string;
    hostname?: string;
    origin?: string;
    pathname?: string;
    port?: string;
    protocol?: string;
};
export declare const zaxUrl: {
    parse: (url: string) => UrlObject;
    get: (url: string, key: string) => string;
    set: (url: string, key: string, value?: string) => string;
    del: (url: string, key: string) => string;
    search: (url: string) => IKV;
    hash: (url: string) => string;
    pathKey: (url: string, pos?: number) => string;
};
export {};
