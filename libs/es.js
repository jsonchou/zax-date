var CompareType,OffsetType,SetOffsetType,GetOffsetType;!function(e){e[e.BIGGER=-1]="BIGGER",e[e.EQUAL=0]="EQUAL",e[e.SMALLER=1]="SMALLER"}(CompareType||(CompareType={})),function(e){e.TIMEZONEOFFSET="timezoneOffset",e.DATE="date",e.FULLYEAR="fullYear",e.MONTH="month",e.HOURS="hours",e.MINUTES="minutes",e.SECONDS="seconds",e.MILLISECONDS="milliseconds",e.TIME="time",e.UTCDate="UTCDate",e.UTCFullYear="UTCFullYear",e.UTCHours="UTCHours",e.UTCMilliseconds="UTCMilliseconds",e.UTCMinutes="UTCMinutes",e.UTCMonth="UTCMonth",e.UTCSeconds="UTCSeconds"}(OffsetType||(OffsetType={})),function(e){e.SETDATE="setDate",e.SETFULLYEAR="setFullYear",e.SETMONTH="setMonth",e.SETHOURS="setHours",e.SETMINUTES="setMinutes",e.SETSECONDS="setSeconds",e.SETMILLISECONDS="setMilliseconds",e.SETTIME="setTime",e.SETUTCDate="setUTCDate",e.SETUTCFullYear="setUTCFullYear",e.SETUTCHours="setUTCHours",e.SETUTCMilliseconds="setUTCMilliseconds",e.SETUTCMinutes="setUTCMinutes",e.SETUTCMonth="setUTCMonth",e.SETUTCSeconds="setUTCSeconds"}(SetOffsetType||(SetOffsetType={})),function(e){e.GETTIMEZONEOFFSET="getTimezoneOffset",e.GETDATE="getDate",e.GETFULLYEAR="getFullYear",e.GETMONTH="getMonth",e.GETHOURS="getHours",e.GETMINUTES="getMinutes",e.GETSECONDS="getSeconds",e.GETMILLISECONDS="getMilliseconds",e.GETTIME="getTime",e.GETUTCDate="getUTCDate",e.GETUTCFullYear="getUTCFullYear",e.GETUTCHours="getUTCHours",e.GETUTCMilliseconds="getUTCMilliseconds",e.GETUTCMinutes="getUTCMinutes",e.GETUTCMonth="getUTCMonth",e.GETUTCSeconds="getUTCSeconds"}(GetOffsetType||(GetOffsetType={}));var zaxUtil={pad:function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},convertDateStr:function(e){return"string"==typeof e?e.indexOf("-")>-1?(e=e.replace(/-/g,"/"),new Date(e)):new Date(Number(e)||e):new Date(e)}},zaxDate={compare:function(e,t){return void 0===t&&(t=new Date),(e=zaxUtil.convertDateStr(e))>(t=zaxUtil.convertDateStr(t))?CompareType.SMALLER:e.getTime()==t.getTime()?CompareType.EQUAL:CompareType.BIGGER},offset:function(e,t,T){void 0===t&&(t=OffsetType.DATE),e=zaxUtil.convertDateStr(e);var n=t.charAt(0).toUpperCase()+t.slice(1),o=("get"+n).toUpperCase(),r=("set"+n).toUpperCase(),s=e[GetOffsetType[o]]()+T;return new Date(e[SetOffsetType[r]](s))},get:function(e,t){void 0===t&&(t=OffsetType.DATE),e=zaxUtil.convertDateStr(e);var T=("get"+t.charAt(0).toUpperCase()+t.slice(1)).toUpperCase();return e[GetOffsetType[T]]()},ago:function(e){e=zaxUtil.convertDateStr(e);var t=(new Date).getTime()-new Date(e).getTime();return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"个月前":Math.round(t/31536e6)+"年前"},format:function(e,t){void 0===t&&(t="yyyy-mm-dd HH:MM:SS"),e=zaxUtil.convertDateStr(e);var T=new Date(e),n=zaxUtil.pad,o=T.getFullYear(),r=T.getMonth(),s=T.getDate(),a=T.getHours(),i=T.getMinutes(),S=T.getSeconds(),f=T.getMilliseconds(),U={yyyy:String(o),m:String(r+1),mm:n(r+1,2),d:String(s),dd:n(s,2),h:String(a%12||12),hh:n(a%12||12),H:String(a),HH:n(a,2),M:String(i),MM:n(i,2),S:String(S),SS:n(S,2),SSS:String(n(f,3))};return t.replace(/([a-z]+)/gi,function(e){return U[e]||e})},diff:function(e,t){void 0===e&&(e=new Date),void 0===t&&(t=new Date);var T=zaxUtil.convertDateStr(e),n=zaxUtil.convertDateStr(t).getTime()-T.getTime(),o=n%864e5,r=o%36e5,s=r%6e4;return{days:Math.floor(n/864e5),hours:Math.floor(o/36e5),minutes:Math.floor(r/6e4),seconds:Math.round(s/1e3)}},age:function(e,t){void 0===t&&(t=!0);var T=new Date(this.format(e,"yyyy-mm-dd HH:MM:SS:SSS")),n=new Date,o=n.getMonth()<T.getMonth()||n.getMonth()===T.getMonth()&&n.getDate()<T.getDate()?1:0;return t||(o=0),n.getFullYear()-T.getFullYear()-o},isLeapYear:function(e){var t=this.get(e,OffsetType.FULLYEAR);return t%4==0&&t%100!=0}},compareType=CompareType,offsetType=OffsetType,getOffsetType=GetOffsetType,setOffsetType=GetOffsetType;export{zaxDate,compareType,offsetType,getOffsetType,setOffsetType};
