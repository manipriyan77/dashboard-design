const MENU_BTN = document.getElementById("menu-icon");
const SIDE_NAV = document.getElementsByClassName("side-nav");
const DASHBOARD_CONTENT = document.getElementsByClassName("dashboard-content");
const CLOSE_BTN = document.getElementById("close-icon");

const openBtnHandler = () => {
  document.getElementById("side-nav-bar").style.display = "block";
  document.getElementById("side-nav-bar").style.zIndex = "999";
  document.getElementById("side-nav-bar").style.width = "60%";
  //   document.getElementById("dashboard-content-bar").style.width = "85%";
  document.getElementById("dashboard-content-bar").style.zIndex = "-10";
};

const closeBtnHandler = () => {
  document.getElementById("side-nav-bar").style.display = "none";
};
