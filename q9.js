function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
let array = [1,2,4,5,6]
let result = arraySum(array);
console.log(result);