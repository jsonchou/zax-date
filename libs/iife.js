var zaxDate=function(){"use strict";var e,t,n,o;!function(e){e[e.BIGGER=-1]="BIGGER",e[e.EQUAL=0]="EQUAL",e[e.SMALLER=1]="SMALLER"}(e||(e={})),function(e){e.DATE="date",e.FULLYEAR="fullYear",e.MONTH="month",e.HOURS="hours",e.MINUTES="minites",e.SECONDS="seconds",e.MILLISECONDS="milliseconds",e.TIME="time",e.UTCDate="utcDate",e.UTCFullYear="utcFullYear",e.UTCHours="utcHours",e.UTCMilliseconds="utcMilliseconds",e.UTCMinutes="utcMinutes",e.UTCMonth="utcMonth",e.UTCSeconds="utcSeconds"}(t||(t={})),function(e){e.TIMEZONEOFFSET="timezoneOffset",e.DATE="date",e.FULLYEAR="fullYear",e.MONTH="month",e.HOURS="hours",e.MINUTES="minites",e.SECONDS="seconds",e.MILLISECONDS="milliseconds",e.TIME="time",e.UTCDate="utcDate",e.UTCFullYear="utcFullYear",e.UTCHours="utcHours",e.UTCMilliseconds="utcMilliseconds",e.UTCMinutes="utcMinutes",e.UTCMonth="utcMonth",e.UTCSeconds="utcSeconds"}(n||(n={})),function(e){e[e.STRING=String]="STRING",e[e.NUMBER=Number]="NUMBER",e[e.DATE=Date]="DATE"}(o||(o={}));var r=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},u=function(e){return"string"==typeof e?e.indexOf("-")>-1?(e=e.replace(/-/g,"/"),new Date(e)):new Date(Number(e)||e):new Date(e)};return{compare:function(t,n){return void 0===n&&(n=new Date),(t=u(t))>(n=u(n))?e.SMALLER:t.getTime()==n.getTime()?e.EQUAL:e.BIGGER},offset:function(e,t,n){return void 0===t&&(t="date"),e=u(e),t=t.charAt(0).toUpperCase()+t.slice(1),new Date(e["set"+t](e["get"+t]()+n))},get:function(e,t){return void 0===t&&(t="date"),(e=u(e))["get"+(t=t.charAt(0).toUpperCase()+t.slice(1))]()},ago:function(e){e=u(e);var t=new Date-new Date(e);return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"个月前":Math.round(t/31536e6)+"年前"},format:function(e,t){void 0===t&&(t="yyyy-mm-dd HH:MM:SS"),e=u(e);var n=new Date(e),o=r,a=n.getFullYear(),i=n.getMonth(),s=n.getDate(),c=n.getHours(),M=n.getMinutes(),d=n.getSeconds(),l=n.getMilliseconds(),S={yyyy:a,m:i+1,mm:o(i+1,2),d:s,dd:o(s,2),h:c%12||12,hh:o(c%12||12),H:c,HH:o(c,2),M:M,MM:o(M,2),S:d,SS:o(d,2),SSS:o(l,3)};return t.replace(/([a-z]+)/gi,function(e){return S[e]||e})},diff:function(e,t){void 0===e&&(e=new Date),void 0===t&&(t=new Date);var n=u(e),o=u(t).getTime()-n.getTime(),r=o%864e5,a=r%36e5,i=a%6e4;return{days:Math.floor(o/864e5),hours:Math.floor(r/36e5),minutes:Math.floor(a/6e4),seconds:Math.round(i/1e3)}},age:function(e,t){void 0===t&&(t=!0);var n=new Date(this.format(e,"yyyy-mm-dd HH:MM:SS:SSS")),o=new Date,r=o.getMonth()<n.getMonth()||o.getMonth()===n.getMonth()&&o.getDate()<n.getDate()?1:0;t||(r=0);var u=o.getFullYear()-n.getFullYear()-r;return parseInt(u)},isLeapYear:function(e){var t=this.get(e,"fullYear");return t%4==0&&t%100!=0}}}();
