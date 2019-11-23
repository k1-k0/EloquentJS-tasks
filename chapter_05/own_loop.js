// Your code here.
const loop = (count, condition, iterator, func) => {
    let value = count;
    while(condition(value)) {
        func(value);
        value = iterator(value);
    }
};

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

loop(10, n => n > 0, n => n - 1, n => console.log(Math.pow(2, n)));