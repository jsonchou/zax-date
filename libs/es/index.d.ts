/**
 * String module.
 * @module zaxString
 * @see doc https://github.com/jsonchou/zax-util/tree/master/docs/string
 * @see striptags https://github.com/ericnorris/striptags
 * @see Locale-codes https://www.science.co.il/language/Locale-codes.php
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
interface DateDiffResult {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
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
declare const compare: (targetDate: string | number | Date, nowDate?: string | number | Date) => CompareType;
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
declare const offset: (targetDate: string | number | Date, mode?: OffsetType, num?: number) => Date;
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
declare const get: (targetDate: string | number | Date, mode: OffsetType) => number;
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
declare const ago: (targetDate: string | number | Date, locale?: "zh-cn" | "en-us", nowDate?: string | number | Date) => string;
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
declare const format: (targetDate: string | number | Date, mode?: string) => string;
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
declare const diff: (dtStart: string | number | Date, dtEnd?: string | number | Date) => DateDiffResult;
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
declare const age: (targetDate: string | number | Date, accurate: boolean) => number;
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
declare const isLeapYear: (targetDate?: string | number | Date) => boolean;
declare const expData: {
    compare: (targetDate: string | number | Date, nowDate?: string | number | Date) => CompareType;
    offset: (targetDate: string | number | Date, mode?: OffsetType, num?: number) => Date;
    get: (targetDate: string | number | Date, mode: OffsetType) => number;
    ago: (targetDate: string | number | Date, locale?: "zh-cn" | "en-us", nowDate?: string | number | Date) => string;
    format: (targetDate: string | number | Date, mode?: string) => string;
    diff: (dtStart: string | number | Date, dtEnd?: string | number | Date) => DateDiffResult;
    age: (targetDate: string | number | Date, accurate: boolean) => number;
    isLeapYear: (targetDate?: string | number | Date) => boolean;
    CompareType: typeof CompareType;
    OffsetType: typeof OffsetType;
    GetOffsetType: typeof GetOffsetType;
    SetOffsetType: typeof SetOffsetType;
};
export { compare, offset, get, ago, format, diff, age, isLeapYear };
export default expData;
