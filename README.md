# ZAX Date Util

## install

~~~ base
npm i zax-date -S
~~~

## build by rollup

~~~ base
npm run build
~~~

## use

~~~ javascript 
const zaxDate = require('zax-date')
import zaxDate from 'zax-date'
~~~


. compare
~~~ javascript
zaxDate.compare('2018/9/10','2018/9/6')
~~~

~~~ javascript
1
~~~

. offset
~~~ javascript
zaxDate.format(zaxDate.offset('2018/9/10', 'month', 2),'yyyy-mm-dd HH:MM')
~~~

~~~ javascript
2018-11-10 00:00
~~~

. ago
~~~ javascript
zaxDate.ago('2018/9/11')
~~~

~~~ javascript
2月前
~~~

. format
~~~ javascript
zaxDate.format('2018/10/25', 'yyyy-mm-dd HH:MM')
~~~

~~~ javascript
{ days: -1, hours: -0, minutes: -0, seconds: -0 }
~~~