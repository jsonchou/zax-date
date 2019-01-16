let zaxDate = require('../libs/umd')

// function name
console.log(Object.keys(zaxDate))

// compare
console.log(zaxDate.compare('2018/9/10','2018/9/5'))

// offset
console.log(zaxDate.format(zaxDate.offset('2018/9/10', 'month', 2),'yyyy-mm-dd HH:MM:SS'))

// ago
console.log(zaxDate.ago('2016/9/11'))
console.log(zaxDate.ago('2018/8/11'))
console.log(zaxDate.ago('2019/1/14'))
console.log(zaxDate.ago('2019/1/15 15:47:59'))
console.log(zaxDate.ago('2019/1/16 16:47:59'))
console.log(zaxDate.ago('2019/1/16 16:48:59'))

// format
console.log(zaxDate.format('2018/10/25', 'yyyy-mm-dd'))
console.log(zaxDate.format('2018-10-25', 'yyyy/mm/dd HH:MM:SS'))
console.log(zaxDate.format('2018/10/25 11:11:11.123', 'yyyy-mm-dd HH:MM:SS.SSS'))
console.log(zaxDate.format(1547625501970, 'yyyy-mm-dd HH:MM:SS.SSS'))
console.log(zaxDate.format('1547625501970', 'yyyy-mm-dd HH:MM:SS.SSS'))
console.log(zaxDate.format(new Date(), 'yyyy/mm/dd HH:MM:SS.SSS'))
console.log(zaxDate.format('2018/10/25 11:59:59', 'yyyy-mm-dd hh:MM:SS'),'-> am')//am
console.log(zaxDate.format('2018/10/25 13:00:01', 'yyyy-mm-dd hh:MM:SS'),'-> pm')//pm
console.log(zaxDate.format(new Date(), 'yyyy年mm月dd日HH点MM分SS秒SSS微秒'))

// diff
console.log(zaxDate.diff('2018/10/27', '2018/10/26'))

// age
console.log(zaxDate.age('2010/12/27', true))