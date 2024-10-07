var programCode = function(processingInstance) {
      with (processingInstance) {
        size(500, 500);
        frameRate(2);

        // Paste code from Khan Academy here:
        var posY = 250;
        var posX = 250;

        var dir = "w";
        var nextDir = "w";

        keyPressed = function() {
            if (key.toString() == "w") {
                if (dir != "s") {
                    nextDir = "w";
                }
            } else if (key.toString() == "a") {
                if (dir != "d") {
                    nextDir = "a";
                }
            } else if (key.toString() == "s") {
                if (dir != "w") {
                    nextDir = "s";
                }
            } else if (key.toString() == "d") {
                if (dir != "a") {
                    nextDir = "d";
                }
            }
        };

        draw = function() {
            dir = nextDir;

            if (dir == "w") {
                posY -= 25;
            } else if (dir == "a") {
                posX -= 25;
            } else if (dir == "s") {
                posY += 25;
            } else if (dir == "d") {
                posX += 25;
            }

            background(100, 100, 100);

            text(posX+", "+posY, 250, 250);

            if (posY > 500-25 || posY < 0 || posX > 500-25 || posX < 0) {
                text("GAME OVER", 250, 250);
            }

            fill(0, 255, 0);
            noStroke();
            rect(posX, posY, 20, 20);
        };
      }};

    // Get the canvas that ProcessingJS will use
    var canvas = document.getElementById("mycanvas");
    // Pass the function to ProcessingJS constructor
    var processingInstance = new Processing(canvas, programCode);