function findNumber(arr){
    if(!arr) return "";
    for(let num of arr){
        if(num>50) return num;
    }
}

console.log(findNumber([1,50,55,2]));