function countVowels(str){
    if(!str) return "";
    
    const vowels = "aeiouAEIUO";
    let count = 0;
    for (let char of str){
        if(vowels.includes(char)){
            count ++;
        }
    }
    return count;
}

console.log(countVowels("malhar"));