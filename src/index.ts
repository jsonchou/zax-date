import { ZaxUtil, ZaxDate } from '../types/index'
import { CompareType, OffsetType, SetOffsetType, GetOffsetType } from '../src/enums'

interface DateDiffResult {
	//days
	days: number
	//hours
	hours: number
	//minutes
	minutes: number
	//seconds
	seconds: number
}

let zaxUtil: ZaxUtil = {
	pad(str, len = 2) {
		str = String(str)
		while (str.length < len) {
			str = '0' + str
		}
		return str
	},
	convertDateStr(dt) {
		if (typeof dt === 'string') {
			if (dt.indexOf('-') > -1) {
				dt = dt.replace(/-/g, '/')
				return new Date(dt)
			}
			return new Date(Number(dt) || dt)
		}
		return new Date(dt)
	}
}

export const zaxDate: ZaxDate = {
	compare(targetDate, nowDate = new Date()) {
		targetDate = zaxUtil.convertDateStr(targetDate)
		nowDate = zaxUtil.convertDateStr(nowDate)

		if (targetDate > nowDate) {
			return CompareType.SMALLER
		} else if (targetDate.getTime() == nowDate.getTime()) {
			return CompareType.EQUAL
		} else {
			return CompareType.BIGGER
		}
	},
	offset(targetDate, mode = OffsetType.DATE, num) {
		targetDate = zaxUtil.convertDateStr(targetDate)
		let tmp = mode.charAt(0).toUpperCase() + mode.slice(1)
		type enumGetKey = keyof typeof GetOffsetType
		type enumSetKey = keyof typeof SetOffsetType
		let getKey: enumGetKey = ('get' + tmp).toUpperCase() as enumGetKey
		let setKey: enumSetKey = ('set' + tmp).toUpperCase() as enumSetKey
		let getKeyPlus: number = targetDate[GetOffsetType[getKey]]() + num
		return new Date(targetDate[SetOffsetType[setKey]](getKeyPlus))
	},
	get(targetDate, mode = OffsetType.DATE) {
		targetDate = zaxUtil.convertDateStr(targetDate)
		type enumKey = keyof typeof GetOffsetType
		let tmp: enumKey = ('get' + mode.charAt(0).toUpperCase() + mode.slice(1)).toUpperCase() as enumKey
		return targetDate[GetOffsetType[tmp]]()
	},
	ago(dt) {
		dt = zaxUtil.convertDateStr(dt)

		let msPerMinute = 60 * 1000
		let msPerHour = msPerMinute * 60
		let msPerDay = msPerHour * 24
		let msPerMonth = msPerDay * 30
		let msPerYear = msPerDay * 365

		let diff = new Date().getTime() - new Date(dt).getTime()

		if (diff < msPerMinute) {
			return Math.round(diff / 1000) + '秒前'
		} else if (diff < msPerHour) {
			return Math.round(diff / msPerMinute) + '分钟前'
		} else if (diff < msPerDay) {
			return Math.round(diff / msPerHour) + '小时前'
		} else if (diff < msPerMonth) {
			return Math.round(diff / msPerDay) + '天前'
		} else if (diff < msPerYear) {
			return Math.round(diff / msPerMonth) + '个月前'
		} else {
			return Math.round(diff / msPerYear) + '年前'
		}
	},
	format(dt, mode = 'yyyy-mm-dd HH:MM:SS') {
		dt = zaxUtil.convertDateStr(dt)

		let date = new Date(dt)

		let pad = zaxUtil.pad

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

		return mode.replace(/([a-z]+)/gi, function($1) {
			return mapping[$1] || $1
		})
	},
	diff(dtStart = new Date(), dtEnd = new Date()) {
		let date1 = zaxUtil.convertDateStr(dtStart) //起始时间
		let date2 = zaxUtil.convertDateStr(dtEnd) //结束时间
		let gap = date2.getTime() - date1.getTime() //时间差的毫秒数

		//计算出相差天数
		let days = Math.floor(gap / (24 * 3600 * 1000))

		//计算出小时数
		let leave1 = gap % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
		let hours = Math.floor(leave1 / (3600 * 1000))

		//计算相差分钟数
		let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
		let minutes = Math.floor(leave2 / (60 * 1000))

		//计算相差秒数
		let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
		let seconds = Math.round(leave3 / 1000)

		let result: DateDiffResult = {
			days,
			hours,
			minutes,
			seconds
		}

		return result
	},
	age(date, accurate = true) {
		let birday = new Date(this.format(date, 'yyyy-mm-dd HH:MM:SS:SSS'))
		let now = new Date()
		let edge = now.getMonth() < birday.getMonth() || (now.getMonth() === birday.getMonth() && now.getDate() < birday.getDate()) ? 1 : 0
		if (!accurate) {
			edge = 0
		}
		let age = now.getFullYear() - birday.getFullYear() - edge
		return age
	},
	isLeapYear(date) {
		let year = this.get(date, OffsetType.FULLYEAR)
		return year % 4 == 0 && year % 100 != 0
	}
}

export { CompareType, OffsetType }
