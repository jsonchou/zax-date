# Zax Date

[![NPM version](https://img.shields.io/npm/v/zax-date.svg?style=flat)](https://www.npmjs.com/package/zax-date)
[![Build Status](https://travis-ci.org/jsonchou/zax-date.svg?branch=master)](https://travis-ci.org/jsonchou/zax-date)
[![codecov](https://codecov.io/gh/jsonchou/zax-date/branch/master/graph/badge.svg)](https://codecov.io/gh/jsonchou/zax-date)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Date module

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

``` base
npm i zax-date -S
```

## build with rollup

``` base
npm run build
```

## use

``` javascript
import { compare, offset, get, ago, format, diff, age, isLeapYear, CompareType, OffsetType, GetOffsetType, SetOffsetType } from 'zax-date'
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
zaxDate.offset('2018/9/10 15:47:59', OffsetType.FULLYEAR, 2)
zaxDate.offset('2018/9/10 15:47:59', OffsetType.MONTH, 2)
zaxDate.offset('2018/9/10 15:47:59', OffsetType.DATE, 2)
zaxDate.offset('2018/9/10 15:47:59', OffsetType.HOURS, 2)
zaxDate.offset('2018/9/10 15:47:59', OffsetType.MINUTES, 2)
zaxDate.offset('2018/9/10 15:47:59', OffsetType.SECONDS, 2)
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
zaxDate.get('2018/9/10 15:47:59', OffsetType.FULLYEAR)
zaxDate.get('2018/9/10 15:47:59', OffsetType.MONTH)
zaxDate.get('2018/9/10 15:47:59', OffsetType.DATE)
zaxDate.get('2018/9/10 15:47:59', OffsetType.HOURS)
zaxDate.get('2018/9/10 15:47:59', OffsetType.MINUTES)
zaxDate.get('2018/9/10 15:47:59', OffsetType.SECONDS)
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
zaxDate.age('2018/10/25 11:59:59', true)
zaxDate.age('2017/10/25 11:59:59', true)
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

## More
- [Docs](https://github.com/jsonchou/zax-util/tree/master/docs)
- [Test](https://github.com/jsonchou/zax-util/blob/master/__tests__/index.spec.ts)
