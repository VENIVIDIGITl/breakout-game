const showRulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');

let score = 0;


// Show and close rules event handlers
showRulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeRulesBtn.addEventListener('click', () => rules.classList.remove('show'));


// Create canvas context
const ctx = canvas.getContext('2d');


// Create ball properties
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: 4,
  dx: 4,
  dy: -4
}


// Draw ball on canvas
function drawBall() {
  ctx.beginPath();
  // Create ball shape
  // CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean)
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true);
  ctx.fillStyle = '#c6e2ff';
  ctx.fill();
  ctx.closePath();
}


// Create paddle properties
const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height -20,
  width: 80,
  height: 10,
  speed: 4,
  dx: 0
}


// Draw paddle on canvas
function drawPaddle() {
  ctx.beginPath();
  // Create paddle shape
  // CanvasPath.rect(x: number, y: number, w: number, h: number)
  ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  ctx.fillStyle = '#c6e2ff';
  ctx.fill();
  ctx.closePath();
}


// Draw score on canvas
function drawScore() {
  const scorePosition = [canvas.width - 100, 30];
  ctx.font = '20px Arial';
  ctx.fillText(`Score: ${score}`, ...scorePosition);
}


// Draw all shapes on canvas
function draw() {
  drawBall();
  drawPaddle();
  drawScore();
}

// Draw everything on page load
draw();
