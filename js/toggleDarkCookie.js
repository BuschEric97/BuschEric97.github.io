var cName = "darkCookie"; // name of the cookie that specifies if user wants dark mode on

// get the current stored value of the cookie named cName
function getDarkCookie() {
    var cookies = document.cookie.split(";"); // get all cookies
    for (var i = 0; i < cookies.length; i++) {
        cookie = cookies[i]; // get current checked cookie
        while (cookie.charAt(0) == " ") { // get rid of leading spaces
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cName) == 0) { // if current checked cookie is cName
            return cookie.substring(cName.length+1, cookie.length); // return value of cookie
        }
    }
    return ""; // return nothing if cookie doesn't exist
}

// set the current stored value of the cookie named cName
function setDarkCookie(darkValue, expireDays) {
    // set the expire date to a day in the past
    var date = new Date();
    date.setTime(date.getTime() + (expireDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();

    // set the cookie with the new values
    document.cookie = cName + "=" + darkValue + ";" + expires;
}

// delete the cookie named cName
function deleteDarkCookie() {
    setDarkCookie("t", -1);
}

// check if the cookie named cName exists. If not, create it
function checkDarkCookie() {
    var cookie = getDarkCookie(); // get current value of cookie
    if (cookie == "") { // if current value of cookie is empty, create a new one
        setDarkCookie("t", 365);
    }
}

function toggleDarkCookie() {
    checkDarkCookie(); // check that cookie exists
    var cookie = getDarkCookie(); // get current value of cookie

    // switch the current cookie value to it's opposite
    if (cookie == "t") {
        setDarkCookie("f", 365);
        return "f";
    } else if (cookie == "f") {
        setDarkCookie("t", 365);
        return "t";
    }
}