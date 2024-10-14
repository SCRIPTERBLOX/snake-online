var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 200;
        var height = 500;

        size(width, height, 1);
        frameRate(10);

        mousePressed = function() {
            if (mouseX >= 12 && mouseX <= 62 && mouseY >= 10 && mouseY <= 60) {
                speed = 2;
            }

            if (mouseX >= 74 && mouseX <= 124 && mouseY >= 10 && mouseY <= 60) {
                speed = 4;
           }

           if (mouseX >= 136 && mouseX <= 186 && mouseY >= 10 && mouseY <= 60) {
            speed = 10;
          }

            if (key.toString() == "1") speed = 1;
            else if (key.toString() == "2") speed = 2;
            else if (key.toString() == "3") speed = 3;
            else if (key.toString() == "4") speed = 4;
            else if (key.toString() == "5") speed = 5;
            else if (key.toString() == "6") speed = 6;
            else if (key.toString() == "7") speed = 7;
            else if (key.toString() == "8") speed = 8;
            else if (key.toString() == "9") speed = 9;
            else if (key.toString() == "0") speed = 10;
            else if (key.toString() == "p") speed = 0;
        }

        keyPressed = function() {
            if (key.toString() == "w" && dir != "s") nextDir = "w";
            else if (key.toString() == "a" && dir != "d") nextDir = "a";
            else if (key.toString() == "s" && dir != "w") nextDir = "s";
            else if (key.toString() == "d" && dir != "a") nextDir = "d";
       };

        draw = function() {
            background(25, 25, 25);

            fill(100, 100, 100);

            rect(12, 10, 50, 50);
            rect(74, 10, 50, 50);
            rect(136, 10, 50, 50);

            fill(255, 255, 255);

            textSize(40);

            text("1X", 12, 50);
            text("2X", 74, 50);
            text("5X", 136, 50);
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("other");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);
