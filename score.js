var score;

var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 236;
        var height = 420;

        var bg;

        size(width, height, 1);
        frameRate(10);

        setup = function() {
          bg = loadImage("score-bg.png");
        }

        draw = function() {
            background(100, 100, 100);
            image(bg, 0, 0);

            var baseScore = snake.length*100;
            score = baseScore-time;

            score *= 2;

            score -= time*10;

            var divScore = score/25;

            var roundScore = Math.round(divScore);

            score = roundScore*25;

            fill(255, 255, 255);
            if (score > 99000) {
                textSize(40);
            } else {
                textSize(50);
            }
            text(score, 40, 120);

            textSize(15);
            text("Snake length * 100", 45, 192);
            text(snake.length+" * 100 = "+baseScore, 45, 210);
            text("- time", 45, 226);
            text(baseScore+" - "+time.toFixed(2)+" = "+(baseScore-time).toFixed(2), 45, 246);
            text("* 2", 45, 262);

            var now;

            text((baseScore-time).toFixed(2)+" * 2 = "+((baseScore-time)*2).toFixed(2), 45, 280);
            now = (baseScore-time)*2;
            text("- Time*10", 45, 298);
            text(now.toFixed(2)+" - "+(time*10).toFixed(2)+" = "+Math.round((now-time*10)), 45, 316);
            now = now-time*10;
            text("Round to nearest 25", 45, 335);

            var divNow = now/25;
            var roundNow = Math.round(divNow);
            now = roundNow*25;

            text("= "+now, 45, 370);
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("score");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);