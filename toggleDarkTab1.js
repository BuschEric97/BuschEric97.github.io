var isDark = "t";
function toggleDark() {
  if (isDark == "t") {
    document.querySelectorAll("h2").forEach(element => {element.style.color = "#000000";});
    document.querySelectorAll("h3").forEach(element => {element.style.color = "#000000";});
    document.querySelectorAll("p").forEach(element => {element.style.color = "#000000";});
//    document.getElementById("leftside").style.background = "#e6e6e6";
//    document.getElementById("main").style.background = "#f2f2f2"
    isDark = "f";
  } else {
    document.querySelectorAll("h2").forEach(element => {element.style.color = "#ffffff";});
    document.querySelectorAll("h3").forEach(element => {element.style.color = "#ffffff";});
    document.querySelectorAll("p").forEach(element => {element.style.color = "#ffffff";});
//    document.getElementById("leftside").style.background = "#404040";
//    document.getElementById("main").style.background = "#4d4d4d";
    isDark = "t";
  }
}
