const range = (start, end, step = 1) => {
    let resultArray = [];

    let index = start;
    if (step > 0) {
        do {
            resultArray.push(index);
            index += step;
        } while (index <= end);
    } else {
        do {
            resultArray.push(index);
            index += step;
        } while (index >= end);
    }

    return resultArray;
};

const sum = (values) => {
    let result = 0;
    for(let value of values) {
        result += value;
    }

    return result;
};

let expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(range(1, 10).toString() === expected1.toString());
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let expected2 = [5, 4, 3, 2];
console.log(range(5, 2, -1).toString() === expected2.toString());
// → [5, 4, 3, 2]

console.log(sum(range(1, 10)) === 55);
// → 55