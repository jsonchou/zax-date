export default {
    compare(targetDate, nowDate = new Date()) {
        targetDate = new Date(targetDate);
        nowDate = new Date(nowDate)
        if (targetDate > nowDate) {
            return 1
        } else if (targetDate == nowDate) {
            return 0
        } else {
            return -1
        }
    },
    offset(targetDate, mode = 'Date', num) {
        targetDate = new Date(targetDate);
        mode = mode.charAt(0).toUpperCase() + mode.slice(1).toLowerCase();
        return new Date(targetDate['set' + mode](targetDate['get' + mode]() + num));
    },
    _pad(str, len = 2) {
        str = String(str);
        while (str.length < len) {
            str = '0' + str;
        }
        return str;
    },
    ago(dt) {
        dt = this.covertDateStr(dt);

        let msPerMinute = 60 * 1000;
        let msPerHour = msPerMinute * 60;
        let msPerDay = msPerHour * 24;
        let msPerMonth = msPerDay * 30;
        let msPerYear = msPerDay * 365;

        let diff = new Date() - new Date(dt);

        if (diff < msPerMinute) {
            return Math.round(diff / 1000) + '秒前';
        } else if (diff < msPerHour) {
            return Math.round(diff / msPerMinute) + '分钟前';
        } else if (diff < msPerDay) {
            return Math.round(diff / msPerHour) + '小时前';
        } else if (diff < msPerMonth) {
            return Math.round(diff / msPerDay) + '天前';
        } else if (diff < msPerYear) {
            return Math.round(diff / msPerMonth) + '月前';
        } else {
            return Math.round(diff / msPerYear) + '年前';
        }
    },
    format(dt, mode = 'yyyy-mm-dd HH:MM:SS') {
        dt = this.covertDateStr(dt);

        let date = new Date(dt);
        let pad = this._pad;

        let y = date['getFullYear']();
        let m = date['getMonth']();
        let d = date['getDate']();

        let H = date['getHours']();
        let M = date['getMinutes']();
        let S = date['getSeconds']();

        let L = date['getMilliseconds']();

        const mapping = {
            yy: String(y).slice(2),
            yyyy: y,

            m: m + 1,
            mm: pad(m + 1),

            d: d,
            dd: pad(d, 2),

            h: H % 12 || 12,
            hh: pad(H % 12 || 12),
            H: H,
            HH: pad(H, 2),

            M: M,
            MM: pad(M, 2),

            S: S,
            SS: pad(S, 2),

            l: pad(L, 3),
            L: pad(Math.round(L / 10)),

        };

        return mode.replace(/([a-z]+)/ig, function ($1) {
            return mapping[$1] || $1;
        });

    },
    diff(dtStart = new Date(), dtEnd = new Date()) {
        let date1 = new Date(dtStart); //起始时间
        let date2 = new Date(dtEnd); //结束时间
        let gap = date2.getTime() - date1.getTime(); //时间差的毫秒数      

        //计算出相差天数
        let days = Math.floor(gap / (24 * 3600 * 1000))

        //计算出小时数
        let leave1 = gap % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
        let hours = Math.floor(leave1 / (3600 * 1000))

        //计算相差分钟数
        let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
        let minutes = Math.floor(leave2 / (60 * 1000))

        //计算相差秒数
        let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
        let seconds = Math.round(leave3 / 1000)

        return {
            days,
            hours,
            minutes,
            seconds,
        }
    },
    age(date, accurate = true) {
        let birday = new Date(this.format(date, 'yyyy-mm-dd'));
        let now = new Date();
        let edge = (now.getMonth() < birday.getMonth() || (now.getMonth() === birday.getMonth() && now.getDate() < birday.getDate())) ? 1 : 0;
        if (!accurate) {
            edge = 0;
        }
        let age = now.getFullYear() - birday.getFullYear() - edge;
        return parseInt(age);
    },
    isLeapYear(year) {
        return year % 4 == 0 && year % 100 != 0
    },
    covertDateStr(dt) {
        if(typeof dt === 'string') {
            dt = dt.replace(/-/g, '/');
        }
        return dt;
    },
}