var score;

var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 700;
        var height = 700;

        size(width, height, 1);
        frameRate(10);


       mousePressed = function() {
            if (mouseX >= 250 && mouseX <= 450 && mouseY >= 0 && mouseY <= 250) {
                nextDir = "w";
            }

            if (mouseX >= 250 && mouseX <= 450 && mouseY >= 450 && mouseY <= 700) {
                nextDir = "s";
            }

            if (mouseX >= 0 && mouseX <= 250 && mouseY >= 250 && mouseY <= 450) {
                nextDir = "a";
            }

            if (mouseX >= 450 && mouseX <= 700 && mouseY >= 300 && mouseY <= 500) {
                nextDir = "d";
            }

            if (key.toString() == "1") speed = 1;
            else if (key.toString == "2") speed = 2;
            else if (key.toString == "3") speed = 3;
            else if (key.toString == "4") speed = 4;
            else if (key.toString == "5") speed = 5;
            else if (key.toString == "6") speed = 6;
            else if (key.toString == "7") speed = 7;
            else if (key.toString == "8") speed = 8;
            else if (key.toString == "9") speed = 9;
            else if (key.toString == "0") speed = 10;
       }

        draw = function() {
            background(50, 50, 50);
            fill(255, 0, 0)

            rect(250, 0, 200, 250);
            rect(0, 250, 250, 200);
            rect(450, 250, 250, 200);
            rect(250, 450, 200, 250);
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("mobile-controls");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);