// foreach() method  calls a function once for each element  in an array

//array.forEach(function(currentValue, index, arr), thisValue)
//currentValue	Required. The value of the current element


const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
    arr[index] = item * 10;
    console.log(arr);
}