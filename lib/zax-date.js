; (function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['module', 'exports'], factory);
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
    }
})(this, function (module, exports) {
    'use strict';

    const zaxDate = {
        compare(targetDate, nowDate = new Date()) {
            targetDate = new Date(targetDate);
            nowDate = new Date(nowDate)
            if (targetDate > nowDate) {
                return 1
            } else if (targetDate == nowDate) {
                return 0
            } else {
                return -1
            }
        },
        offset(targetDate, mode = 'Date', num) {
            targetDate = new Date(targetDate);
            mode = mode.charAt(0).toUpperCase() + mode.slice(1).toLowerCase();
            return new Date(targetDate['set' + mode](targetDate['get' + mode]() + num));
        },
        _pad(str, len = 2) {
            str = String(str);
            while (str.length < len) {
                str = '0' + str;
            }
            return str;
        },
        ago(dt) {
            let msPerMinute = 60 * 1000;
            let msPerHour = msPerMinute * 60;
            let msPerDay = msPerHour * 24;
            let msPerMonth = msPerDay * 30;
            let msPerYear = msPerDay * 365;

            let diff = new Date() - new Date(dt);

            if (diff < msPerMinute) {
                return Math.round(diff / 1000) + '秒前';
            }

            else if (diff < msPerHour) {
                return Math.round(diff / msPerMinute) + '分钟前';
            }

            else if (diff < msPerDay) {
                return Math.round(diff / msPerHour) + '小时前';
            }

            else if (diff < msPerMonth) {
                return Math.round(diff / msPerDay) + '天前';
            }

            else if (diff < msPerYear) {
                return Math.round(diff / msPerMonth) + '月前';
            }

            else {
                return Math.round(diff / msPerYear) + '年前';
            }
        },
        format(dt, mode = 'yyyy-mm-dd HH:MM:SS') {
            let date = new Date(dt);
            let pad = this._pad;

            let y = date['getFullYear']();
            let m = date['getMonth']();
            let d = date['getDate']();

            let H = date['getHours']();
            let M = date['getMinutes']();
            let S = date['getSeconds']();

            let L = date['getMilliseconds']();

            const mapping = {
                yy: String(y).slice(2),
                yyyy: y,

                m: m + 1,
                mm: pad(m + 1),

                d: d,
                dd: pad(d, 2),

                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H, 2),

                M: M,
                MM: pad(M, 2),

                S: S,
                SS: pad(S, 2),

                l: pad(L, 3),
                L: pad(Math.round(L / 10)),

            };

            return mode.replace(/([a-z]+)/ig, function ($1) {
                return mapping[$1] || $1;
            });

        }
    }

    exports.__esModule = true;
    exports.default = zaxDate;
    module.exports = exports['default'];
    
});
