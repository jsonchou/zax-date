let zaxDate, { compareType, offsetType } = require('zax-date')

// function name
console.log('[', Object.keys(zaxDate).join(','), ']')

// compare
console.log(zaxDate.compare('2018/9/10', '2018/9/5'))
console.log(zaxDate.compare('2018/9/10', '2018/9/10'))
console.log(zaxDate.compare('2018/9/10', '2018/9/11'))
console.log(zaxDate.compare('2018/9/10'))

// offset
console.log(zaxDate.offset('2018/9/10 15:47:59', offsetType.FULLYEAR, 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', offsetType.MONTH, 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', offsetType.DATE, 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', offsetType.HOURS, 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', offsetType.MINUTES, 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', offsetType.SECONDS, 2))

// get
console.log(zaxDate.get('2018/9/10 15:47:59', offsetType.FULLYEAR, 2))
console.log(zaxDate.get('2018/9/10 15:47:59', offsetType.MONTH, 2))
console.log(zaxDate.get('2018/9/10 15:47:59', offsetType.DATE, 2))
console.log(zaxDate.get('2018/9/10 15:47:59', offsetType.HOURS, 2))
console.log(zaxDate.get('2018/9/10 15:47:59', offsetType.MINUTES, 2))
console.log(zaxDate.get('2018/9/10 15:47:59', offsetType.SECONDS, 2))

// ago
console.log(zaxDate.ago('2016/9/11'))
console.log(zaxDate.ago('2018/8/11'))
console.log(zaxDate.ago('2019/1/14'))
console.log(zaxDate.ago('2019/1/15 15:47:59'))
console.log(zaxDate.ago('2019/1/16 16:47:59'))
console.log(zaxDate.ago('2019/06/16 16:48:59'))

// format
console.log(zaxDate.format('2018/10/25', 'yyyy-mm-dd'))
console.log(zaxDate.format('2018-10-25', 'yyyy/mm/dd HH:MM:SS'))
console.log(zaxDate.format('2018/10/25 11:11:11.123', 'yyyy-mm-dd HH:MM:SS.SSS'))
console.log(zaxDate.format(1547625501970, 'yyyy-mm-dd HH:MM:SS.SSS'))
console.log(zaxDate.format('1547625501970', 'yyyy-mm-dd HH:MM:SS.SSS'))
console.log(zaxDate.format(new Date(), 'yyyy/mm/dd HH:MM:SS.SSS'))
console.log(zaxDate.format('2018/10/25 11:59:59', 'yyyy-mm-dd hh:MM:SS'), '-> am') //am
console.log(zaxDate.format('2018/10/25 13:00:01', 'yyyy-mm-dd hh:MM:SS'), '-> pm') //pm
console.log(zaxDate.format(new Date(), 'yyyy年mm月dd日HH点MM分SS秒SSS微秒'))

// diff
console.log(zaxDate.diff('2018/10/27 15:47:59', '2018/10/26 11:37:35'))

// age
console.log(zaxDate.age('2018/10/25 11:59:59', true))
console.log(zaxDate.age('2017/10/25 11:59:59'))

// isLeapYear
console.log(zaxDate.isLeapYear('2000/12/20'))
console.log(zaxDate.isLeapYear('2010/12/20'))
console.log(zaxDate.isLeapYear('1996/12/20'))
