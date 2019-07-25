export enum CompareType {
	// 大于
	BIGGER = -1,
	// 相等
	EQUAL = 0,
	// 小于
	SMALLER = 1
}

// 坐等typescript新特性
// https://github.com/Microsoft/TypeScript/issues/17592

//多了 TIMEZONEOFFSET

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
