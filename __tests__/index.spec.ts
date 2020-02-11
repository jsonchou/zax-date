import { compare, offset, get, ago, format, diff, age, isLeapYear, CompareType, OffsetType, GetOffsetType, SetOffsetType } from '../src/index'
import zaxDate from '../src/index'

import { log } from '../src/_utils/index'

const methods = ['compare', 'offset', 'get', 'ago', 'format', 'diff', 'age', 'isLeapYear']

describe('zaxDate', () => {
	methods.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxDate).toHaveProperty(par)
			expect(zaxDate[par]).toBeInstanceOf(Function)
		})
	})

	it(`compare`, () => {
		expect(compare('2018/9/10', '2018/9/5')).toEqual(1)
		expect(compare('2018/9/10', '2018/9/10')).toEqual(0)
		expect(compare('2018/9/10', '2018/9/11')).toEqual(-1)
		expect(compare('2018/9/10')).toEqual(-1)
	})

	it(`offset`, () => {
		expect(offset('2018/9/10 15:47:59', OffsetType.FULLYEAR, 2)).toEqual(new Date('2020-09-10T07:47:59.000Z'))
		expect(offset('2018/9/10 15:47:59', OffsetType.MONTH, 2)).toEqual(new Date('2018-11-10T07:47:59.000Z'))
		expect(offset('2018/9/10 15:47:59', OffsetType.DATE, 2)).toEqual(new Date('2018-09-12T07:47:59.000Z'))
		expect(offset('2018/9/10 15:47:59', OffsetType.HOURS, 2)).toEqual(new Date('2018-09-10T09:47:59.000Z'))
		expect(offset('2018/9/10 15:47:59', OffsetType.MINUTES, 2)).toEqual(new Date('2018-09-10T07:49:59.000Z'))
		expect(offset('2018/9/10 15:47:59', OffsetType.SECONDS, 2)).toEqual(new Date('2018-09-10T07:48:01.000Z'))

		expect(offset('2018/9/10 15:47:59', OffsetType.FULLYEAR, 1)).toEqual(new Date('2019-09-10T07:47:59.000Z'))
		expect(offset('2018/9/10 15:47:59')).toEqual(new Date('2018-09-11T07:47:59.000Z'))

	})

	it(`get`, () => {
		expect(get('2018/9/10 15:47:59', OffsetType.FULLYEAR)).toEqual(2018)
		expect(get('2018/9/10 15:47:59', OffsetType.MONTH)).toEqual(8)
		expect(get('2018/9/10 15:47:59', OffsetType.DATE)).toEqual(10)
		expect(get('2018/9/10 15:47:59', OffsetType.HOURS)).toEqual(15)
		expect(get('2018/9/10 15:47:59', OffsetType.MINUTES)).toEqual(47)
		expect(get('2018/9/10 15:47:59', OffsetType.SECONDS)).toEqual(59)
		expect(get('2018/9/10 15:47:59:321', OffsetType.MILLISECONDS)).toEqual(321)
	})

	it(`ago`, () => {
		// 'zh-cn': { gap: '', suffix: '前', kv: { second: '秒', minute: '分钟', hour: '小时', day: '天', week: '周', month: '个月', year: '年' } },
		const nowDate = '2019/10/26 18:42:59:432'

		expect(ago('2019/10/26 18:42:59:123')).toBeTruthy()

		expect(ago('2019/10/26 18:42:59:123', 'zh-cn', nowDate)).toEqual('0秒前')
		expect(ago('2019/10/26 18:42:58:123', 'zh-cn', nowDate)).toEqual('1秒前')
		expect(ago('2019/10/26 18:42:57:234', 'zh-cn', nowDate)).toEqual('2秒前')
		expect(ago('2019/08/26 17:42:59:123', 'zh-cn', nowDate)).toEqual('2个月前')
		expect(ago('2019/10/24 18:42:59:123', 'zh-cn', nowDate)).toEqual('2天前')
		expect(ago('2019/10/2 17:42:59:123', 'zh-cn', nowDate)).toEqual('3周前')
		expect(ago('2019/04/26 18:20:59:123', 'zh-cn', nowDate)).toEqual('6个月前')
		expect(ago('2018/10/26 18:20:59:123', 'zh-cn', nowDate)).toEqual('1年前')
		expect(ago('2017/10/27 18:20:59:123', 'zh-cn', nowDate)).toEqual('2年前')
		expect(ago('2017/10/25 18:20:59:123', 'zh-cn', nowDate)).toEqual('2年前')

		expect(ago('2019/10/26 18:42:59:123', 'en-us', nowDate)).toEqual('0 second ago')
		expect(ago('2019/10/26 18:42:58:123', 'en-us', nowDate)).toEqual('1 second ago')
		expect(ago('2019/10/26 18:42:57:234', 'en-us', nowDate)).toEqual('2 seconds ago')
		expect(ago('2019/08/26 17:42:59:123', 'en-us', nowDate)).toEqual('2 months ago')
		expect(ago('2019/10/24 18:42:59:123', 'en-us', nowDate)).toEqual('2 days ago')
		expect(ago('2019/10/2 17:42:59:123', 'en-us', nowDate)).toEqual('3 weeks ago')
		expect(ago('2019/04/26 18:20:59:123', 'en-us', nowDate)).toEqual('6 months ago')
		expect(ago('2018/10/26 18:20:59:123', 'en-us', nowDate)).toEqual('1 year ago')
		expect(ago('2017/10/27 18:20:59:123', 'en-us', nowDate)).toEqual('2 years ago')
		expect(ago('2017/10/25 18:20:59:123', 'en-us', nowDate)).toEqual('2 years ago')



	})

	it(`format`, () => {
		expect(format('2018/10/25', 'yyyy-mm-dd')).toEqual('2018-10-25')
		expect(format('2018-10-25')).toBeTruthy()
		expect(format('2018-10-25', 'yyyy/mm/dd HH:MM:SS')).toEqual('2018/10/25 00:00:00')
		expect(format('2018/10/25 11:11:11.123', 'yyyy-mm-dd HH:MM:SS.SSS')).toEqual('2018-10-25 11:11:11.123')
		expect(format(1547625501970, 'yyyy-mm-dd HH:MM:SS.SSS')).toEqual('2019-01-16 15:58:21.970')
		expect(format('1547625501970', 'yyyy-mm-dd HH:MM:SS.SSS')).toEqual('2019-01-16 15:58:21.970')
		expect(format('2019/10/26 19:25:41', 'yyyy/mm/dd HH:MM:SS.SSS')).toEqual('2019/10/26 19:25:41.000')
		expect(format('2018/10/25 11:59:59', 'yyyy-mm-dd hh:MM:SS')).toEqual('2018-10-25 11:59:59')
		expect(format('2018/10/25 13:00:01', 'yyyy-mm-dd hh:MM:SS')).toEqual('2018-10-25 01:00:01')
		expect(format('2019/10/26 19:25:41', 'yyyy年mm月dd日HH点MM分SS秒SSS微秒')).toEqual('2019年10月26日19点25分41秒000微秒')
	})

	it(`diff`, () => {
		expect(diff('2017/10/25 15:47:59', '2018/10/26 11:37:35')).toEqual({ days: 365, hours: 19, minutes: 49, seconds: 36, milliseconds: 31607376000 })
		expect(diff('2019/10/25 15:47:59', '2019/10/26 11:37:35')).toEqual({ days: 0, hours: 19, minutes: 49, seconds: 36, milliseconds: 71376000 })
		expect(diff('2019/10/25 15:47:59')).toBeTruthy()

	})

	it(`age`, () => {
		let thisYear = 2020
		expect(age(`${thisYear}/2/12 19:25:59`, true)).toEqual(0)
		expect(age(`${thisYear}/2/12 19:25:59`, false)).toEqual(0)

		expect(age(`${thisYear}/2/11 11:59:59`, true)).toEqual(0)
		expect(age(`${thisYear}/2/11 11:59:59`, false)).toEqual(0)

		expect(age(`${thisYear - 1}/2/11 11:59:59`, true)).toEqual(1)
		expect(age(`${thisYear - 1}/2/11 11:59:59`, false)).toEqual(1)

		expect(age(`${thisYear - 1}/09/25 11:59:59`, true)).toEqual(0)
		expect(age(`${thisYear - 1}/09/25 11:59:59`, false)).toEqual(1)


	})


	it(`isLeapYear`, () => {
		expect(isLeapYear('2000/12/20')).toEqual(false)
		expect(isLeapYear('2010/12/20')).toEqual(false)
		expect(isLeapYear('1996/12/20')).toEqual(true)
		expect(isLeapYear()).toEqual(true)
	})
})

describe('log', () => {
	it('should invoke success', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
	})

	it('should return a function', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
		expect(res).toBeInstanceOf(Function)

		let res2 = log('test', 'extra param')
		expect(log).toBeInstanceOf(Function)
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)

		let res3 = log()
		expect(res3).toBeTruthy()
		expect(res3).toBeInstanceOf(Function)
	})
})
