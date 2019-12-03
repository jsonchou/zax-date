/**
 * Date module.
 * @module zaxDate
 * @see doc https://github.com/jsonchou/zax-date/tree/master/docs/string
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
    // type Nothing = {} // jsdoc2md bugs, do not remove this line
    var CompareType;
    (function (CompareType) {
        // 大于
        CompareType[CompareType["BIGGER"] = -1] = "BIGGER";
        // 相等
        CompareType[CompareType["EQUAL"] = 0] = "EQUAL";
        // 小于
        CompareType[CompareType["SMALLER"] = 1] = "SMALLER";
    })(CompareType = exports.CompareType || (exports.CompareType = {}));
    var OffsetType;
    (function (OffsetType) {
        OffsetType["TIMEZONEOFFSET"] = "timezoneOffset";
        OffsetType["DATE"] = "date";
        OffsetType["FULLYEAR"] = "fullYear";
        OffsetType["MONTH"] = "month";
        OffsetType["HOURS"] = "hours";
        OffsetType["MINUTES"] = "minutes";
        OffsetType["SECONDS"] = "seconds";
        OffsetType["MILLISECONDS"] = "milliseconds";
        OffsetType["TIME"] = "time";
        OffsetType["UTCDate"] = "UTCDate";
        OffsetType["UTCFullYear"] = "UTCFullYear";
        OffsetType["UTCHours"] = "UTCHours";
        OffsetType["UTCMilliseconds"] = "UTCMilliseconds";
        OffsetType["UTCMinutes"] = "UTCMinutes";
        OffsetType["UTCMonth"] = "UTCMonth";
        OffsetType["UTCSeconds"] = "UTCSeconds";
    })(OffsetType = exports.OffsetType || (exports.OffsetType = {}));
    var SetOffsetType;
    (function (SetOffsetType) {
        // SETTIMEZONEOFFSET = 'setTimezoneOffset',
        SetOffsetType["SETDATE"] = "setDate";
        SetOffsetType["SETFULLYEAR"] = "setFullYear";
        SetOffsetType["SETMONTH"] = "setMonth";
        SetOffsetType["SETHOURS"] = "setHours";
        SetOffsetType["SETMINUTES"] = "setMinutes";
        SetOffsetType["SETSECONDS"] = "setSeconds";
        SetOffsetType["SETMILLISECONDS"] = "setMilliseconds";
        SetOffsetType["SETTIME"] = "setTime";
        SetOffsetType["SETUTCDate"] = "setUTCDate";
        SetOffsetType["SETUTCFullYear"] = "setUTCFullYear";
        SetOffsetType["SETUTCHours"] = "setUTCHours";
        SetOffsetType["SETUTCMilliseconds"] = "setUTCMilliseconds";
        SetOffsetType["SETUTCMinutes"] = "setUTCMinutes";
        SetOffsetType["SETUTCMonth"] = "setUTCMonth";
        SetOffsetType["SETUTCSeconds"] = "setUTCSeconds";
    })(SetOffsetType = exports.SetOffsetType || (exports.SetOffsetType = {}));
    var GetOffsetType;
    (function (GetOffsetType) {
        GetOffsetType["GETTIMEZONEOFFSET"] = "getTimezoneOffset";
        GetOffsetType["GETDATE"] = "getDate";
        GetOffsetType["GETFULLYEAR"] = "getFullYear";
        GetOffsetType["GETMONTH"] = "getMonth";
        GetOffsetType["GETHOURS"] = "getHours";
        GetOffsetType["GETMINUTES"] = "getMinutes";
        GetOffsetType["GETSECONDS"] = "getSeconds";
        GetOffsetType["GETMILLISECONDS"] = "getMilliseconds";
        GetOffsetType["GETTIME"] = "getTime";
        GetOffsetType["GETUTCDate"] = "getUTCDate";
        GetOffsetType["GETUTCFullYear"] = "getUTCFullYear";
        GetOffsetType["GETUTCHours"] = "getUTCHours";
        GetOffsetType["GETUTCMilliseconds"] = "getUTCMilliseconds";
        GetOffsetType["GETUTCMinutes"] = "getUTCMinutes";
        GetOffsetType["GETUTCMonth"] = "getUTCMonth";
        GetOffsetType["GETUTCSeconds"] = "getUTCSeconds";
    })(GetOffsetType = exports.GetOffsetType || (exports.GetOffsetType = {}));
    var dateSections = {
        'zh-cn': { gap: '', suffix: '前', kv: { second: '秒', minute: '分钟', hour: '小时', day: '天', week: '周', month: '个月', year: '年' } },
        'en-us': { gap: ' ', suffix: 'ago', kv: { second: 'second', minute: 'minute', hour: 'hour', day: 'day', week: 'week', month: 'month', year: 'year' } }
    };
    var pad = function (str, len) {
        if (len === void 0) { len = 2; }
        str = String(str);
        while (str.length < len) {
            str = '0' + str;
        }
        return str;
    };
    var convertDateStr = function (dt) {
        if (typeof dt === 'string') {
            if (dt.indexOf('-') > -1) {
                dt = dt.replace(/-/g, '/');
                return new Date(dt);
            }
            return new Date(Number(dt) || dt);
        }
        return new Date(dt);
    };
    /**
     * compare date.
     * 1、0、-1
     *
     * @example
     * ```js
     * compare('2019-09-20','2019-09-21')
     * //=> -1
     * ```
     *
     * @param targetDate {NoneStdDateType} target date
     * @param nowDate {NoneStdDateType} now date
     * @returns {Number} result
     */
    var compare = function (targetDate, nowDate) {
        if (nowDate === void 0) { nowDate = new Date(); }
        targetDate = convertDateStr(targetDate);
        nowDate = convertDateStr(nowDate);
        if (targetDate > nowDate) {
            return CompareType.SMALLER;
        }
        else if (targetDate.getTime() == nowDate.getTime()) {
            return CompareType.EQUAL;
        }
        else {
            return CompareType.BIGGER;
        }
    };
    exports.compare = compare;
    /**
     * set date offset.
     *
     * @example
     * ```js
     * offset('2019-09-20','date',-1)
     * //=> Date('2019-09-19')
     * ```
     *
     * @param targetDate {NoneStdDateType} target date
     * @param mode {OffsetType} mode
     * @returns {Date} standard date
     */
    var offset = function (targetDate, mode, num) {
        if (mode === void 0) { mode = OffsetType.DATE; }
        if (num === void 0) { num = 1; }
        targetDate = convertDateStr(targetDate);
        var tmp = mode.charAt(0).toUpperCase() + mode.slice(1);
        var getKey = ('get' + tmp).toUpperCase();
        var setKey = ('set' + tmp).toUpperCase();
        var getKeyPlus = targetDate[GetOffsetType[getKey]]() + num;
        return new Date(targetDate[SetOffsetType[setKey]](getKeyPlus));
    };
    exports.offset = offset;
    /**
     * get mode from date.
     *
     * @example
     * ```js
     * get('2019-09-20','year')
     * //=> 2019
     * ```
     *
     * @param targetDate {NoneStdDateType} target time
     * @param mode {OffsetType} mode
     * @returns {Number} mode value
     */
    var get = function (targetDate, mode) {
        targetDate = convertDateStr(targetDate);
        var tmp = ('get' + mode.charAt(0).toUpperCase() + mode.slice(1)).toUpperCase();
        return targetDate[GetOffsetType[tmp]]();
    };
    exports.get = get;
    /**
     * date ago.
     *
     * @example
     * ```js
     * ago('2019-09-08')
     * //=> 2月前
     * ```
     *
     * @param targetDate {NoneStdDateType} target time
     * @returns {String} date ago
     */
    var ago = function (targetDate, locale, nowDate) {
        if (locale === void 0) { locale = 'zh-cn'; }
        if (nowDate === void 0) { nowDate = new Date(); }
        targetDate = convertDateStr(format(targetDate, 'yyyy-mm-dd HH:MM:SS'));
        nowDate = convertDateStr(format(nowDate, 'yyyy-mm-dd HH:MM:SS'));
        var section = {
            second: 1000,
            minute: 60 * 1000,
            hour: 60 * 1000 * 60,
            day: 24 * 60 * 1000 * 60,
            week: 7 * 24 * 60 * 1000 * 60,
            month: 30 * 24 * 60 * 1000 * 60,
            year: 365 * 24 * 60 * 1000 * 60,
        };
        var diff = nowDate.getTime() - new Date(targetDate).getTime();
        var localeSection = dateSections[locale];
        /* istanbul ignore next */
        var getAgo = function (num, key) {
            var includeS = '';
            if (locale === 'en-us' && num > 1) {
                //plural country
                includeS = 's';
            }
            return num + localeSection.gap + localeSection.kv[key] + includeS + localeSection.gap + localeSection.suffix;
        };
        /* istanbul ignore next */
        if (diff < section.minute) {
            return getAgo(Math.round(diff / section.second), 'second');
        }
        else if (diff < section.hour) {
            return getAgo(Math.round(diff / section.minute), 'minute');
        }
        else if (diff < section.day) {
            return getAgo(Math.round(diff / section.hour), 'hour');
        }
        else if (diff < section.week) {
            return getAgo(Math.round(diff / section.day), 'day');
        }
        else if (diff < section.month) {
            return getAgo(Math.round(diff / section.week), 'week');
        }
        else if (diff < section.year) {
            return getAgo(Math.round(diff / section.month), 'month');
        }
        else {
            return getAgo(Math.round(diff / section.year), 'year');
        }
    };
    exports.ago = ago;
    /**
     * format date.
     * 0 - 10
     *
     * @example
     * ```js
     * format(new Date(),yyyy-mm-dd HH:MM:SS)
     * //=> one
     * ```
     *
     * @param targetDate {NoneStdDateType} target date
     * @param mode {String} mode
     * @returns {String} date
     */
    var format = function (targetDate, mode) {
        if (mode === void 0) { mode = 'yyyy-mm-dd HH:MM:SS'; }
        var dt = convertDateStr(targetDate);
        var date = new Date(dt);
        var y = date['getFullYear']();
        var m = date['getMonth']();
        var d = date['getDate']();
        var H = date['getHours']();
        var M = date['getMinutes']();
        var S = date['getSeconds']();
        var L = date['getMilliseconds']();
        var mapping = {
            // yy: String(y).slice(2),//靠近标准，主动废弃
            yyyy: String(y),
            m: String(m + 1),
            mm: pad(m + 1, 2),
            d: String(d),
            dd: pad(d, 2),
            h: String(H % 12 || 12),
            hh: pad(H % 12 || 12),
            H: String(H),
            HH: pad(H, 2),
            M: String(M),
            MM: pad(M, 2),
            S: String(S),
            SS: pad(S, 2),
            SSS: String(pad(L, 3))
        };
        /* istanbul ignore next */
        return mode.replace(/([a-z]+)/gi, function ($1) {
            return mapping[$1] || $1;
        });
    };
    exports.format = format;
    /**
     * number to english word.
     * 0 - 10
     *
     * @example
     * ```js
     * diff('2019-09-20','2019-09-18')
     * //=> one
     * ```
     *
     * @param dtStart {NoneStdDateType} number
     * @param endDate {NoneStdDateType} number
     * @returns {DateDiffResult} diff date
     */
    var diff = function (dtStart, dtEnd) {
        if (dtEnd === void 0) { dtEnd = new Date(); }
        dtStart = convertDateStr(dtStart); //起始时间
        dtEnd = convertDateStr(dtEnd); //结束时间
        var gap = dtEnd.getTime() - dtStart.getTime(); //时间差的毫秒数
        var section = {
            second: 1000,
            minute: 60 * 1000,
            hour: 60 * 1000 * 60,
            day: 24 * 60 * 1000 * 60,
            week: 7 * 24 * 60 * 1000 * 60,
            month: 30 * 24 * 60 * 1000 * 60,
            year: 365 * 24 * 60 * 1000 * 60,
        };
        //计算出相差天数
        var days = Math.floor(gap / (section.day));
        //计算出小时数
        var leave1 = gap % (section.day);
        var hours = Math.floor(leave1 / (section.hour));
        //计算相差分钟数
        var leave2 = leave1 % (section.hour);
        var minutes = Math.floor(leave2 / (section.minute));
        //计算相差秒数
        var leave3 = leave2 % (section.minute);
        var seconds = Math.round(leave3 / section.second);
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            milliseconds: gap
        };
    };
    exports.diff = diff;
    /**
     * get age from date.
     * 0 - 10
     *
     * @example
     * ```js
     * age(2011-09-20)
     * //=> 8
     * ```
     *
     * @param targetDate {NoneStdDateType} target date
     * @param accurate {Boolean} locale
     * @returns {Number} age
     */
    var age = function (targetDate, accurate) {
        var birday = new Date(format(targetDate, 'yyyy-mm-dd HH:MM:SS:SSS'));
        var now = new Date();
        var edge = (now.getMonth() < birday.getMonth() || (now.getMonth() === birday.getMonth() && now.getDate() < birday.getDate())) ? 1 : 0;
        if (!accurate) {
            edge = 0;
        }
        var age = now.getFullYear() - birday.getFullYear() - edge;
        return age;
    };
    exports.age = age;
    /**
     * is leap year.
     *
     * @example
     * ```js
     * isLeapYear(1)
     * //=> one
     * ```
     *
     * @param targetDate {NoneStdDateType} target date
     * @returns {Boolean} is leap year
     */
    var isLeapYear = function (targetDate) {
        if (targetDate === void 0) { targetDate = new Date(); }
        var year = get(targetDate, OffsetType.FULLYEAR);
        return year % 4 == 0 && year % 100 != 0;
    };
    exports.isLeapYear = isLeapYear;
    /* istanbul ignore next */
    var expData = {
        compare: compare, offset: offset, get: get, ago: ago, format: format, diff: diff, age: age, isLeapYear: isLeapYear, CompareType: CompareType, OffsetType: OffsetType, GetOffsetType: GetOffsetType, SetOffsetType: SetOffsetType
    };
    exports.default = expData;
});
//# sourceMappingURL=index.js.map