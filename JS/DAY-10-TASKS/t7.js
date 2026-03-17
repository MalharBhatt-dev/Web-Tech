function removeDuplicate(arr){
    if(!arr) return "";
    return [...new Set(arr)];
}

console.log(removeDuplicate([1,2,3,1,2,3]));