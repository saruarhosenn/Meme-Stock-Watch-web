/*============ Loader ============*/
var loader = document.querySelector(".section-loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/* ===== Scroll Back To Top ===== */
var mybutton = document.getElementById("scroll-up-btn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.opacity = "1";
    mybutton.style.right = "3rem";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style.right = "-10rem";
  }
}
mybutton.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ================ Pricing Tab ================ */
function openTab(evt, contentName) {
  var i, pricingTabcontent, pricingTabLinks;
  pricingTabcontent = document.getElementsByClassName("pricing-tabcontent");
  for (i = 0; i < pricingTabcontent.length; i++) {
    pricingTabcontent[i].style.display = "none";
  }
  pricingTabLinks = document.getElementsByClassName("pricing-tablinks");
  for (i = 0; i < pricingTabLinks.length; i++) {
    pricingTabLinks[i].className = pricingTabLinks[i].className.replace(" active", "");
  }
  document.getElementById(contentName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
