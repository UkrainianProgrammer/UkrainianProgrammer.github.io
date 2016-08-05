//Changing style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white" + " w3-center" + " w3-large";
    } else {
        navbar.className = navbar.className.replace("w3-card-2 w3-animate-top w3-white", " w3-text-white");
    }
}