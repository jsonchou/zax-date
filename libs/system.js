System.register("zaxDate",[],function(e,t){"use strict";return{execute:function(){var t,n;e({CompareType:void 0,OffsetType:void 0}),function(e){e[e.BIGGER=-1]="BIGGER",e[e.EQUAL=0]="EQUAL",e[e.SMALLER=1]="SMALLER"}(t||(t=e("CompareType",{}))),function(e){e.TIMEZONEOFFSET="timezoneOffset",e.DATE="date",e.FULLYEAR="fullYear",e.MONTH="month",e.HOURS="hours",e.MINUTES="minutes",e.SECONDS="seconds",e.MILLISECONDS="milliseconds",e.TIME="time",e.UTCDate="utcDate",e.UTCFullYear="utcFullYear",e.UTCHours="utcHours",e.UTCMilliseconds="utcMilliseconds",e.UTCMinutes="utcMinutes",e.UTCMonth="utcMonth",e.UTCSeconds="utcSeconds"}(n||(n=e("OffsetType",{})));var r=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},o=function(e){return"string"==typeof e?e.indexOf("-")>-1?(e=e.replace(/-/g,"/"),new Date(e)):new Date(Number(e)||e):new Date(e)};e("zaxDate",{compare:function(e,n){return void 0===n&&(n=new Date),(e=o(e))>(n=o(n))?t.SMALLER:e.getTime()==n.getTime()?t.EQUAL:t.BIGGER},offset:function(e,t,r){return void 0===t&&(t=n.DATE),e=o(e),t=t.charAt(0).toUpperCase()+t.slice(1),new Date(e["set"+t](e["get"+t]()+r))},get:function(e,t){return void 0===t&&(t=n.DATE),(e=o(e))["get"+(t=t.charAt(0).toUpperCase()+t.slice(1))]()},ago:function(e){e=o(e);var t=new Date-new Date(e);return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"个月前":Math.round(t/31536e6)+"年前"},format:function(e,t){void 0===t&&(t="yyyy-mm-dd HH:MM:SS"),e=o(e);var n=new Date(e),a=r,u=n.getFullYear(),i=n.getMonth(),s=n.getDate(),c=n.getHours(),M=n.getMinutes(),d=n.getSeconds(),f=n.getMilliseconds(),g={yyyy:u,m:i+1,mm:a(i+1,2),d:s,dd:a(s,2),h:c%12||12,hh:a(c%12||12),H:c,HH:a(c,2),M:M,MM:a(M,2),S:d,SS:a(d,2),SSS:a(f,3)};return t.replace(/([a-z]+)/gi,function(e){return g[e]||e})},diff:function(e,t){void 0===e&&(e=new Date),void 0===t&&(t=new Date);var n=o(e),r=o(t).getTime()-n.getTime(),a=r%864e5,u=a%36e5,i=u%6e4;return{days:Math.floor(r/864e5),hours:Math.floor(a/36e5),minutes:Math.floor(u/6e4),seconds:Math.round(i/1e3)}},age:function(e,t){void 0===t&&(t=!0);var n=new Date(this.format(e,"yyyy-mm-dd HH:MM:SS:SSS")),r=new Date,o=r.getMonth()<n.getMonth()||r.getMonth()===n.getMonth()&&r.getDate()<n.getDate()?1:0;t||(o=0);var a=r.getFullYear()-n.getFullYear()-o;return parseInt(a)},isLeapYear:function(e){var t=this.get(e,"fullYear");return t%4==0&&t%100!=0}})}}});
