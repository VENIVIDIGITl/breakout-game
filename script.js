const showRulesBtn = document.getElementById('rules-btn');
const closeRulesBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');

let score = 0;
const brickRowCount = 5;
const brickColumnCount = 9;

// Show and close rules event handlers
showRulesBtn.addEventListener('click', () => rules.classList.add('show'));
closeRulesBtn.addEventListener('click', () => rules.classList.remove('show'));


// Create canvas context
const ctx = canvas.getContext('2d');


// Create ball properties
const ball = {
  color: '#aec8e3',
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
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}


// Create paddle properties
const paddle = {
  color: '#aec8e3',
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
  ctx.fillStyle = paddle.color;
  ctx.fill();
  ctx.closePath();
}


// Draw score on canvas
function drawScore() {
  const position = [canvas.width - 100, 30];
  ctx.font = '20px Arial';
  ctx.fillStyle = '#c6e2ff';
  ctx.fillText(`Score: ${score}`, ...position);
}


// Create brick properties
const brick = {
  color: '#465060',
  width: 70,
  height: 20,
  padding: 10,
  offsetX: 45,
  offsetY: 60,
  visible: true,
  x: undefined,
  y: undefined
}


// Create bricks
const bricks = [];

for (let i = 0; i < brickColumnCount; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickRowCount; j++) {
    // Calculate brick (x, y) position properties
    const x = i * (brick.width + brick.padding) + brick.offsetX;
    const y = j * (brick.height + brick.padding) + brick.offsetY;
    // Push brick object into bricks array
    bricks[i][j] = { ...brick, x, y };
  }
}


// Draw bricks on canvas
function drawBricks() {
  bricks.forEach(column => {
    column.forEach(brick => {
      ctx.beginPath();
      // Create brick shape
      // CanvasPath.rect(x: number, y: number, w: number, h: number)
      ctx.rect(brick.x, brick.y, brick.width, brick.height);
      ctx.fillStyle = brick.visible ? brick.color : 'transparent';
      ctx.fill();
      ctx.closePath();
    });
  });
}


// Draw all shapes on canvas
function draw() {
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

// Draw everything on page load
draw();
