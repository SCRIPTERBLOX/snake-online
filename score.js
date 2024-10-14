var score;

var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 200;
        var height = 300;

        size(width, height, 1);
        frameRate(10);

        draw = function() {
            background(25, 25, 25);

            var baseScore = snake.length*100;
            score = baseScore-time;

            score *= 2;

            score -= time*10;

            var divScore = score/25;

            var roundScore = Math.round(divScore);

            score = roundScore*25;

            fill(255, 255, 255);
            textSize(50)
            text(score, 0, 50);

            textSize(20);
            text("Snake length * 100", 0, 70);
            text(snake.length+" * 100 = "+baseScore, 0, 90);
            text("- time", 0, 110);
            text(baseScore+" - "+time+" = "+(baseScore-time), 0, 130);
            text("* 2", 0, 150);

            var now;

            text(baseScore-time+" * 2 = "+(baseScore-time)*2, 0, 170);
            now = (baseScore-time)*2;
            text("- Time*10", 0, 190);
            text(now+" - "+time*10+" = "+(now-time*10), 0, 210);
            now = now-time*10;
            text("Round to nearest 25", 0, 230);

            var divNow = now/25;
            var roundNow = Math.round(divNow);
            now = roundNow*25;

            text("= "+now, 0, 250);
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("score");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);