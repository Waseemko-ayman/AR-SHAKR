let input = document.getElementById("blur");

window.onload = function () {
    input.focus();
};

/***************************************/

function redirectMe(url) {
    window.location = url;
}

/***************************************/

let myButton = document.getElementById("group");
let header = document.getElementById("header");

window.onscroll = function () {
    if (window.pageYOffset >= 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
    if (window.pageYOffset >= 200) {
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.zIndex = "5000";
    }

};

myButton.onclick = function () {
    window.scrollTo(0, 0);
}

/***************************************/
// إخفاء وإظهار القائمة المسندلة

let menu = document.querySelector(".burger-nav");
let listMenu = document.querySelector(".parent-menu");


menu.onclick = function () {
    if (listMenu.style.display === "block") {
        listMenu.style.display = "none";
    } else {
        listMenu.style.display = "block";
    }
} 
/***************************************/

// let button = document.getElementById("button");
// let passWord = document.querySelector("[type= 'password']");

// button.onclick = function () {
//     function pass(passWord) {
//         if (passWord.value === " ") {
//             window.alert("Are you sure to change the password??");
//         }
//     }
//     pass(passWord);
// }


/***************************************/

// let icon = document.getElementById("icon");
// let addToCard = document.getElementById("addCard");

// addToCard.onclick = function () {

// }