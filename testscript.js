var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 500;
        var height = 500;

        var widthStuds = width / 25;
        var heightsStuds = height / 25;

        size(height, width, 1);
        frameRate(2);

        var growing = false;
        var food = [250, 350];

        var defaultSnake = [
            [250, 250],
            [250, 275],
            [250, 300]
        ];

        var snake = defaultSnake;

        var dir = "w";
        var nextDir = "w";

        keyPressed = function() {
            if (key.toString() == "w" && dir != "s") nextDir = "w";
            else if (key.toString() == "a" && dir != "d") nextDir = "a";
            else if (key.toString() == "s" && dir != "w") nextDir = "s";
            else if (key.toString() == "d" && dir != "a") nextDir = "d";
        };

        function myFunction() {
            dir = "w";
            nextDir = "w";
            snake = defaultSnake.map(segment => [...segment]);
        }

        function arrayIncludes(arr, coord) {
            return arr.some(item => item[0] === coord[0] && item[1] === coord[1]);
        }

        function getPos() {
            var x = Math.floor(Math.random() * widthStuds) * 25;
            var y = Math.floor(Math.random() * heightsStuds) * 25;

            console.log(x);
            console.log(y);

            if (arrayIncludes(snake, [x, y])) {
                console.log("Can't spawn there");
                return getPos(); // Call recursively until a valid position is found
            }

            return [x, y];
        }

        draw = function() {
            dir = nextDir;

            let head = [...snake[0]];

            if (dir == "a") head[0] -= 25;
            else if (dir == "w") head[1] -= 25;
            else if (dir == "s") head[1] += 25;
            else if (dir == "d") head[0] += 25;

            background(100, 100, 100);

            // Check for wall collision
            if (head[1] > height - 25 || head[1] < 0 || head[0] > width - 25 || head[0] < 0) {
                myFunction();
                return;
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

            if (!growing) {
                newSnake.pop();
            } else {
                growing = false;
                var [foodX, foodY] = getPos(); // Call getPos to get new food position
                food[0] = foodX;
                food[1] = foodY;
            }

            snake = newSnake;

            // Render the snake
            image("u.png", snake[0][0], snake[0][1], 25, 25);
            for (var i = 1; i < snake.length; i++) {
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
var canvas = document.getElementById("mycanvas");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);