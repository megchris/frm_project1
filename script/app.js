let feature = document.getElementById("features");
let company = document.getElementById("company");
let feature_drd = document.getElementById("features_drd");
let company_drd = document.getElementById("company_drd");
let menu_bar = document.getElementById("menu_bar");
let close_menu = document.getElementById("close_menu");
let header = document.getElementById("header");

feature.addEventListener("click", () => {
  feature_drd.style.display == "none"
    ? (feature_drd.style.display = "block")
    : (feature_drd.style.display = "none");
});

company.addEventListener("click", () => {
  company_drd.style.display == "none"
    ? (company_drd.style.display = "block")
    : (company_drd.style.display = "none");
});

menu_bar.addEventListener("click", () => {
  header.style.display = "block";
  menu_bar.style.display = "none";
});

close_menu.addEventListener("click", () => {
  header.style.display = "none";
  menu_bar.style.display = "block";
});
