function capitalizeWords(str){
    if(!str) return "";
    const words = str.split(" ");
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1);
    return words.join(" ");
}
console.log(capitalizeWords("malhar bhatt"))