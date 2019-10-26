/**
 * Date module.
 * @module zaxDate
 * @see doc https://github.com/jsonchou/zax-date/tree/master/docs/string
 */

// type Nothing = {} // jsdoc2md bugs, do not remove this line

export enum CompareType {
	// 大于
	BIGGER = -1,
	// 相等
	EQUAL = 0,
	// 小于
	SMALLER = 1
}

export enum OffsetType {
	TIMEZONEOFFSET = 'timezoneOffset',
	DATE = 'date',
	FULLYEAR = 'fullYear',
	MONTH = 'month',
	HOURS = 'hours',
	MINUTES = 'minutes',
	SECONDS = 'seconds',
	MILLISECONDS = 'milliseconds',
	TIME = 'time',

	UTCDate = 'UTCDate',
	UTCFullYear = 'UTCFullYear',
	UTCHours = 'UTCHours',
	UTCMilliseconds = 'UTCMilliseconds',
	UTCMinutes = 'UTCMinutes',
	UTCMonth = 'UTCMonth',
	UTCSeconds = 'UTCSeconds'
}

export enum SetOffsetType {
	// SETTIMEZONEOFFSET = 'setTimezoneOffset',
	SETDATE = 'setDate',
	SETFULLYEAR = 'setFullYear',
	SETMONTH = 'setMonth',
	SETHOURS = 'setHours',
	SETMINUTES = 'setMinutes',
	SETSECONDS = 'setSeconds',
	SETMILLISECONDS = 'setMilliseconds',
	SETTIME = 'setTime',

	SETUTCDate = 'setUTCDate',
	SETUTCFullYear = 'setUTCFullYear',
	SETUTCHours = 'setUTCHours',
	SETUTCMilliseconds = 'setUTCMilliseconds',
	SETUTCMinutes = 'setUTCMinutes',
	SETUTCMonth = 'setUTCMonth',
	SETUTCSeconds = 'setUTCSeconds'
}

export enum GetOffsetType {
	GETTIMEZONEOFFSET = 'getTimezoneOffset',
	GETDATE = 'getDate',
	GETFULLYEAR = 'getFullYear',
	GETMONTH = 'getMonth',
	GETHOURS = 'getHours',
	GETMINUTES = 'getMinutes',
	GETSECONDS = 'getSeconds',
	GETMILLISECONDS = 'getMilliseconds',
	GETTIME = 'getTime',

	GETUTCDate = 'getUTCDate',
	GETUTCFullYear = 'getUTCFullYear',
	GETUTCHours = 'getUTCHours',
	GETUTCMilliseconds = 'getUTCMilliseconds',
	GETUTCMinutes = 'getUTCMinutes',
	GETUTCMonth = 'getUTCMonth',
	GETUTCSeconds = 'getUTCSeconds'
}

const dateSections = {
	'zh-cn': { gap: '', suffix: '前', kv: { second: '秒', minute: '分钟', hour: '小时', day: '天', week: '周', month: '个月', year: '年' } },
	'en-us': { gap: ' ', suffix: 'ago', kv: { second: 'second', minute: 'minute', hour: 'hour', day: 'day', week: 'week', month: 'month', year: 'year' } }
}

type DateSectionKeys = keyof typeof dateSections

type NoneStdDateType = Date | number | string

interface DateDiffResult {
	//days
	days: number
	//hours
	hours: number
	//minutes
	minutes: number
	//seconds
	seconds: number
	//milliseconds
	milliseconds: number
}

const pad = (str: string | number, len: number = 2): string => {
	str = String(str)
	while (str.length < len) {
		str = '0' + str
	}
	return str
}

const convertDateStr = (dt: NoneStdDateType): Date => {
	if (typeof dt === 'string') {
		if (dt.indexOf('-') > -1) {
			dt = dt.replace(/-/g, '/')
			return new Date(dt)
		}
		return new Date(Number(dt) || dt)
	}
	return new Date(dt)
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
const compare = (targetDate: NoneStdDateType, nowDate: NoneStdDateType = new Date()): CompareType => {
	targetDate = convertDateStr(targetDate)
	nowDate = convertDateStr(nowDate)

	if (targetDate > nowDate) {
		return CompareType.SMALLER
	} else if (targetDate.getTime() == nowDate.getTime()) {
		return CompareType.EQUAL
	} else {
		return CompareType.BIGGER
	}
}

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
const offset = (targetDate: NoneStdDateType, mode: OffsetType = OffsetType.DATE, num: number = 1): Date => {
	targetDate = convertDateStr(targetDate)
	let tmp = mode.charAt(0).toUpperCase() + mode.slice(1)
	type enumGetKey = keyof typeof GetOffsetType
	type enumSetKey = keyof typeof SetOffsetType
	let getKey: enumGetKey = ('get' + tmp).toUpperCase() as enumGetKey
	let setKey: enumSetKey = ('set' + tmp).toUpperCase() as enumSetKey
	let getKeyPlus: number = targetDate[GetOffsetType[getKey]]() + num
	return new Date(targetDate[SetOffsetType[setKey]](getKeyPlus))
}

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
const get = (targetDate: NoneStdDateType, mode: OffsetType): number => {
	targetDate = convertDateStr(targetDate)
	type enumKey = keyof typeof GetOffsetType
	let tmp: enumKey = ('get' + mode.charAt(0).toUpperCase() + mode.slice(1)).toUpperCase() as enumKey
	return targetDate[GetOffsetType[tmp]]()
}

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
const ago = (targetDate: NoneStdDateType, locale: DateSectionKeys = 'zh-cn', nowDate: NoneStdDateType = new Date()): string => {
	targetDate = convertDateStr(format(targetDate, 'yyyy-mm-dd HH:MM:SS'))
	nowDate = convertDateStr(format(nowDate, 'yyyy-mm-dd HH:MM:SS'))

	let section = {
		second: 1000,
		minute: 60 * 1000,
		hour: 60 * 1000 * 60,
		day: 24 * 60 * 1000 * 60,
		week: 7 * 24 * 60 * 1000 * 60,
		month: 30 * 24 * 60 * 1000 * 60,
		year: 365 * 24 * 60 * 1000 * 60,
	}

	let diff = nowDate.getTime() - new Date(targetDate).getTime()

	let localeSection = dateSections[locale]

	/* istanbul ignore next */
	let getAgo = (num: number, key: string) => {
		let includeS = ''
		if (locale === 'en-us' && num > 1) {
			//plural country
			includeS = 's'
		}
		return num + localeSection.gap + localeSection.kv[key] + includeS + localeSection.gap + localeSection.suffix
	}

	/* istanbul ignore next */
	if (diff < section.minute) {
		return getAgo(Math.round(diff / section.second), 'second')
	} else if (diff < section.hour) {
		return getAgo(Math.round(diff / section.minute), 'minute')
	} else if (diff < section.day) {
		return getAgo(Math.round(diff / section.hour), 'hour')
	} else if (diff < section.week) {
		return getAgo(Math.round(diff / section.day), 'day')
	} else if (diff < section.month) {
		return getAgo(Math.round(diff / section.week), 'week')
	} else if (diff < section.year) {
		return getAgo(Math.round(diff / section.month), 'month')
	} else {
		return getAgo(Math.round(diff / section.year), 'year')
	}

}

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
const format = (targetDate: NoneStdDateType, mode: string = 'yyyy-mm-dd HH:MM:SS'): string => {
	let dt = convertDateStr(targetDate)

	let date = new Date(dt)

	let y = date['getFullYear']()
	let m = date['getMonth']()
	let d = date['getDate']()

	let H = date['getHours']()
	let M = date['getMinutes']()
	let S = date['getSeconds']()

	let L = date['getMilliseconds']()

	interface IMapping {
		[key: string]: string
	}

	const mapping: IMapping = {
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
	}

	/* istanbul ignore next */
	return mode.replace(/([a-z]+)/gi, function ($1) {
		return mapping[$1] || $1
	})
}

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
const diff = (dtStart: NoneStdDateType, dtEnd: NoneStdDateType = new Date()): DateDiffResult => {
	dtStart = convertDateStr(dtStart) //起始时间
	dtEnd = convertDateStr(dtEnd) //结束时间
	let gap = dtEnd.getTime() - dtStart.getTime() //时间差的毫秒数

	let section = {
		second: 1000,
		minute: 60 * 1000,
		hour: 60 * 1000 * 60,
		day: 24 * 60 * 1000 * 60,
		week: 7 * 24 * 60 * 1000 * 60,
		month: 30 * 24 * 60 * 1000 * 60,
		year: 365 * 24 * 60 * 1000 * 60,
	}

	//计算出相差天数
	let days = Math.floor(gap / (section.day))

	//计算出小时数
	let leave1 = gap % (section.day)
	let hours = Math.floor(leave1 / (section.hour))

	//计算相差分钟数
	let leave2 = leave1 % (section.hour)
	let minutes = Math.floor(leave2 / (section.minute))

	//计算相差秒数
	let leave3 = leave2 % (section.minute)
	let seconds = Math.round(leave3 / section.second)

	return {
		days,
		hours,
		minutes,
		seconds,
		milliseconds: gap
	}

}

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
const age = (targetDate: NoneStdDateType, accurate: boolean): number => {
	let birday = new Date(format(targetDate, 'yyyy-mm-dd HH:MM:SS:SSS'))
	let now = new Date()
	let edge = (now.getMonth() < birday.getMonth() || (now.getMonth() === birday.getMonth() && now.getDate() < birday.getDate())) ? 1 : 0
	if (!accurate) {
		edge = 0
	}
	let age = now.getFullYear() - birday.getFullYear() - edge
	return age
}

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
const isLeapYear = (targetDate: NoneStdDateType = new Date()): boolean => {
	let year = get(targetDate, OffsetType.FULLYEAR)
	return year % 4 == 0 && year % 100 != 0
}


/* istanbul ignore next */
const expData = {
	compare, offset, get, ago, format, diff, age, isLeapYear, CompareType, OffsetType, GetOffsetType, SetOffsetType
}

export { compare, offset, get, ago, format, diff, age, isLeapYear }

export default expData

