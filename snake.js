var snake;
var time = 1;
var speed = 2;

var dir = "w";
var nextDir = "w";

var growFor = 7;

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
            else if (key.toString() == "p") speed = 0;
        };

        function myFunction() {
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
                console.log("Can't spawn there");
                return getPos(); // Call recursively until a valid position is found
            }

            return [x, y];
        }

        draw = function() {
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
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("snake");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);