var can;
var ctx;
var moveNameDown = 20;
var gradient;
var intervalX = 0;
var intervalY = 0;
var moveX = 0;
var moveY = 0;

function startCanvas(){
    can = document.getElementById("myCanvas");
    ctx = can.getContext("2d");
}
//button 1 : Text
function createName(){
    ctx.clearRect(0,0,250,200);
    ctx.font = "20px Impact";
    gradient = ctx.createLinearGradient(0, 0, can.width, 0);
    gradient.addColorStop("0", "red");
    gradient.addColorStop("0.5", "blue");
    ctx.fillStyle = gradient;
    ctx.fillText("Nawaphan Chayopathum", 20, moveNameDown);
    moveNameDown = (moveNameDown > 180) ? 20 : moveNameDown += 20;
}
//button 2 : Squares
function createSquares() {
    ctx.fillStyle = "yellowgreen";
    ctx.fillRect(moveX, 150, 50, 50);
    ctx.fillRect(880, moveY, 20, 20);
    intervalX = setInterval(moveSquareX, 100);
    intervalY = setInterval(moveSquareY, 10);
}
function moveSquareX(){
    ctx.clearRect(moveX,150,50,50);
    moveX = (moveX > 900) ? 0 : ++moveX;   
    ctx.fillRect(moveX,150,50,50);   
}
function moveSquareY(){
    ctx.clearRect(880,moveY,20,20) ;
    moveY = (moveY > 200) ? 0 : ++moveY;
    ctx.fillRect(880,moveY,20,20);    
}
//button 3 : Draw
function createInitials() {
    j();
    setTimeout(n, 3000);
    setTimeout(c, 6000);
}
function j(){
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "green";
    ctx.moveTo(350, 20);
    ctx.lineTo(400, 20);
    ctx.moveTo(400, 20);
    ctx.lineTo(400, 120);
    ctx.moveTo(400, 120);
    ctx.lineTo(300, 120); 
    ctx.moveTo(300, 120);
    ctx.lineTo(300, 100);
    ctx.stroke();
}
function n(){
    ctx.beginPath();
    ctx.lineWidth = "15";
    ctx.strokeStyle = "blue";
    ctx.moveTo(420, 120);
    ctx.lineTo(420, 20);
    ctx.moveTo(420, 20);
    ctx.lineTo(500, 120);
    ctx.moveTo(500, 120);
    ctx.lineTo(500, 20);
    ctx.stroke();
}
function c(){
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "violet";
    ctx.moveTo(620, 20);
    ctx.lineTo(520, 20);
    ctx.moveTo(520, 20);
    ctx.lineTo(520, 120);
    ctx.moveTo(520, 120);
    ctx.lineTo(620, 120);
    ctx.stroke();
}
//button 4 : Clear
function clearCanvas() {
    ctx.clearRect(0, 0, 900, 200);
    clearInterval(intervalX);
    clearInterval(intervalY);
    moveNameDown = 20;
    moveX = 0;
    moveY = 0;
}