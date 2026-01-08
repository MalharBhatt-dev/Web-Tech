//! What is Operators?
//* Operators are used to perform a opeartions on operands.

//! Q. What is the difference between == and ===?

let num1 = 10;
let num2 = "10";

//*Here, == will only checks the value not the datatypes.
console.log(num1 == num2); //True

//*Here, === will check both value as well as datatypes.
console.log(num1 === num2); //False

//! String Concatenation Operator (+)
let firstName = "Malhar "
let middleName = "Hemantkumar "
let lastName = "Bhatt"

let fullName = firstName + middleName + lastName
console.log(fullName)

//! Ternary Operator
let statusCode = 200;

let result = statusCode === 200 ? "OK" : "NOT OK";
console.log(result);

console.log(null + 10);
console.log(null + undefined);
console.log(null + "hello");

//! Nullish Coalescing Operator (??)
//& The nullish coalescing operator (??) is used to provide the default value only when the value is null or undefined.
//& It is represented by the ??
//& If the value is valid value then default value will not be executed.
//? syntax : let result = value ?? defaultValue;

let age = 0 ;
let name  = 'malhar';
let status = false;
let userage = age ?? "User value is false";
console.log(userage); //0
function greetuser(username){
    let name = username ??  "Geust User";
    console.log(`Hello from ${name}`);
}
greetuser("malhar");
greetuser();

console.log(age ?? 18); //0
console.log(name ?? "Guest User"); //malhar
console.log(status ?? true); //false




