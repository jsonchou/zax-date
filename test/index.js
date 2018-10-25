let zaxDate = require('../lib/zax-date')

// function name
console.log(Object.keys(zaxDate))

// compare
console.log(zaxDate.compare('2018/9/10'))

// offset
console.log(zaxDate.offset('2018/9/10','month',2))

// ago
console.log(zaxDate.ago('2018/9/11'))

// format
console.log(zaxDate.format('2018/10/25','yyyy-mm-dd HH:MM'))