exports.sanitize = function(str) {
    return str.toLowerCase().replace(/-/g, ' ').replace(/[0-9]/g, '');
};


exports.fibonacci = function(qty) {
    var result = [];
    function runSequence() {
        var prev = result[result.length - 1];
        var prevPrev = result[result.length - 2];
        if (prev && prevPrev) {
            result.push(prev + prevPrev);
        } else {
            result.push(1);
        }
        qty -= 1;
        if (qty) {
            return runSequence();
        }
    }
    runSequence();
    return result;
};

exports.doubleAll = function(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}