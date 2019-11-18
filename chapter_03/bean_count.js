// Your code here.
const countChar = (word, bean) => {
    let totalCount = 0;

    for(let ch = 0; ch < word.length; ++ch) {
        if(word[ch] === bean) {
            totalCount++;
        }
    }

    return totalCount;
}


const countBs = (word) => {
    return countChar(word, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4