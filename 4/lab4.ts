//1 задание

let myPromise = new Promise(function(resolve, reject)
{
    setTimeout(() => resolve(Math.random()), 3000);
});

myPromise.then((
    result => console.log(result)
))



//2 задание

function generateNumber(delay: number): Promise<number>
{
   return new Promise(function(resolve, reject)
   {
       setTimeout(() => resolve(Math.random()), delay);
   });
}

Promise.all([
    generateNumber(1000),
    generateNumber(2000),
    generateNumber(3000),
]).then(
    (result=> {console.log(result)})
)



//3 задание

let pr = new Promise((res,rej) => {
    rej('ku')
})

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))


//4 задание

let doubler = new Promise<number>((resolve, reject)=>
{
resolve(21);
})
    .then((result=>{
        console.log(result);
        return result;
    }))
    .then((result=>{
        console.log(result * 2);
        return result * 2;
    }));


//5 задание

async function showResult()
{
    let promise = new Promise<number>((resolve,reject) => {
        resolve(21);
      }).then((result=>{
        console.log(result);
        return result;
    }))
    .then((result=>{
        console.log(result * 2);
        return result * 2;
    }));
    
      let result = await promise;
      console.log(result);
}

showResult();


//6 задание

let promiseOne = new Promise((res, rej) => {
    res('Resolved promise - 1');
});


promiseOne.then((res) => {
    console.log("Resolved promise -2");
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
})
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
})
promiseFourth.then((res) => {
    console.log(res);
    return res;
})
.then((res1) => {
    console.log(res1);
})

//10 задание

let promiseFifth = new Promise((res, rej) => {
    res('Resolved promise - 1');
})
promiseFifth.then((res) => {
    console.log(res);
})
.then((res1) => {
    console.log(res1);
})

