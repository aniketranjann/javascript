function arraySumEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2==0)
        {
            sum += arr[i];
        }
        
    }
    return sum;
}
let array = [15,6]
let result = arraySumEven(array);
console.log(result);