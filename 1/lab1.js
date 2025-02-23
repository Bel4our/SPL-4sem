//1 задание
function createPhoneNumber(arr) {
    if (arr.length != 10) {
        console.log("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430");
    }
    return "(".concat(arr[0]).concat(arr[1]).concat(arr[2], ") ").concat(arr[3]).concat(arr[4]).concat(arr[5], "-").concat(arr[6]).concat(arr[7]).concat(arr[8]).concat(arr[9]);
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
//2 задание
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (num) {
        if (num < 0) {
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < num; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sum += i;
            }
        }
        return sum;
    };
    return Challenge;
}());
console.log(Challenge.solution(25));
console.log(Challenge.solution(12));
//3 задание
function rotateNum(nums, k) {
    if (k < 0) {
        return nums;
    }
    var n = nums.length;
    k = k % n;
    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
    return nums;
}
function reverse(nums, start, end) {
    var _a;
    while (start < end) {
        _a = [nums[end], nums[start]], nums[start] = _a[0], nums[end] = _a[1];
        start++;
        end--;
    }
}
console.log(rotateNum([1, 2, 3, 4, 5, 6, 7], 3).toString());
//4 задание
function findMidTwinsArrays(arr1, arr2) {
    var arr = arr1.concat(arr2);
    arr.sort(function (a, b) { return a - b; });
    var middle = Math.floor(arr.length / 2);
    if (arr.length % 2 != 0) {
        return arr[middle];
    }
    return (arr[middle - 1] + arr[middle]) / 2;
}
console.log(findMidTwinsArrays([1, 3, 4], [2, 5]));
