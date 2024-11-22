var tokens = 0;
var tokenDelay = 5;
var waitedTime = 0;
var spentTokens = 0;

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1); // Extract the cookie value
        }
    }
    return null; // Cookie not found
}

function doThing() {
    setTimeout(function() {
        waitedTime++;

        tokens = Math.floor(waitedTime/tokenDelay);

        doThing();
        document.cookie = "tokens="+tokens+"; expires=Thu, 18 Dec 2035 12:00:00 UTC; path=/; SameSite=Lax";
        document.cookie = "waited-time-tokens="+waitedTime+"; expires=Thu, 18 Dec 2035 12:00:00 UTC; path=/; SameSite=Lax";
        document.cookie = "spent-tokens="+spentTokens+"; expires=Thu, 18 Dec 2035 12:00:00 UTC; path=/; SameSite=Lax";
        console.log("token cookies have been set");

        let tokensCookie = getCookie("tokens");
        let waitedTimeTokensCookie = getCookie("waited-time-tokens");
        let spentTokensCookie = getCookie("spend-tokens");
        console.log(tokensCookie+", "+spentTokensCookie+", "+waitedTimeTokensCookie)
        console.log(document.cookie);
    }, 1000);
}

doThing();