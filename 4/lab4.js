//1 задание
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(Math.random()), 3000);
});
myPromise.then((result => console.log(result)));
//2 задание
function generateNumber(delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(Math.random()), delay);
    });
}
Promise.all([
    generateNumber(1000),
    generateNumber(2000),
    generateNumber(3000),
]).then((result => { console.log(result); }));
//3 задание
let pr = new Promise((res, rej) => {
    rej('ku');
});
pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5));
//4 задание
let doubler = new Promise((resolve, reject) => {
    resolve(21);
})
    .then((result => {
    console.log(result);
    return result;
}))
    .then((result => {
    console.log(result * 2);
    return result * 2;
}));
//5 задание
function showResult() {
    return __awaiter(this, void 0, void 0, function* () {
        let promise = new Promise((resolve, reject) => {
            resolve(21);
        }).then((result => {
            console.log(result);
            return result;
        }))
            .then((result => {
            console.log(result * 2);
            return result * 2;
        }));
        let result = yield promise;
        console.log(result);
    });
}
showResult();
//6 задание
let promiseOne = new Promise((res, rej) => {
    res('Resolved promise - 1');
});
promiseOne.then((res) => {
    console.log("Resolved promise - 2");
    return "OK";
})
    .then((res) => {
    console.log(res);
});
//7 задание
let promiseTwo = new Promise((res, rej) => {
    res('Resolved promise - 1');
});
promiseTwo.then((res) => {
    console.log(res);
    return "OK";
})
    .then((res1) => {
    console.log(res1);
});
//8 задание
let promiseThird = new Promise((res, rej) => {
    res('Resolved promise - 1');
});
promiseThird.then((res) => {
    console.log(res);
    return res;
})
    .then((res1) => {
    console.log('Resolved promise - 2');
});
//9 задание
let promiseFourth = new Promise((res, rej) => {
    res('Resolved promise - 1');
});
promiseFourth.then((res) => {
    console.log(res);
    return res;
})
    .then((res1) => {
    console.log(res1);
});
//10 задание
let promiseFifth = new Promise((res, rej) => {
    res('Resolved promise - 1');
});
promiseFifth.then((res) => {
    console.log(res);
})
    .then((res1) => {
    console.log(res1);
});
