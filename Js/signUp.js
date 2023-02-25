// Under development and modification

document.getElementById("register").onsubmit = function (e) {
    let userInput = document.querySelector(`[name="username"]`).value;
    let emailInput = document.querySelector(`[name="email"]`).value;
    let phoneInput = document.querySelector(`[name="phone"]`).value;
    let passInput = document.querySelector(`[name="password"]`).value;
    let confirmPassInput = document.querySelector(`[name="confirm-password"]`).value;

    let userInputRe = /^[a-z0-9_-\s]{3,16}$/ig;
    let validationUserResult = userInputRe.test(userInput);
    
    // let emailInputRe = /\w+\d{0,3}@\w+\.\W+[^0-9]/ig;
    let emailInputRe = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/ig;
    let validationEmailResult = emailInputRe.test(emailInput);
    
    let phoneInputRe = /\d{3}-\d{3}-\d{4,}/; // 059-216-4680
    let validationPhoneResult = phoneInputRe.test(phoneInput);
    
    // Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long
    let passInputRe = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ig;
    let validationPassResult = passInputRe.test(passInput);

    if(validationUserResult == false || validationEmailResult == false || validationPhoneResult == false || validationPassResult == false || confirmPassInput != passInput) {
        return false;
    }

    return true;
};


// Under development and modification

function showError(errorElement, errorMessage) {
    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError() {
    let errors = document.querySelectorAll("error");
    for(let error of errors) { // سنقوم بعمل لووب من خلال مصفوفة الأخطاء
        error.classList.remove("display-error");
    }
    // errors.forEach((item) => {
    //     item.classList.remove("display-error");
    // })
};


let form = document.forms[`sign-up-form`];
form.onsubmit = function (event) {

    clearError(); // علشان أخفي رسائل الخطأ

    if(form.email.value === "") {
        showError("email-error", "You have to enter your email");
        return false;
    };

    if(form.username.value === "") {
        showError("username-error", "You have to enter a username");
        return false;
    };

    if(form.phone.value === "") {
        showError("phone-error", "You have to enter a phone");
        return false;
    };

    if(form.password.value === "") {
        showError("password-error", "You have to enter a password");
        return false;
    };

    if(form[`confirm-password`].value !== form.password.value) {
        showError("confirm-password-error", "Password don't match");
        return false;
    };

    event.preventDefault();
};