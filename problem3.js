function countOfVowels(string) {
const vowelMap = new Map();
vowelMap.set("a",true)
vowelMap.set("e",true)
vowelMap.set("i",true)
vowelMap.set("o",true)
vowelMap.set("u",true)
let count=0;
for(let i = 0; i <string.length; i ++) {
    if (vowelMap.has(string[i])){
        count++;
    }
}
return count;




}
console.log(countOfVowels('angel'));

    

