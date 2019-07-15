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
	MINUTES = 'minites',
	SECONDS = 'seconds',
	MILLISECONDS = 'milliseconds',
	TIME = 'time',

	UTCDate = 'utcDate',
	UTCFullYear = 'utcFullYear',
	UTCHours = 'utcHours',
	UTCMilliseconds = 'utcMilliseconds',
	UTCMinutes = 'utcMinutes',
	UTCMonth = 'utcMonth',
	UTCSeconds = 'utcSeconds'
}
