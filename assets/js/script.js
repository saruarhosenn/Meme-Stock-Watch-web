/*============ Loader ============*/
var loader = document.querySelector(".section-loader");
window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}

/*============ Toggle Mobile Menu ============*/
const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar-toggler');
const sidebarClosedIcon = document.querySelector('.sidebar-closed-icon');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.add('show');
});
sidebarClosedIcon.addEventListener('click', () => {
    sidebar.classList.remove('show');
});

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
