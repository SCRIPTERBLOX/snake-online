var score;

var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 700;
        var height = 700;

        size(width, height, 1);
        frameRate(10);


       mousePressed = function() {
            if (mouseX >= 200 && mouseX <= 300 && mouseY >= 0 && mouseY <= 200) {
                nextDir = "w";
            }

            if (mouseX >= 200 && mouseX <= 300 && mouseY >= 300 && mouseY <= 500) {
                nextDir = "s";
            }

            if (mouseX >= 0 && mouseX <= 200 && mouseY >= 200 && mouseY <= 300) {
                nextDir = "a";
            }

            if (mouseX >= 300 && mouseX <= 500 && mouseY >= 200 && mouseY <= 300) {
                nextDir = "d";
            }
       }

        draw = function() {
            background(50, 50, 50);
            fill(255, 0, 0)

            rect(250, 0, 100, 200);
            rect(200, 300, 100, 200);
            rect(0, 200, 200, 100);
            rect(300, 200, 200, 100);
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("mobile-controls");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);