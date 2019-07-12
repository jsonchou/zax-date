let zaxDate = require('../libs/umd')

// function name
console.log('[', Object.keys(zaxDate).join(','), ']')

// compare
console.log(zaxDate.compare('2018/9/10', '2018/9/5'))
console.log(zaxDate.compare('2018/9/10', '2018/9/10'))
console.log(zaxDate.compare('2018/9/10', '2018/9/11'))
console.log(zaxDate.compare('2018/9/10'))

// offset
console.log(zaxDate.offset('2018/9/10 15:47:59', 'fullYear', 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', 'month', 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', 'date', 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', 'hours', 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', 'minutes', 2))
console.log(zaxDate.offset('2018/9/10 15:47:59', 'seconds', 2))

// get
console.log(zaxDate.get('2018/9/10 15:47:59', 'fullYear'))
console.log(zaxDate.get('2018/9/10 15:47:59', 'month'))
console.log(zaxDate.get('2018/9/10 15:47:59', 'date'))
console.log(zaxDate.get('2018/9/10 15:47:59', 'hours'))
console.log(zaxDate.get('2018/9/10 15:47:59', 'minutes'))
console.log(zaxDate.get('2018/9/10 15:47:59', 'seconds'))

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
console.log(zaxDate.age('2017/10/25 11:59:59', true))

// isLeapYear
console.log(zaxDate.isLeapYear('2000/12/20'))
console.log(zaxDate.isLeapYear('2010/12/20'))
console.log(zaxDate.isLeapYear('1996/12/20'))

