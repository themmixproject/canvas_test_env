// setting up canvas
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('2d');
canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

let output = document.getElementById("output");
console.log(output)

var canvasCenter = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

var devicePixelRatio = window.devicePixelRatio || 1;
var backingStoreRatio = canvasContext.webkitBackingStorePixelRatio ||
canvasContext.mozBackingStorePixelRatio ||
canvasContext.msBackingStorePixelRatio ||
canvasContext.oBackingStorePixelRatio ||
canvasContext.backingStorePixelRatio || 1;

devicePixelRatio = devicePixelRatio / backingStoreRatio;
output.innerHTML = devicePixelRatio;

