exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            return arr.indexOf(item);
        }
    },

    sum: function(arr) {
        var total = 0;
        arr.forEach(function(item) {
            total += item;
        });
        return total;
    },

    remove: function(arr, item) {
        var destinationArray = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                destinationArray.push(arr[i]);
            }
        }
        return destinationArray;
    },

    removeWithoutCopy: function(arr, item) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i = i - 1;
                arr.length = arr.length - 1;
            }
        }
        return arr;
    },

    append: function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate: function(arr) {
        arr.pop();
        return arr;
    },

    prepend: function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail: function(arr) {
        arr.shift();
        return arr;
    },

    concat: function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count: function(arr, item) {
        var tally = 0;
        for (var i = arr.length - 1; i >= 0; i--) {
            if (arr[i] === item) {
                tally++;
            }
        }
        return tally;
    },

    duplicates: function(arr) {
        var destinationArray = [];
        var counts = {};
        for (var i = 0; i < arr.length; i++) {
            var num = arr[i];
            if (counts[num] === counts[num]) {
                counts[num]++;
            } else {
                counts[num] = 1;
            }
        }
        for (var key in counts) {
            if (counts[key] >= 1) {
                destinationArray.push(Number(key));
            }
        }
        return destinationArray;
    },

    square: function(arr) {
        var squaredArray = [];
        arr.forEach(function(item) {
            squaredArray.push(item * item);
        });
        return squaredArray;
    },

    findAllOccurrences: function(arr, target) {
        var result = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                result.push(i);
            }
        }
        return result;
    }
};
