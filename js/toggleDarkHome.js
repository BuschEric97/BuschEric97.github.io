function toggleDark(isDark) {
    alert("in toggleDarkHome.js/toggleDark(isDark=" + isDark + ")");
    if (isDark == "t") {
        document.querySelectorAll("h2").forEach(element => {element.style.color = "#000000";});
        document.querySelectorAll("h3").forEach(element => {element.style.color = "#000000";});
        document.querySelectorAll("p").forEach(element => {element.style.color = "#000000";});
        document.querySelectorAll("body").forEach(element => {element.style.background = "#f2f2f2";});
        leftsides = document.getElementsByClassName("leftside");
        for(var i = 0; i < leftsides.length; i++) {leftsides[i].style.background = "#e6e6e6";}
        mains = document.getElementsByClassName("main");
        for(var i = 0; i < mains.length; i++) {mains[i].style.background = "#f2f2f2";}
    } else if (isDark == "f") {
        document.querySelectorAll("h2").forEach(element => {element.style.color = "#ffffff";});
        document.querySelectorAll("h3").forEach(element => {element.style.color = "#ffffff";});
        document.querySelectorAll("p").forEach(element => {element.style.color = "#ffffff";});
        document.querySelectorAll("body").forEach(element => {element.style.background = "#4d4d4d";});
        leftsides = document.getElementsByClassName("leftside");
        for(var i = 0; i < leftsides.length; i++) {leftsides[i].style.background = "#404040";}
        mains = document.getElementsByClassName("main");
        for(var i = 0; i < mains.length; i++) {mains[i].style.background = "#4d4d4d";}
    }
}
