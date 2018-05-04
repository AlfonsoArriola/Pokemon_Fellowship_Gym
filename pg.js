let targetOffset,
    body = document.body,
    t1btnButton = document.getElementById('t1btn'),
    t2btnButton = document.getElementById('t2btn'),
    t3btnButton = document.getElementById('t3btn'),
    t4btnButton = document.getElementById('t4btn'),
    animateTime = 900;

function onSideNavClick(event) {
  targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;

  body.style.transition = "margin-top " + animateTime + "ms ease-in-out";
  // body.style.marginTop = "-" + targetOffset + "px";

  window.setTimeout(function () {
        body.style.cssText = "";
        window.scrollTo({
              top: targetOffset,
              behavior: "smooth"
        });
    }, 0);

  event.preventDefault();
}

t1btnButton.addEventListener('click', onSideNavClick, false);
t2btnButton.addEventListener('click', onSideNavClick, false);
t3btnButton.addEventListener('click', onSideNavClick, false);
t4btnButton.addEventListener('click', onSideNavClick, false);

/*Scroll to top*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
