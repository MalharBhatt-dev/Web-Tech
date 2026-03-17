function isPallindrome(str){
    if(!str) return "";
    return str==str.split("").reverse().join("") ? "Yes" : "No";
}

console.log(isPallindrome("madam"));