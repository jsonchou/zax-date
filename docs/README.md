<a name="module_zaxDate"></a>

## zaxDate
<p>Date module.</p>

**See**: doc https://github.com/jsonchou/zax-date/tree/master/docs/string  

* [zaxDate](#module_zaxDate)
    * _static_
        * [.compare](#module_zaxDate.compare) ⇒ <code>Date</code>
        * [.offset](#module_zaxDate.offset) ⇒ <code>Number</code>
        * [.get](#module_zaxDate.get) ⇒ <code>String</code>
        * [.ago](#module_zaxDate.ago) ⇒ <code>String</code>
        * [.format](#module_zaxDate.format) ⇒ <code>DateDiffResult</code>
        * [.diff](#module_zaxDate.diff) ⇒ <code>Number</code>
        * [.age](#module_zaxDate.age) ⇒ <code>Boolean</code>
    * _inner_
        * [~compare(targetDate, nowDate)](#module_zaxDate..compare) ⇒ <code>Number</code>

<a name="module_zaxDate.compare"></a>

### zaxDate.compare ⇒ <code>Date</code>
<p>set date offset.</p>

**Kind**: static property of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>Date</code> - <p>standard date</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target date</p> |
| mode | <code>OffsetType</code> | <p>mode</p> |

**Example**  
```js
offset('2019-09-20','date',-1)
//=> Date('2019-09-19')
```
<a name="module_zaxDate.offset"></a>

### zaxDate.offset ⇒ <code>Number</code>
<p>get mode from date.</p>

**Kind**: static property of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>Number</code> - <p>mode value</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target time</p> |
| mode | <code>OffsetType</code> | <p>mode</p> |

**Example**  
```js
get('2019-09-20','year')
//=> 2019
```
<a name="module_zaxDate.get"></a>

### zaxDate.get ⇒ <code>String</code>
<p>date ago.</p>

**Kind**: static property of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>String</code> - <p>date ago</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target time</p> |

**Example**  
```js
ago('2019-09-08')
//=> 2月前
```
<a name="module_zaxDate.ago"></a>

### zaxDate.ago ⇒ <code>String</code>
<p>format date.
0 - 10</p>

**Kind**: static property of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>String</code> - <p>date</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target date</p> |
| mode | <code>String</code> | <p>mode</p> |

**Example**  
```js
format(new Date(),yyyy-mm-dd HH:MM:SS)
//=> one
```
<a name="module_zaxDate.format"></a>

### zaxDate.format ⇒ <code>DateDiffResult</code>
<p>number to english word.
0 - 10</p>

**Kind**: static property of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>DateDiffResult</code> - <p>diff date</p>  

| Param | Type | Description |
| --- | --- | --- |
| dtStart | <code>NoneStdDateType</code> | <p>number</p> |
| endDate | <code>NoneStdDateType</code> | <p>number</p> |

**Example**  
```js
diff('2019-09-20','2019-09-18')
//=> one
```
<a name="module_zaxDate.diff"></a>

### zaxDate.diff ⇒ <code>Number</code>
<p>get age from date.
0 - 10</p>

**Kind**: static property of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>Number</code> - <p>age</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target date</p> |
| accurate | <code>Boolean</code> | <p>locale</p> |

**Example**  
```js
age(2011-09-20)
//=> 8
```
<a name="module_zaxDate.age"></a>

### zaxDate.age ⇒ <code>Boolean</code>
<p>is leap year.</p>

**Kind**: static property of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>Boolean</code> - <p>is leap year</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target date</p> |

**Example**  
```js
isLeapYear(1)
//=> one
```
<a name="module_zaxDate..compare"></a>

### zaxDate~compare(targetDate, nowDate) ⇒ <code>Number</code>
<p>compare date.
1、0、-1</p>

**Kind**: inner method of [<code>zaxDate</code>](#module_zaxDate)  
**Returns**: <code>Number</code> - <p>result</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target date</p> |
| nowDate | <code>NoneStdDateType</code> | <p>now date</p> |

**Example**  
```js
compare('2019-09-20','2019-09-21')
//=> -1
```
