// Under development and modification

document.getElementById("register").onsubmit = function (e) {
    let emailInput = document.querySelector(`[name="email"]`).value;
    let passInput = document.querySelector(`[name="password"]`).value;
    
    // let emailInputRe = /\w+\d{0,3}@\w+\.\W+[^0-9]/ig;
    let emailInputRe = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/ig;
    let validationEmailResult = emailInputRe.test(emailInput);
    
    // Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    let passInputRe = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ig;
    let validationPassResult = passInputRe.test(passInput);

    if(validationEmailResult == false || validationPassResult == false) {
        return false;
    }

    if(validationEmailResult == false) {
        document.querySelector(`[name="email"]`)[0].style.borderColor = "red";
    }

    return true;
};
