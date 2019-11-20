const reverseArray = function(array) {
    let result = [];
    while(array.length) {
        result.push(array.pop());
    }

    return result;
};

const reverseArrayInPlace = function(array) {
    for(let index = 0; index < Math.round(array.length / 2); ++index) {
        const tmp = array[array.length - index - 1];
        array[array.length - index - 1] = array[index];
        array[index] = tmp;
    }

    return array;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]