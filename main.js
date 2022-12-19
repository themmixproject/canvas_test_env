// setting up canvas
var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext('2d');

// canvas.height = window.innerHeight;

let output = document.getElementById("output");
console.log(output)

var devicePixelRatio = window.devicePixelRatio || 1;
var backingStoreRatio = canvasContext.webkitBackingStorePixelRatio ||
canvasContext.mozBackingStorePixelRatio ||
canvasContext.msBackingStorePixelRatio ||
canvasContext.oBackingStorePixelRatio ||
canvasContext.backingStorePixelRatio || 1;

devicePixelRatio = devicePixelRatio / backingStoreRatio;
output.innerHTML = devicePixelRatio;


let height = 500; 
canvas.height =height * devicePixelRatio;
canvas.style.height = height + "px"

let width = window.innerWidth;
canvas.width = width * devicePixelRatio;
canvas.style.width  = width + "px"
canvasContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)

canvasContext.lineWidth = 5
canvasContext.beginPath();
canvasContext.arc(100, 75, 50, 0, 2 * Math.PI);
canvasContext.stroke();

canvasContext.lineCap = "round"
canvasContext.lineWidth = 10

canvasContext.beginPath();
canvasContext.moveTo(100, 300);
canvasContext.lineTo(300, 150);
canvasContext.stroke();





