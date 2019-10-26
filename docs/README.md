<a name="module_zaxString"></a>

## zaxString
<p>String module.</p>

**See**

- doc https://github.com/jsonchou/zax-util/tree/master/docs/string
- striptags https://github.com/ericnorris/striptags
- Locale-codes https://www.science.co.il/language/Locale-codes.php


* [zaxString](#module_zaxString)
    * _static_
        * [.compare](#module_zaxString.compare) ⇒ <code>Date</code>
        * [.offset](#module_zaxString.offset) ⇒ <code>Number</code>
        * [.get](#module_zaxString.get) ⇒ <code>String</code>
        * [.ago](#module_zaxString.ago) ⇒ <code>String</code>
        * [.format](#module_zaxString.format) ⇒ <code>DateDiffResult</code>
        * [.diff](#module_zaxString.diff) ⇒ <code>Number</code>
        * [.age](#module_zaxString.age) ⇒ <code>Boolean</code>
    * _inner_
        * [~compare(targetDate, nowDate)](#module_zaxString..compare) ⇒ <code>Number</code>

<a name="module_zaxString.compare"></a>

### zaxString.compare ⇒ <code>Date</code>
<p>set date offset.</p>

**Kind**: static property of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString.offset"></a>

### zaxString.offset ⇒ <code>Number</code>
<p>get mode from date.</p>

**Kind**: static property of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString.get"></a>

### zaxString.get ⇒ <code>String</code>
<p>date ago.</p>

**Kind**: static property of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>String</code> - <p>date ago</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target time</p> |

**Example**  
```js
ago('2019-09-08')
//=> 2月前
```
<a name="module_zaxString.ago"></a>

### zaxString.ago ⇒ <code>String</code>
<p>format date.
0 - 10</p>

**Kind**: static property of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString.format"></a>

### zaxString.format ⇒ <code>DateDiffResult</code>
<p>number to english word.
0 - 10</p>

**Kind**: static property of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString.diff"></a>

### zaxString.diff ⇒ <code>Number</code>
<p>get age from date.
0 - 10</p>

**Kind**: static property of [<code>zaxString</code>](#module_zaxString)  
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
<a name="module_zaxString.age"></a>

### zaxString.age ⇒ <code>Boolean</code>
<p>is leap year.</p>

**Kind**: static property of [<code>zaxString</code>](#module_zaxString)  
**Returns**: <code>Boolean</code> - <p>is leap year</p>  

| Param | Type | Description |
| --- | --- | --- |
| targetDate | <code>NoneStdDateType</code> | <p>target date</p> |

**Example**  
```js
isLeapYear(1)
//=> one
```
<a name="module_zaxString..compare"></a>

### zaxString~compare(targetDate, nowDate) ⇒ <code>Number</code>
<p>compare date.
1、0、-1</p>

**Kind**: inner method of [<code>zaxString</code>](#module_zaxString)  
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
