//h Callback Functions:

//! Example of Callback Functions:

//? 1st way to create a callback function:
//~ We will create the separate another function and pass it as reference to the main function.

function sir(studentName , callback){
    console.log(`✍🏽Sir , is checking the papers!`);

    setTimeout(()=>{
        console.log("Papers Checked");
        console.log(`Result for ${studentName} :`);
    },3000);
}

//~ Callback Function:
function result(){
    console.log("Pass✅");
}

//sir("John",result);

function orderFood(callback){
    console.log("food is ordered.");
    callback();
}

orderFood(()=>{
    console.log("Madan is your delivery boy.");
});

orderFood(function(){
    console.log("Suresh is your delivery boy!");
});

