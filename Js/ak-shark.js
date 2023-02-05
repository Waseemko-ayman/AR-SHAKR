let input = document.getElementById("blur");

window.onload = function () {
    input.focus();
};

/***********************************************************************/
// Move between pages
function redirectMe(url) {
    window.location = url;
}

/***********************************************************************/

// Scroll bar
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

/***********************************************************************/

// Nav Bar (Menu)
let burger = document.getElementById("bar");
let navBar = document.getElementById("navbar");
let closeIcon = document.getElementById("close");

if (burger) {
    burger.addEventListener("click", function () {
        navBar.classList.add("active");
    })
};

if (closeIcon) {
    closeIcon.addEventListener("click", function () {
        navBar.classList.remove("active");
    })
};
/***********************************************************************/

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


/***********************************************************************/

// let icon = document.getElementById("icon");
// let addToCard = document.getElementById("addCard");

// addToCard.onclick = function () {

// }