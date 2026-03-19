//! function to calculate age :
function calculateAge(){
    let birthDate = document.getElementById("birthDate").value;
    console.log(birthDate);

    let today= new Date();
    let birthDateObj = new Date(birthDate);
    console.log(birthDateObj);

    if(!birthDate){
        alert("Please provide your dob.");
        return ; 
    }
    let yearDiff = today.getFullYear() - birthDateObj.getFullYear();
    let monthDiff = today.getMonth()-birthDateObj.getMonth();
    let daysDiff = today.getDate()-birthDateObj.getDate();

    // Adjust if the date is negative :
    if (daysDiff < 0){
        monthDiff --;
        let prevMonth = new Date(today.getFullYear(),today.getMonth(),0);
        daysDiff += prevMonth.getDate();
    }

    // Adjust if the months is negative :
    if (monthDiff < 0){
        yearDiff --;
        monthDiff += 12;
    }

    document.getElementById("result").textContent = `Age : ${yearDiff} Years, ${monthDiff} Months, ${daysDiff} Days`;
}

window.onload = function () {
    let todayDate = new Date();
    let formattedDate = todayDate.toISOString().split("T")[0];
    document.getElementById("currentDate").value = formattedDate;
    console.log(formattedDate);
};