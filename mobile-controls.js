var score;

var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 400;
        var height = 400;

        size(width, height, 1);
        frameRate(10);


       mousePressed = function() {
       console.log(mouseX+", "+mouseY);
            if (mouseX >= 175 && mouseX <= 225 && mouseY >= 0 && mouseY <= 150) {
                nextDir = "w";
            }

            if (mouseX >= 175 && mouseX <= 225 && mouseY >= 250 && mouseY <= 400) {
                nextDir = "s";
            }

            if (mouseX >= 0 && mouseX <= 150 && mouseY >= 175 && mouseY <= 225) {
                nextDir = "a";
            }

            if (mouseX >= 250 && mouseX <= 400 && mouseY >= 175 && mouseY <= 225) {
                nextDir = "d";
            }
       }

        draw = function() {
            background(50, 50, 50);
            fill(255, 0, 0)

            rect(175, 0, 50, 150);
            rect(175, 250, 50, 150);
            rect(0, 175, 150, 50);
            rect(250, 175, 150, 50);
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("mobile-controls");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);