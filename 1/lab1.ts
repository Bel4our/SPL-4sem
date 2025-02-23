//1 задание
function createPhoneNumber(arr: number[]): string {
    if(arr.length != 10)
    {
        console.log(`Неверный формат номера телефона`);
    }
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//2 задание
class Challenge {
    static solution(num: number)
    {
        if(num < 0)
        {
            return 0;
        }
        let sum:number = 0;
        for(let i = 0; i < num; i++)
        {
            if(i % 3 == 0 || i % 5 == 0)

                
            {
                sum += i;
            }
        }
        return sum;
    }
}
console.log(Challenge.solution(25));
console.log(Challenge.solution(12));


//3 задание
function rotateNum(nums: number[], k: number): number[]  {
    if (k < 0) 
    {
        return nums;
    }
    const n = nums.length;
    k = k % n; 
    
    reverse(nums, 0, n - 1); 
    reverse(nums, 0, k - 1); 
    reverse(nums, k, n - 1); 
    return nums
}

function reverse(nums: number[], start: number, end: number): void {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

console.log(rotateNum([1, 2, 3, 4, 5, 6, 7], 3).toString());



//4 задание
function findMidTwinsArrays(arr1: number[], arr2: number[]): number
{
    let arr:number[] = arr1.concat(arr2);
    arr.sort((a, b) => a - b);

    let middle:number = Math.floor(arr.length / 2);
    if(arr.length % 2 != 0){
        return arr[middle];
    }
    return (arr[middle - 1] + arr[middle]) / 2;
}
console.log(findMidTwinsArrays([1,3,4], [2,5]));
