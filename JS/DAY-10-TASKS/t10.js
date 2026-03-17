function doubleNumbers(arr){
    if(!arr) return "";
    let result = [];
    for (let num of arr) result.push(num*2);
    return result;
}

console.log(doubleNumbers([1,2,3]));