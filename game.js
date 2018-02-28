var svg = document.getElementById("thing");
var clear = document.getElementById("clear");
var t = 0;
var guessX = 0;
var guessY = 0;
var oldX = 0;
var oldY = 0;


var drawcirc = function(x,y){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    line = document.createElementNS("http://www.w3.org/2000/svg", "line")    
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 20);
    circle.setAttribute("fill", "red");
    if(t != 0){
        line.setAttribute("x1", oldX)
        line.setAttribute("y1", oldY)
        line.setAttribute("x2", x)
        line.setAttribute("y2", y)
        line.setAttribute("style", "stroke:rgb(255,0,0);stroke-width:2")
    }
    oldX = x;
    oldY = y;
    t = 1;
    svg.appendChild(circle)
    svg.appendChild(line)

}

var draw = function(){
    storeGuess(event);
    drawcirc(guessX, guessY);
}

function storeGuess(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    guessX = x;
    guessY = y;
    console.log("x coords: " + guessX + ", y coords: " + guessY);
}

var clearcan = function(){
    svg.innerHTML = "";
    t = 0
}


clear.addEventListener("click", clearcan);
svg.addEventListener("click", draw);