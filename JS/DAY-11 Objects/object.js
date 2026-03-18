console.log("OBJECT IN JS");

//! What is Object?
//* The object is a collection of different multiple key-value pair.
//* The programmatical representation of a real life entity is called as object in Javascript.
//? Property = key + value

//! Ways to create an object :
//? 1. By using Object Literals -> {}
//? 2. By using Object cosntructor - new Object()

let obj = new Object();
console.log(obj); //{}

//!Syntax to add the properties inside the empty or existing object:
//? obj_ref_var.keyName = value;
obj.username = "malhar";
console.log(obj);

//! By using Object Literals:
let human = {name : "malhar",age : 22 , status : true , isMarried : undefined , isChild : null};
console.log(human); //h Object is printed in alphabetically order.

//! How we can access the object properties or keyname :
//?There are two ways to access the object properties :
//* 1. By using Dot(.) Notation
//* 2. By using Square-Bracket([]) Notation

//* 1. By using Dot(.) Notation :
//? Syntax : obj_ref_var.keyName
console.log(human.name);
console.log(human.age);

//! How to add the new properties in the existing Object :
//? Syntax : obj_ref_var.keyName = value;
human.address = "India";
console.log(human);

//! How to remove the existing properties from the object :
//? Syntax : delete obj_ref_var.keyName;
delete human.isChild;
console.log(human); 