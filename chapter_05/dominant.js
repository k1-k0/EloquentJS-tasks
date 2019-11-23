require('./scripts.js');

// characterScript and countBy has been taken from book
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}


function dominantDirection(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    // Finding scripts with dominant count of symbols
    let useful_script = scripts.reduce( (a, b) => a.count > b.count ? a : b);
    const result = SCRIPTS.find( entry => entry.name === useful_script.name );
    if(result) {
      return result.direction;
    } else {
      return "Unknown";
    }
  }
  
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection("HeyHeyHeyHeyHey, مساء الخير"));