const arrayToList = function(array) {
    let list;

    for(let element of array) {
        const node = {
            value: element,
            rest: null
        };

        if(!list) {
            list = node;
        } else {
            let tmp = list;
            while (tmp.rest) {
                tmp = tmp.rest;
            }
            tmp.rest = node;
        }
    }

    return list;
};

const listToArray = (list) => {
    let array = [];

    while(list) {
        array.push(list.value);
        list = list.rest;
    }

    return array;
};

const prepend = (value, rest) => {
    if(!rest) {
        return {value, rest: null};
    } else {
        return {value, rest}
    }
};

const nth = (list, pos) => {
    let result;
    let cur = 0;

    while(list && cur !== pos) {
        list = list.rest;
        cur++;
    }
    result = list.value;

    return result;
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
// console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(prepend(10, prepend(20, prepend(30, null))));
// → { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }
console.log(nth(arrayToList([10, 20, 30, 40, 50]), 3));
// → 40