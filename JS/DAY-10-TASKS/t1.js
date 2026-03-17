function getExtension(file){
    if (!file) return "";
    const parts = file.split(".");
    return parts[1];
}

console.log(getExtension("indexedDB.html"));