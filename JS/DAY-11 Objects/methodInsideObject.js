console.log("OBJECTS IN JS");
//! A method is simply a javascript function which is stored inside the object.

let car = {
    brand :"Ford",
    model : "gt",
    price : "75 Lakhs",
    color : "red",
    start : function () {
        console.log("Car started...");
    }
};
console.log(car);
console.log(car.brand);//Ford
console.log(car.start);//[Function: start]
console.log(car.start());//Car started... /br undefined
car.start();//Car started...

//! this keyword inside the object :
function thisKeyword() {console.log(this);} // Window -> Global Object.
thisKeyword();

let thisKeywordObj ={
    username : "MALHAR",
    demo : function () {console.log(this);}//refers the current object.
};
console.log(thisKeywordObj);
thisKeywordObj.demo();