// Disable right click event
// document.addEventListener("contextmenu", function(e) {
//     e.preventDefault();
// }, false);

// When the user scrolls the page, execute this function
window.onscroll = function() {
    this.executeSticky();
    this.revealLogo();
}

// Get the header
var gnb = document.getElementById("gnb");
var gnbBi = document.getElementById("bi");
var prototypeBtn = document.getElementById("prototype");

function executeSticky() {
    if (window.pageYOffset > 960) {
        gnb.style.top = "0px";
        gnb.style.position = "fixed";
        gnb.classList.add("fill-background");
        prototypeBtn.classList.remove("cta");
    } else {
        gnb.style.top = "32px";
        gnb.style.position = "absolute";
        gnb.classList.remove("fill-background");
        prototypeBtn.classList.add("cta");
    }
}

// function executeSticky() {
//     // console.log(window.pageYOffset);
//     if (window.pageYOffset > 960) {
//         gnb.classList.remove("absolute");
//         gnb.classList.add("sticky", "fill-background");
//         prototypeBtn.classList.remove("cta")
//     } else {
//         gnb.classList.remove("sticky", "fill-background");
//         gnb.classList.add("absolute");
//         prototypeBtn.classList.add("cta");
//     }
// }

function revealLogo() {
    if (window.pageYOffset < 960) {
        gnbBi.classList.add("hide");
    } else {
        gnbBi.removeAttribute("class");
    }
}