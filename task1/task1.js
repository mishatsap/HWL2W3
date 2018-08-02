if (!Array.prototype.map) {

    Array.prototype.map = function(callback, thisArg) {

        if (this === void 0 || this === null) {
            throw new TypeError(' this is null or not defined');
        }
        var obj = Object(this);
        var len = obj.length >>> 0;
        if (typeof callback !== "function") {
            throw new TypeError(`${callback} is not a function`);
        }
        var res = [ ];
        for (var i = 0; i < len; i++) {
            if (i in obj) {
                var val = obj[i];
                res[i] = thisArg ? callback.call(thisArg, val, i, obj) : callback(val, i, obj);
            }
        }
        return res;
    }
}