/**
 * Url modules.
 * @module zaxUrl
 * @author jsonchou
 * @description support server & client & miniprogram side
 * @see https://github.com/jsonchou/zax-url
 */
let zaxUtil = {
    strToObj(query) {
        return query.split('&').reduce((sum, item) => {
            let arr = item.split('=');
            arr[0] && (sum[arr[0]] = arr[1]);
            return sum;
        }, {});
    },
    objToStr(params) {
        return Object.keys(params)
            .reduce((sum, item) => {
            /* istanbul ignore next */
            if (item && params[item]) {
                /* istanbul ignore next */
                sum.push(`${item}=${params[item]}`);
            }
            return sum;
        }, [])
            .join('&');
    },
    port(protocol) {
        /* istanbul ignore next */
        switch (protocol) {
            case 'http:':
                return '80';
            case 'https:':
                return '443';
            default:
                /* istanbul ignore next */
                return location.port || '80';
        }
    }
};
/**
 * get value from url search part
 *
 * @example
 * ```js
 * get("pages/index?id=2", 'id')
 * => 2
 * ```
 *
 * @param url {String} url
 * @param key {String} key
 * @returns {String} string of result
 */
const get = (url, key) => {
    /* istanbul ignore next */
    if (!url) {
        console.log('url must be a string');
        return '';
    }
    if (!key) {
        console.log('key must be a string');
        return '';
    }
    let searchObj = zaxUrl.search(url);
    return searchObj[key] || '';
};
/* istanbul ignore next */
/**
 * set & get new url
 *
 * @example
 * ```js
 * set("pages/index?id=2", 'foo','bar')
 * => pages/index?id=2&foo=bar
 * ```
 *
 * @param url {String} url
 * @param key {String} key
 * @param value {String} value
 * @returns {String} new url
 */
const set = (url, key, value = '') => {
    if (!key) {
        console.log('key must be a string');
        return url;
    }
    let searchObj = zaxUrl.search(url);
    searchObj[key] = value;
    let res = zaxUtil.objToStr(searchObj);
    let hash = zaxUrl.parse(url).hash;
    let tmp = url.replace(hash, '');
    let askIdx = tmp.indexOf('?');
    askIdx = askIdx > -1 ? askIdx : tmp.length;
    let left = url.slice(0, askIdx);
    let mid = res ? '?' + res : '';
    let right = hash;
    return left + mid + right;
};
/**
 * delete key & get new url
 *
 * @example
 * ```js
 * del("pages/index?id=2", 'id')
 * => pages/index
 * ```
 *
 * @param url {String} url
 * @param key {String} key
 * @returns {String} new url
 */
const del = (url, key) => {
    return set(url, key, '');
};
/**
 * get key of value of url
 *
 * @example
 * ```js
 * parse("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => {
    host: 'demo.com',
    hostname: 'demo.com',
    href: mixUrl,
    origin: 'https://demo.com',
    pathname: '/index',
    port: '443',
    protocol: 'https:',
    hash: '#/path/id=3?bizOrigin=bar',
    search: '?bizOrigin=foo&other=quz'
}
 * ```
 *
 * @param url {String} url
 * @returns {UrlObject} parse object
 */
const parse = (url) => {
    if (!url) {
        console.log('url must be a string');
        return {
            href: '',
            hash: '',
            search: ''
        };
    }
    /* istanbul ignore next */
    if (typeof document != 'undefined') {
        // client side
        let a = document.createElement('a');
        a.href = url;
        return {
            hash: a.hash,
            host: a.host || location.host,
            hostname: a.hostname || location.hostname,
            href: a.href,
            origin: a.origin,
            pathname: a.pathname.charAt(0) != '/' ? '/' + a.pathname : a.pathname,
            port: '0' === a.port || '' === a.port ? zaxUtil.port(a.protocol) : a.port,
            protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
            search: a.search || ''
        };
    } /* istanbul ignore next */
    else {
        //mini program & server side
        let hash = url.slice(url.lastIndexOf('#') > -1 ? url.lastIndexOf('#') : url.length) || '';
        let tmp = url.replace(hash, '');
        let search = tmp.slice(tmp.lastIndexOf('?') > -1 ? tmp.lastIndexOf('?') : tmp.length) || '';
        return {
            pathname: url.replace(search, '').replace(hash, ''),
            href: url,
            hash,
            search
        };
    }
};
/**
 * get url search part
 *
 * @example
 * ```js
 * search("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => { bizOrigin: 'foo', other: 'quz' }
 * ```
 *
 * @param url {String} url
 * @returns {IKV} url search part
 */
const search = (url) => {
    let search = parse(url).search.replace('?', '');
    if (!search) {
        // console.log('no search char');
        return {};
    }
    return zaxUtil.strToObj(search);
};
/**
 * get url hash part without # prefix
 *
 * @example
 * ```js
 * hash("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => /path/id=3?bizOrigin=bar
 * ```
 *
 * @param url {String} url
 * @returns {String} url hash part
 */
const hash = (url) => {
    let hash = parse(url).hash.replace('#', '');
    if (!hash) {
        console.log('no hash char');
        return '';
    }
    return hash;
};
/**
 * get last url part of key
 *
 * @example
 * ```js
 * path("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => index
 * ```
 *
 * @param url {String} url
 * @param pos {Number} pos
 * @returns {String} key path
 */
const pathKey = (url, pos = 0) => {
    /* istanbul ignore next */
    let pathname = parse(url).pathname || '';
    let last = pathname.split('/').pop() || '';
    return last.slice(pos);
};
export const zaxUrl = {
    parse,
    get,
    set,
    del,
    search,
    hash,
    pathKey
};
//# sourceMappingURL=index.js.map
