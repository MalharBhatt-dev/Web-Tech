function otpGenerator(){
    let otp = Math.floor(1000 + Math.random()*9000);
    let dis = document.getElementById("otp")
    dis.textContent = otp;
}

// console.log(otpGenerator());