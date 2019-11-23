// TODO: Two versions (loop and built-in some method)

// 1st version (loop)
// function every(array, test) {
//     for(let value of array) {
//         if (!test(value)) {
//             return false;
//         }
//     }

//     return true;
// }

// 2nd version (some)
function every(array, test) {
    return !array.some( value => !test(value));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true