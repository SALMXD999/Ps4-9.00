// int64.js - مكتبة أرقام 64 بت

function int64(low, hi) {
    this.low = (low >>> 0);
    this.hi = (hi >>> 0);

    this.add32 = function (val) {
        var new_lo = (((this.low >>> 0) + val) & 0xFFFFFFFF) >>> 0;
        var new_hi = (this.hi >>> 0);

        if (new_lo < this.low) new_hi++;

        return new int64(new_lo, new_hi);
    };

    this.sub32 = function (val) {
        var new_lo = (((this.low >>> 0) - val) & 0xFFFFFFFF) >>> 0;
        var new_hi = (this.hi >>> 0);

        if (new_lo > (this.low >>> 0)) new_hi--;

        return new int64(new_lo, new_hi);
    };

    this.toString = function (base = 16) {
        var lo_str = (this.low >>> 0).toString(base);
        var hi_str = (this.hi >>> 0).toString(base);
        if (this.hi == 0) return lo_str;
        while (lo_str.length < 8) lo_str = "0" + lo_str;
        return hi_str + lo_str;
    };
}

function zeroFill(number, width) {
    width -= number.toString().length;
    if (width > 0) {
        return new Array(width + 1).join('0') + number;
    }
    return number + "";
}
