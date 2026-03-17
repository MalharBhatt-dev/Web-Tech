console.log("Objects in JS");
//h OBJECT METHODS :

let employee = {
    eName : "malhar",
    eAge : 20,
    eSalary : 30000 , 
    eStatus : true  ,
    eAddress : "Ahmedabad"
};

console.log(employee);

//! 1. Object.keys(); :
//* It will returns all the keys of an given object.
console.log(Object.keys(employee));

//! 2. Object.values(); :
//* It will returns all the values of an given object.
console.log(Object.values(employee));

//! 3. Object.assign(); :
//* It is used to merge the two different object.
let obj1 = {username :"malhar"};
let obj2 = {age : 20};

let mergedObj = Object.assign({},obj1,obj2);
console.log(mergedObj);

//! 4. Object.entries(); :
//* It will convert the property of an object into an nested [key,value] pair in the form of array.
console.log(Object.entries(employee));

//! 5. Object.fromEntries(); :
//* It will convert the nested [key,value] pair into the object.
let laptop = [
    ["brand","Asus"],
    ["model","f15"],
    ["price",60000]
];
console.log(Object.fromEntries(laptop));

//! Advanced Looping for extras..
//h For - In Loop :
//*It is used for looping the objects.
for (const k in employee) {
console.log(k);//keys
console.log(employee[k]);//values
console.log(employee.k);//undefined //!Should not use in For - In loop   
}

//h For - of loop :
//* It is used in Iterable datatypes like array , string , etc.
let arr = [1,2,3];
for (let ele of arr){
    console.log(ele);//values
}
for (let ele in arr){
    console.log(ele);//index
    console.log(arr[ele]);//values
}