System.register("zaxDate",[],function(e,t){"use strict";return{execute:function(){e("default",{_pad:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;for(e=String(e);e.length<t;)e="0"+e;return e},_covertDateStr:function(e){return"string"==typeof e?e.indexOf("-")>-1?e=e.replace(/-/g,"/"):Number(e)||e:e},compare:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return(e=new Date(this._covertDateStr(e)))>(t=new Date(this._covertDateStr(t)))?1:e.getTime()==t.getTime()?0:-1},offset:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Date",n=arguments.length>2?arguments[2]:void 0;return e=new Date(this._covertDateStr(e)),t=t.charAt(0).toUpperCase()+t.slice(1).toLowerCase(),new Date(e["set"+t](e["get"+t]()+n))},ago:function(e){e=this._covertDateStr(e);var t=new Date-new Date(e);return t<6e4?Math.round(t/1e3)+"秒前":t<36e5?Math.round(t/6e4)+"分钟前":t<864e5?Math.round(t/36e5)+"小时前":t<2592e6?Math.round(t/864e5)+"天前":t<31536e6?Math.round(t/2592e6)+"个月前":Math.round(t/31536e6)+"年前"},format:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd HH:MM:SS";e=this._covertDateStr(e);var n=new Date(e),r=this._pad,a=n.getFullYear(),o=n.getMonth(),i=n.getDate(),u=n.getHours(),h=n.getMinutes(),g=n.getSeconds(),s=n.getMilliseconds(),c={yy:String(a).slice(2),yyyy:a,m:o+1,mm:r(o+1,2),d:i,dd:r(i,2),h:u%12||12,hh:r(u%12||12),H:u,HH:r(u,2),M:h,MM:r(h,2),S:g,SS:r(g,2),SSS:r(s,3)};return t.replace(/([a-z]+)/gi,function(e){return c[e]||e})},diff:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=new Date(this._covertDateStr(e)),r=new Date(this._covertDateStr(t)).getTime()-n.getTime(),a=r%864e5,o=a%36e5,i=o%6e4;return{days:Math.floor(r/864e5),hours:Math.floor(a/36e5),minutes:Math.floor(o/6e4),seconds:Math.round(i/1e3)}},age:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(this.format(e,"yyyy-mm-dd")),r=new Date,a=r.getMonth()<n.getMonth()||r.getMonth()===n.getMonth()&&r.getDate()<n.getDate()?1:0;t||(a=0);var o=r.getFullYear()-n.getFullYear()-a;return parseInt(o)},isLeapYear:function(e){return e%4==0&&e%100!=0}})}}});
