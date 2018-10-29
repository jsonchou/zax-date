let zaxDate = require('../libs/umd')

// function name
console.log(Object.keys(zaxDate))

// compare
console.log(zaxDate.compare('2018/9/10','2018/9/5'))

// offset
console.log(zaxDate.format(zaxDate.offset('2018/9/10', 'month', 2),'yyyy-mm-dd HH:MM:SS'))

// ago
console.log(zaxDate.ago('2018/9/11'))

// format
console.log(zaxDate.format('2018/10/25', 'yyyy-mm-dd HH:MM'))

// diff
console.log(zaxDate.diff('2018/10/27', '2018/10/26'))