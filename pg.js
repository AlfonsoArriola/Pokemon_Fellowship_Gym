let targetOffset,
    body = document.body,
    aboutButton = document.getElementById('about'),
    productButton = document.getElementById('product'),
    teamButton = document.getElementById('teams'),
    contactButton = document.getElementById('contact'),
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

aboutButton.addEventListener('click', onSideNavClick, false);
productButton.addEventListener('click', onSideNavClick, false);
teamButton.addEventListener('click', onSideNavClick, false);
contactButton.addEventListener('click', onSideNavClick, false);

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
