# ZAX Date Util
## support SSR Miniprogram Browser side

## install

``` base
npm i zax-date -S
```

## build with rollup

``` base
npm run build
```

## use

``` javascript
const zaxDate = require('zax-date')
or
import zaxDate from 'zax-date'
```


. **compare**
``` javascript
zaxDate.compare('2018/9/10', '2018/9/5')
zaxDate.compare('2018/9/10', '2018/9/10')
zaxDate.compare('2018/9/10', '2018/9/11')
zaxDate.compare('2018/9/10')
```

``` javascript
1
0
-1
-1
```

. **offset**
``` javascript
zaxDate.offset('2018/9/10 15:47:59', 'fullYear', 2)
zaxDate.offset('2018/9/10 15:47:59', 'month', 2)
zaxDate.offset('2018/9/10 15:47:59', 'date', 2)
zaxDate.offset('2018/9/10 15:47:59', 'hours', 2)
zaxDate.offset('2018/9/10 15:47:59', 'minutes', 2)
zaxDate.offset('2018/9/10 15:47:59', 'seconds', 2)
```

``` javascript
2020-09-10T07:47:59.000Z
2018-11-10T07:47:59.000Z
2018-09-12T07:47:59.000Z
2018-09-10T09:47:59.000Z
2018-09-10T07:49:59.000Z
2018-09-10T07:48:01.000Z
```

. **get**
``` javascript
zaxDate.get('2018/9/10 15:47:59', 'fullYear')
zaxDate.get('2018/9/10 15:47:59', 'month')
zaxDate.get('2018/9/10 15:47:59', 'date')
zaxDate.get('2018/9/10 15:47:59', 'hours')
zaxDate.get('2018/9/10 15:47:59', 'minutes')
zaxDate.get('2018/9/10 15:47:59', 'seconds')
```
``` javascript
2018
8
10
15
47
59
```

. **ago**
``` javascript
zaxDate.ago('2016/9/11')
zaxDate.ago('2018/8/11')
zaxDate.ago('2019/1/14')
zaxDate.ago('2019/1/15 15:47:59')
zaxDate.ago('2019/1/16 16:47:59')
zaxDate.ago('2019/06/16 16:48:59')
```

``` javascript
3年前
11个月前
6个月前
6个月前
6个月前
26天前
```

. **format**
``` javascript
zaxDate.format('2018/10/25', 'yyyy-mm-dd')
zaxDate.format('2018-10-25', 'yyyy/mm/dd HH:MM:SS')
zaxDate.format('2018/10/25 11:11:11.123', 'yyyy-mm-dd HH:MM:SS.SSS')
zaxDate.format(1547625501970, 'yyyy-mm-dd HH:MM:SS.SSS')
zaxDate.format('1547625501970', 'yyyy-mm-dd HH:MM:SS.SSS')
zaxDate.format(new Date(), 'yyyy/mm/dd HH:MM:SS.SSS')
zaxDate.format('2018/10/25 11:59:59', 'yyyy-mm-dd hh:MM:SS') // '-> am') //am
zaxDate.format('2018/10/25 13:00:01', 'yyyy-mm-dd hh:MM:SS') // '-> pm') //pm
zaxDate.format(new Date(), 'yyyy年mm月dd日HH点MM分SS秒SSS微秒')
```

``` javascript
2018-10-25
2018/10/25 00:00:00
2018-10-25 11:11:11.123
2019-01-16 15:58:21.970
2019-01-16 15:58:21.970
2019/07/12 22:04:55.814
2018-10-25 11:59:59 -> am
2018-10-25 01:00:01 -> pm
2019年07月12日22点04分55秒814微秒
```

. **diff**
``` javascript
zaxDate.diff('2018/10/27 15:47:59', '2018/10/26 11:37:35')
```

``` javascript
{ days: -2, hours: -5, minutes: -11, seconds: -24 }
```

. **age**
``` javascript
console.log(zaxDate.age('2018/10/25 11:59:59', true))
console.log(zaxDate.age('2017/10/25 11:59:59', true))
```

``` javascript
0
1
```

. **isLeapYear**
``` javascript
zaxDate.isLeapYear('2000/12/20')
zaxDate.isLeapYear('2010/12/20')
zaxDate.isLeapYear('1996/12/20')
```

``` javascript
false
false
true
```



## Date and time patterns

* yy = short year  //废弃
* yyyy = long year
* m = month (1-12)
* mm = month (01-12)
* d = day (1 - 31)
* dd = day (01 - 31)
* h = hour in am/pm (0-12)
* hh = hour in am/pm (00-12)
* H = hour in day (0-23)
* HH = hour in day (00-23)
* M = minute in hour(0-59)
* MM = minute in hour(01-59)
* S = second in in minute(0-59)
* SS = second in in minute(01-59)
* SSS = milliseconds in in second(01-999)
