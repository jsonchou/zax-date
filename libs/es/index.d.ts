/**
 * Date module.
 * @module zaxDate
 * @see doc https://github.com/jsonchou/zax-date/tree/master/docs/string
 */
export declare enum CompareType {
    BIGGER = -1,
    EQUAL = 0,
    SMALLER = 1
}
export declare enum OffsetType {
    TIMEZONEOFFSET = "timezoneOffset",
    DATE = "date",
    FULLYEAR = "fullYear",
    MONTH = "month",
    HOURS = "hours",
    MINUTES = "minutes",
    SECONDS = "seconds",
    MILLISECONDS = "milliseconds",
    TIME = "time",
    UTCDate = "UTCDate",
    UTCFullYear = "UTCFullYear",
    UTCHours = "UTCHours",
    UTCMilliseconds = "UTCMilliseconds",
    UTCMinutes = "UTCMinutes",
    UTCMonth = "UTCMonth",
    UTCSeconds = "UTCSeconds"
}
export declare enum SetOffsetType {
    SETDATE = "setDate",
    SETFULLYEAR = "setFullYear",
    SETMONTH = "setMonth",
    SETHOURS = "setHours",
    SETMINUTES = "setMinutes",
    SETSECONDS = "setSeconds",
    SETMILLISECONDS = "setMilliseconds",
    SETTIME = "setTime",
    SETUTCDate = "setUTCDate",
    SETUTCFullYear = "setUTCFullYear",
    SETUTCHours = "setUTCHours",
    SETUTCMilliseconds = "setUTCMilliseconds",
    SETUTCMinutes = "setUTCMinutes",
    SETUTCMonth = "setUTCMonth",
    SETUTCSeconds = "setUTCSeconds"
}
export declare enum GetOffsetType {
    GETTIMEZONEOFFSET = "getTimezoneOffset",
    GETDATE = "getDate",
    GETFULLYEAR = "getFullYear",
    GETMONTH = "getMonth",
    GETHOURS = "getHours",
    GETMINUTES = "getMinutes",
    GETSECONDS = "getSeconds",
    GETMILLISECONDS = "getMilliseconds",
    GETTIME = "getTime",
    GETUTCDate = "getUTCDate",
    GETUTCFullYear = "getUTCFullYear",
    GETUTCHours = "getUTCHours",
    GETUTCMilliseconds = "getUTCMilliseconds",
    GETUTCMinutes = "getUTCMinutes",
    GETUTCMonth = "getUTCMonth",
    GETUTCSeconds = "getUTCSeconds"
}
declare const dateSections: {
    'zh-cn': {
        gap: string;
        suffix: string;
        kv: {
            second: string;
            minute: string;
            hour: string;
            day: string;
            week: string;
            month: string;
            year: string;
        };
    };
    'en-us': {
        gap: string;
        suffix: string;
        kv: {
            second: string;
            minute: string;
            hour: string;
            day: string;
            week: string;
            month: string;
            year: string;
        };
    };
};
declare type DateSectionKeys = keyof typeof dateSections;
declare type NoneStdDateType = Date | number | string;
interface DateDiffResult {
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
    milliseconds: number | string;
}
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
declare const compare: (targetDate: NoneStdDateType, nowDate?: NoneStdDateType) => CompareType;
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
declare const offset: (targetDate: NoneStdDateType, mode?: OffsetType, num?: number) => Date;
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
declare const get: (targetDate: NoneStdDateType, mode: OffsetType) => number;
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
declare const ago: (targetDate: NoneStdDateType, locale?: DateSectionKeys, nowDate?: NoneStdDateType) => string;
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
declare const format: (targetDate: NoneStdDateType, mode?: string) => string;
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
declare const diff: (dtStart: NoneStdDateType, dtEnd?: NoneStdDateType, padZero?: boolean) => DateDiffResult;
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
declare const age: (targetDate: NoneStdDateType, accurate: boolean) => number;
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
declare const isLeapYear: (targetDate?: NoneStdDateType) => boolean;
declare const expData: {
    compare: (targetDate: NoneStdDateType, nowDate?: NoneStdDateType) => CompareType;
    offset: (targetDate: NoneStdDateType, mode?: OffsetType, num?: number) => Date;
    get: (targetDate: NoneStdDateType, mode: OffsetType) => number;
    ago: (targetDate: NoneStdDateType, locale?: DateSectionKeys, nowDate?: NoneStdDateType) => string;
    format: (targetDate: NoneStdDateType, mode?: string) => string;
    diff: (dtStart: NoneStdDateType, dtEnd?: NoneStdDateType, padZero?: boolean) => DateDiffResult;
    age: (targetDate: NoneStdDateType, accurate: boolean) => number;
    isLeapYear: (targetDate?: NoneStdDateType) => boolean;
    CompareType: typeof CompareType;
    OffsetType: typeof OffsetType;
    GetOffsetType: typeof GetOffsetType;
    SetOffsetType: typeof SetOffsetType;
};
export { compare, offset, get, ago, format, diff, age, isLeapYear };
export default expData;
