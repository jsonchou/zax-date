import { ZaxUtil, ZaxDate } from '../types/index.d'
import { CompareType, OffsetType } from '../src/enums'


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

let zaxDate: ZaxDate = {
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
		mode = mode.charAt(0).toUpperCase() + mode.slice(1)
		return new Date(targetDate['set' + mode](targetDate['get' + mode]() + num))
	},
	get(targetDate, mode = OffsetType.DATE) {
		targetDate = zaxUtil.convertDateStr(targetDate)
		mode = mode.charAt(0).toUpperCase() + mode.slice(1)
		return targetDate['get' + mode]()
	},
	ago(dt) {
		dt = zaxUtil.convertDateStr(dt)

		let msPerMinute = 60 * 1000
		let msPerHour = msPerMinute * 60
		let msPerDay = msPerHour * 24
		let msPerMonth = msPerDay * 30
		let msPerYear = msPerDay * 365

		let diff = new Date() - new Date(dt)

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

		const mapping = {
			// yy: String(y).slice(2),//靠近标准，主动废弃
			yyyy: y,

			m: m + 1,
			mm: pad(m + 1, 2),

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

			SSS: pad(L, 3)
		}

		return mode.replace(/([a-z]+)/gi, function ($1) {
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

		return {
			days,
			hours,
			minutes,
			seconds
		}
	},
	age(date, accurate = true) {
		let birday = new Date(this.format(date, 'yyyy-mm-dd HH:MM:SS:SSS'))
		let now = new Date()
		let edge = now.getMonth() < birday.getMonth() || (now.getMonth() === birday.getMonth() && now.getDate() < birday.getDate()) ? 1 : 0
		if (!accurate) {
			edge = 0
		}
		let age = now.getFullYear() - birday.getFullYear() - edge
		return parseInt(age)
	},
	isLeapYear(date) {
		let year = this.get(date, 'fullYear')
		return year % 4 == 0 && year % 100 != 0
	}
}

export { CompareType, OffsetType }
export const zaxDate
export const zaxUtil
