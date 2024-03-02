// Menu open close------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.left = "0";
}

function closemenu() {
    sidemenu.style.left = "100%";
}

// Scroll to Top------------------

mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}