// rop.js - إدارة سلاسل ROP

const stack_sz = 0x40000;
const reserve_upper_stack = 0x10000;
const stack_reserved_idx = reserve_upper_stack / 4;

window.rop = function () {
    this.stackback = p.malloc32(stack_sz / 4 + 0x8);
    this.stack = this.stackback.add32(reserve_upper_stack);
    this.stack_array = this.stackback.backing;
    this.retval = this.stackback.add32(stack_sz);
    this.count = 1;

    this.clear = function () {
        this.count = 1;
        for (var i = 1; i < ((stack_sz / 4) - stack_reserved_idx); i++) {
            this.stack_array[i + stack_reserved_idx] = 0;
        }
    };

    this.pushSymbolic = function () {
        this.count++;
        return this.count - 1;
    };

    this.finalizeSymbolic = function (idx, val) {
        if (val instanceof int64) {
            this.stack_array[stack_reserved_idx + idx * 2] = val.low;
            this.stack_array[stack_reserved_idx + idx * 2 + 1] = val.hi;
        } else {
            this.stack_array[stack_reserved_idx + idx * 2] = val;
            this.stack_array[stack_reserved_idx + idx * 2 + 1] = 0;
        }
    };

    this.push = function (val) {
        this.finalizeSymbolic(this.pushSymbolic(), val);
    };

    this.run = function () {
        p.launch_chain(this);
        this.clear();
    };
};
