// Your code here.
// 1. 'classic'
function min_v1(lv, rv) {
    return (lv > rv) ? rv : lv;
}

// 2. 'binding'
const min_v2 = function (lv, rv) {
    return (lv > rv) ? rv : lv;
};

// 3. 'Arrow' function
const min_v3 = (lv, rv) => (lv > rv) ? rv : lv;


console.log(min_v1(0, 10));
console.log(min_v2(0, 10));
console.log(min_v3(0, 10));
// → 0
console.log(min_v1(0, -10));
console.log(min_v2(0, -10));
console.log(min_v3(0, -10));
// → -10