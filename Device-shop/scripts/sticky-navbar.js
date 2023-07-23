window.onscroll = function() {
    myFunction()
};

let navbar = document.getElementById("navbar");

let sticky = navbar.offsetTop;

function myFunction() {
    if(window.scrollY >= sticky) {
        navbar.classList.add("sticky")
        // navbar.classList.add("background: gray")
    } else {
        navbar.classList.remove("sticky");
    }
}