var tokens = 0;
var tokenDelay = 5;
var waitedTime = 0;

function doThing() {
    setTimeout(function() {
        waitedTime++;

        if (waitedTime >= tokenDelay) {
            waitedTime -= tokenDelay;
            tokens++;
        }

        doThing();
    }, 1000);
}

doThing();