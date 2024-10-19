let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

const directionSpeed = 2;
let position = 0, speed = directionSpeed, radius = 50;

function moveBall(){
    if (position + radius > 700 || (position - radius < 0 && speed < 0)) speed = (-1) * speed;
    else if ( position - radius < 0 || position + radius > 700)  speed *= directionSpeed;
    position += speed;
}

function drawBall(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(position, 50, radius, 0, 2 * Math.PI);
    context.fill();
}

function animate(){
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);