# ZAX Date Util
## there have 6 modes of amd, cjs, es, iife, system, umd. 

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
zaxDate.compare('2018/9/10','2018/9/5')
zaxDate.compare('2018/9/10','2018/9/10')
zaxDate.compare('2018/9/10','2018/9/11')
```

``` javascript
1
0
-1
```

. **offset**
``` javascript
zaxDate.format(zaxDate.offset('2018/9/10', 'month', 2),'yyyy-mm-dd HH:MM:SS')
```

``` javascript
2018-11-10 00:00:00
```

. **ago**
``` javascript
zaxDate.ago('2016/9/11')
zaxDate.ago('2018/8/11')
zaxDate.ago('2019/1/14')
zaxDate.ago('2019/1/15 15:47:59')
zaxDate.ago('2019/1/16 16:47:59')
zaxDate.ago('2019/1/16 16:48:59')
```

``` javascript
2年前
5个月前
3天前
1天前
2分钟前
38秒前
```

. **format**
``` javascript 
zaxDate.format('2018/10/25', 'yyyy-mm-dd')
zaxDate.format('2018-10-25', 'yyyy/mm/dd HH:MM:SS')
zaxDate.format('2018/10/25 11:11:11.123', 'yyyy-mm-dd HH:MM:SS.SSS')
zaxDate.format(1547625501970, 'yyyy-mm-dd HH:MM:SS.SSS')
zaxDate.format('1547625501970', 'yyyy-mm-dd HH:MM:SS.SSS')
zaxDate.format(new Date(), 'yyyy/mm/dd HH:MM:SS.SSS')
zaxDate.format('2018/10/25 11:59:59', 'yyyy-mm-dd hh:MM:SS')//am
zaxDate.format('2018/10/25 13:00:01', 'yyyy-mm-dd hh:MM:SS')//pm
zaxDate.format(new Date(), 'yyyy年mm月dd日HH点MM分SS秒SSS微秒')
```

``` javascript
2018-10-25
2018/10/25 00:00:00
2018-10-25 11:11:11.123
2019-01-16 15:58:21.970
2019-01-16 15:58:21.970
2019/01/16 16:24:43.804
2018-10-25 11:59:59 // am
2018-10-25 01:00:01 // pm
2019年01月16日16点44分34秒578微秒
```

. **diff**
``` javascript
zaxDate.diff('2018/10/27', '2018/10/26')
```

``` javascript
{ days: -1, hours: -0, minutes: -0, seconds: -0 }
```

. **age**
``` javascript
zaxDate.age('2011/12/31',true)
```

``` javascript
7
```

## Date and time patterns

* yy = short year
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