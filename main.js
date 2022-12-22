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

canvasContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

let height = window.innerHeight;
let width = window.innerWidth;
canvas.width = width * devicePixelRatio;
canvas.height = height * devicePixelRatio;
canvas.style.height = height + "px";
canvas.style.width = width + "px";


canvasCenter = {
    x: canvas.width / 2,
    y: canvas.height / 2,
};

let squareHeightWidth = 350;
canvasContext.fillRect(
    canvasCenter.x - squareHeightWidth / 2,
    canvasCenter.y - squareHeightWidth / 2,
    squareHeightWidth,
    squareHeightWidth
);

canvasContext.lineWidth = 5
canvasContext.beginPath();
canvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
canvasContext.stroke();

output.innerHTML += " TESTED1";
