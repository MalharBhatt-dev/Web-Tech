function reverseString(str){
    if(!str) return "";
    return str.split("").reverse().join("");
}

console.log(reverseString("Malhar"));