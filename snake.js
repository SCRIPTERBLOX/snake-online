var snake;
var time = 1;
var speed = 2;

var dir = "w";
var nextDir = "w";

var growFor = 0;

var pause = false;
var onDeath = false;

var prevLength = 0;

var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 600;
        var height = 600;

        var widthStuds = width / 25;
        var heightsStuds = height / 25;

        size(width, height, 1);
        frameRate(speed);

        var growing = false;
        var food = [250, 350];

        var defaultSnake = [
            [width/2, height/2]
        ];

        snake = defaultSnake;

        keyPressed = function() {
            if (key.toString() == "w" && dir != "s") nextDir = "w";
            else if (key.toString() == "a" && dir != "d") nextDir = "a";
            else if (key.toString() == "s" && dir != "w") nextDir = "s";
            else if (key.toString() == "d" && dir != "a") nextDir = "d";

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
        };

        function myFunction() {
            onDeath = true;
            prevLength = snake.length;
        }

        function revive() {
            growFor = prevLength;

            pause = false;
            onDeath = false;

            dir = "w";
            nextDir = "w";
            snake = defaultSnake.map(segment => [...segment]);
            time = 1;
        }

        function respawn() {
            dir = "w";
            nextDir = "w";
            snake = defaultSnake.map(segment => [...segment]);
            time = 1;
        }

        function arrayIncludes(arr, coord) {
            return arr.some(item => item[0] === coord[0] && item[1] === coord[1]);
        }

        function getPos() {
            var x = Math.floor(Math.random() * widthStuds) * 25;
            var y = Math.floor(Math.random() * heightsStuds) * 25;

            if (arrayIncludes(snake, [x, y])) {
                return getPos();
            }

            return [x, y];
        }

        draw = function() {
            if (!pause) {
                if (!onDeath) {
                        frameRate(speed);
                        time += 1/speed;
                        if (nextDir == "w" && dir != "s") {
                            dir = "w";
                        }
                        if (nextDir == "s" && dir != "w") {
                            dir = "s";
                        }
                        if (nextDir == "a" && dir != "d") {
                            dir = "a";
                        }
                        if (nextDir == "d" && dir != "a") {
                            dir = "d"
                        }

                        let head = [...snake[0]];

                        if (dir == "a") head[0] -= 25;
                        else if (dir == "w") head[1] -= 25;
                        else if (dir == "s") head[1] += 25;
                        else if (dir == "d") head[0] += 25;

                        background(50, 50, 50);

                        if (head[1] > height) {
                            head[1] = 0
                        }

                        if (head[0] > width) {
                            head[0] = 0
                        }

                        if (head[1] < 0) {
                            head[1] = height
                        }

                        if (head[0] < 0) {
                            head[0] = width
                        }

                        noStroke();
                        var headColor = color(0, 100, 0);
                        var restColor = color(0, 255, 0);
                        var foodColor = color(255, 0, 0);

                        var newSnake = [head];

                        for (var i = 0; i < snake.length; i++) {
                            newSnake.push([...snake[i]]);
                        }

                        // Check if the snake's head collides with its body excluding the tail
                        // If the snake has more than 2 segments, ignore the last segment
                        if (snake.length > 2 && arrayIncludes(snake.slice(1, snake.length - 1), head)) {
                            myFunction();
                            return;
                        }

                        if (head[0] === food[0] && head[1] === food[1]) {
                            growing = true;
                        }

                        if (!growing && growFor == 0) {
                            newSnake.pop();
                        } else if (growing && growFor == 0) {
                            growing = false;
                            var [foodX, foodY] = getPos();
                            food[0] = foodX;
                            food[1] = foodY;
                        } else if (growing && growFor > 0) {
                            growing = false;
                            var [foodX, foodY] = getPos();
                            food[0] = foodX;
                            food[1] = foodY;
                        } else {
                            growFor -= 1;
                        }

                        snake = newSnake;

                        // Render the snake
                        for (var i = 0; i < snake.length; i++) {
                            fill(i === 0 ? headColor : restColor);
                            rect(snake[i][0], snake[i][1], 25, 25);
                        }

                        // Render food
                        fill(foodColor);
                        rect(food[0], food[1], 25, 25);
                } else {
                    background(50, 50, 50);

                    //death screen
                    fill(25, 25, 25);
                    rect(125, 175, 350, 250);
                    fill(255, 255, 255);
                    textSize(65);
                    text("YOU DIED", 143, 250);

                    fill(0, 100, 0);
                    textSize(20);
                    if (tokens > 1) {
                        text("You currently have |"+tokens+"| revive tokens", 147, 285);
                    } else if (tokens == 0) {
                        text("You currently have no revive tokens", 147, 285);
                    } else {
                        text("You currently have >"+tokens+"< revive token", 147, 285);
                    }

                    textSize(14);
                    fill(100, 100, 100);
                    text("You gain one revive token every "+tokenDelay+" seconds.", 147, 300);
                    text("In "+(tokenDelay-waitedTime)+" seconds you will get your next token", 147, 314);

                    //buttons
                    fill(0, 255, 0);
                    rect(150, 325, 125, 75); // revive button
                    fill(0, 0, 0);
                    textSize(25);
                    text("REVIVE", 163, 350);
                    textSize(15);
                    fill(255, 255, 255);
                    text("- 1 revive token.", 160, 370);
                    text("Keeps all length", 160, 390);

                    fill(255, 0, 0);
                    rect(325, 325, 125, 75); // respawn button
                    fill(0, 0, 0);
                    textSize(25);
                    text("RESPAWN", 327, 350);
                    textSize(14);
                    fill(255, 255, 255);
                    text("Revive tokens stay.", 328, 370);
                    text("Resets length", 328, 390);

                    // detect click
                }
           }
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("snake");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);