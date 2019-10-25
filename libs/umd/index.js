/**
 * Url modules.
 * @module zaxUrl
 * @author jsonchou
 * @description support server & client & miniprogram side
 * @see https://github.com/jsonchou/zax-url
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var zaxUtil = {
        strToObj: function (query) {
            return query.split('&').reduce(function (sum, item) {
                var arr = item.split('=');
                arr[0] && (sum[arr[0]] = arr[1]);
                return sum;
            }, {});
        },
        objToStr: function (params) {
            return Object.keys(params)
                .reduce(function (sum, item) {
                /* istanbul ignore next */
                if (item && params[item]) {
                    /* istanbul ignore next */
                    sum.push(item + "=" + params[item]);
                }
                return sum;
            }, [])
                .join('&');
        },
        port: function (protocol) {
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
    var get = function (url, key) {
        /* istanbul ignore next */
        if (!url) {
            console.log('url must be a string');
            return '';
        }
        if (!key) {
            console.log('key must be a string');
            return '';
        }
        var searchObj = exports.zaxUrl.search(url);
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
    var set = function (url, key, value) {
        if (value === void 0) { value = ''; }
        if (!key) {
            console.log('key must be a string');
            return url;
        }
        var searchObj = exports.zaxUrl.search(url);
        searchObj[key] = value;
        var res = zaxUtil.objToStr(searchObj);
        var hash = exports.zaxUrl.parse(url).hash;
        var tmp = url.replace(hash, '');
        var askIdx = tmp.indexOf('?');
        askIdx = askIdx > -1 ? askIdx : tmp.length;
        var left = url.slice(0, askIdx);
        var mid = res ? '?' + res : '';
        var right = hash;
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
    var del = function (url, key) {
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
    var parse = function (url) {
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
            var a = document.createElement('a');
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
            var hash_1 = url.slice(url.lastIndexOf('#') > -1 ? url.lastIndexOf('#') : url.length) || '';
            var tmp = url.replace(hash_1, '');
            var search_1 = tmp.slice(tmp.lastIndexOf('?') > -1 ? tmp.lastIndexOf('?') : tmp.length) || '';
            return {
                pathname: url.replace(search_1, '').replace(hash_1, ''),
                href: url,
                hash: hash_1,
                search: search_1
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
    var search = function (url) {
        var search = parse(url).search.replace('?', '');
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
    var hash = function (url) {
        var hash = parse(url).hash.replace('#', '');
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
    var pathKey = function (url, pos) {
        if (pos === void 0) { pos = 0; }
        /* istanbul ignore next */
        var pathname = parse(url).pathname || '';
        var last = pathname.split('/').pop() || '';
        return last.slice(pos);
    };
    exports.zaxUrl = {
        parse: parse,
        get: get,
        set: set,
        del: del,
        search: search,
        hash: hash,
        pathKey: pathKey
    };
});
//# sourceMappingURL=index.js.map
