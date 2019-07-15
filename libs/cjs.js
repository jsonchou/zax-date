"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.BIGGER=-1]="BIGGER",e[e.EQUAL=0]="EQUAL",e[e.SMALLER=1]="SMALLER"}(exports.CompareType||(exports.CompareType={})),function(e){e.TIMEZONEOFFSET="timezoneOffset",e.DATE="date",e.FULLYEAR="fullYear",e.MONTH="month",e.HOURS="hours",e.MINUTES="minutes",e.SECONDS="seconds",e.MILLISECONDS="milliseconds",e.TIME="time",e.UTCDate="utcDate",e.UTCFullYear="utcFullYear",e.UTCHours="utcHours",e.UTCMilliseconds="utcMilliseconds",e.UTCMinutes="utcMinutes",e.UTCMonth="utcMonth",e.UTCSeconds="utcSeconds"}(exports.OffsetType||(exports.OffsetType={})),exports.zaxUtil={pad:function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},convertDateStr:function(e){return"string"==typeof e?e.indexOf("-")>-1?(e=e.replace(/-/g,"/"),new Date(e)):new Date(Number(e)||e):new Date(e)}},exports.zaxDate={compare:function(e,t){return void 0===t&&(t=new Date),(e=exports.zaxUtil.convertDateStr(e))>(t=exports.zaxUtil.convertDateStr(t))?exports.CompareType.SMALLER:e.getTime()==t.getTime()?exports.CompareType.EQUAL:exports.CompareType.BIGGER},offset:function(e,t,r){return void 0===t&&(t=exports.OffsetType.DATE),e=exports.zaxUtil.convertDateStr(e),t=t.charAt(0).toUpperCase()+t.slice(1),new Date(e["set"+t](e["get"+t]()+r))},get:function(e,t){return void 0===t&&(t=exports.OffsetType.DATE),(e=exports.zaxUtil.convertDateStr(e))["get"+(t=t.charAt(0).toUpperCase()+t.slice(1))]()},ago:function(e){e=exports.zaxUtil.convertDateStr(e);var t=new Date-new Date(e);return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"个月前":Math.round(t/31536e6)+"年前"},format:function(e,t){void 0===t&&(t="yyyy-mm-dd HH:MM:SS"),e=exports.zaxUtil.convertDateStr(e);var r=new Date(e),o=exports.zaxUtil.pad,n=r.getFullYear(),a=r.getMonth(),s=r.getDate(),i=r.getHours(),u=r.getMinutes(),p=r.getSeconds(),c=r.getMilliseconds(),l={yyyy:n,m:a+1,mm:o(a+1,2),d:s,dd:o(s,2),h:i%12||12,hh:o(i%12||12),H:i,HH:o(i,2),M:u,MM:o(u,2),S:p,SS:o(p,2),SSS:o(c,3)};return t.replace(/([a-z]+)/gi,function(e){return l[e]||e})},diff:function(e,t){void 0===e&&(e=new Date),void 0===t&&(t=new Date);var r=exports.zaxUtil.convertDateStr(e),o=exports.zaxUtil.convertDateStr(t).getTime()-r.getTime(),n=o%864e5,a=n%36e5,s=a%6e4;return{days:Math.floor(o/864e5),hours:Math.floor(n/36e5),minutes:Math.floor(a/6e4),seconds:Math.round(s/1e3)}},age:function(e,t){void 0===t&&(t=!0);var r=new Date(this.format(e,"yyyy-mm-dd HH:MM:SS:SSS")),o=new Date,n=o.getMonth()<r.getMonth()||o.getMonth()===r.getMonth()&&o.getDate()<r.getDate()?1:0;t||(n=0);var a=o.getFullYear()-r.getFullYear()-n;return parseInt(a)},isLeapYear:function(e){var t=this.get(e,"fullYear");return t%4==0&&t%100!=0}};
