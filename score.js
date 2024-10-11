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
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("score");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);