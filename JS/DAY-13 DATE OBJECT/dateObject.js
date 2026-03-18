console.log("Date Object in JS.");

//! What is DATE OBJECT in JS ?
//*The date object is a built in object in js is used to handle and manipulate the date and time in JS.

//! syntax : new Date();

let currentDate = new Date();
console.log(currentDate);//2026-03-18T06:16:09.776Z

//! DATE.now() : It will return the time in ms from JAN 1 - 1970 .
console.log(Date.now());//1773814569777

//! lenght : 7 ;
console.log(Date.length); //7

let randomDate = new Date(2005,2,18,12,25,50);
console.log(randomDate);//2005-03-18T06:55:50.000Z

//! DATE methods : get methods ->

//? 1. getfULLYear();
console.log(currentDate.getFullYear()); //2026

//? 2. getMonth();
console.log(currentDate.getMonth()); //2

//? 3. getDate();
console.log(currentDate.getDate()); //18

//? 4. getDay();
console.log(currentDate.getDay()); //3

//? 5. getHour();
console.log(currentDate.getHours()); //11

//? 6. getMinutes();
console.log(currentDate.getMinutes()); //46

//? 7. getSeconds();
console.log(currentDate.getSeconds()); //9

//? 8. getMilliSeconds();
console.log(currentDate.getMilliseconds()); //776