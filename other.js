var programCode = function(processingInstance) {
    with (processingInstance) {
        var width = 300;
        var height = 500;

        size(width, height, 1);
        frameRate(10);

        draw = function() {
            background(25, 25, 25);
        };
    }
};

// Get the canvas that ProcessingJS will use
var canvas = document.getElementById("other");
// Pass the function to ProcessingJS constructor
var processingInstance = new Processing(canvas, programCode);