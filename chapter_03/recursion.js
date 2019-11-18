// Your code here.
// 1. 'classic' 
function isEven_v1(value) {
    if (value < 0)
        return null;
    else if(value === 1)
        return false;
    else if (value === 0)
        return true;
    else 
        return isEven_v1(value - 2);
}

// 2. 'binding' 
const isEven_v2 = function (value) {
    if (value < 0)
        return null;
    else if(value === 1)
        return false;
    else if (value === 0)
        return true;
    else 
        return isEven_v2(value - 2);
};

// 3. 'Arrow' function 
const isEven_v3 = (value) => {
    if (value < 0)
        return null;
    else if(value === 1)
        return false;
    else if (!value)
        return true;
    else
        return isEven_v3(value - 2);
};

console.log(isEven_v1(50) === true);
console.log(isEven_v2(50) === true);
console.log(isEven_v3(50) === true);
// → true
console.log(isEven_v1(75) === false);
console.log(isEven_v2(75) === false);
console.log(isEven_v3(75) === false);
// → false
console.log(isEven_v1(-1) === null);
console.log(isEven_v2(-1) === null);
console.log(isEven_v3(-1) === null);
// → ??