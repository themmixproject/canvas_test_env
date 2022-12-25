// setting up canvas
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

// canvas.height = window.innerHeight;

let output = document.getElementById("output");
console.log(output);

var devicePixelRatio = Math.ceil(window.devicePixelRatio || 1);
var backingStoreRatio =
    canvasContext.webkitBackingStorePixelRatio ||
    canvasContext.mozBackingStorePixelRatio ||
    canvasContext.msBackingStorePixelRatio ||
    canvasContext.oBackingStorePixelRatio ||
    canvasContext.backingStorePixelRatio ||
    1;

devicePixelRatio = devicePixelRatio / backingStoreRatio;
output.innerHTML = devicePixelRatio;


// canvasContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

let height = window.innerHeight;
let width = window.innerWidth;
canvas.width = width * devicePixelRatio;
canvas.height = height * devicePixelRatio;
canvas.style.height = height + "px";
canvas.style.width = width + "px";
// canvasContext.scale(devicePixelRatio /width , devicePixelRatio / /)
// canvasContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, -width , -height)

// c.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);
if(window.devicePixelRatio > 1){
    canvasContext.scale(window.devicePixelRatio, window.devicePixelRatio)
}
canvasCenter = {
    x: width / 2,
    y: height / 2,
};

// let squareHeightWidth = 350 * devicePixelRatio;
// canvasContext.fillRect(
//     canvasCenter.x - squareHeightWidth / 2,
//     canvasCenter.y - squareHeightWidth / 2,
//     squareHeightWidth,
//     squareHeightWidth
// );

canvasContext.lineWidth = 5
canvasContext.beginPath();
canvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
canvasContext.stroke();

grid = {
    margin: 15,
    celPadding: 20,
    lineLength: 350.5
};
grid.sectionLength = grid.lineLength / 3;
grid.width = grid.lineLength + grid.margin;
grid.height = grid.width;

function drawGridOnCanvas(){
    // loadStyle(styles.grid);

    var lineStart = grid.sectionLength * 1.5;
    var lineEnd = -lineStart;

    var verticalStart = canvasCenter.y + lineStart;
    var verticalEnd = canvasCenter.y + lineEnd;

    var horizontalStart = canvasCenter.x + lineStart;
    var horizontalEnd = canvasCenter.x + lineEnd;

    canvasContext.beginPath();

    for(i=1; i>=-2; i-=2){
        var lineDifference = grid.sectionLength * 0.5 * i;
        var horizontalDifference = canvasCenter.y - lineDifference;
        var verticalDifference = canvasCenter.x - lineDifference;

        canvasContext.moveTo(verticalDifference, verticalStart);
        canvasContext.lineTo(verticalDifference, verticalEnd); 

        canvasContext.moveTo(horizontalStart, horizontalDifference);
        canvasContext.lineTo(horizontalEnd, horizontalDifference);
    }

    canvasContext.stroke();
}
drawGridOnCanvas();



output.innerHTML += " TESTED4";
