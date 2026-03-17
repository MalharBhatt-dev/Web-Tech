function getEvenNumbers(arr){
    if(!arr) return "";
    result = [];
    for(let num of arr){
        if(num%2==0) result.push(num);
    }
    return result;
}

console.log(getEvenNumbers([1,2,3]));