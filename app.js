const canvas = document.getElementById("game");
const context = canvas.getContext("2d");
const getscore=document.getElementById('score')
const getscore1=document.getElementById('score1')
const light=document.getElementById("light")
const medium=document.getElementById("medium")
const hard=document.getElementById("hard")
const player1=document.getElementById("player1")
const player2=document.getElementById("player2")
const grid = 15;

let speed=0;
let score=0;
let ss=null;
let snake = {
  tail: [],
  maxSnake: 4,
  x: 300,
  y: 300,
  dirX: grid,
  dirY: 0,

};
let score1=0;
let snake1={
  tail: [],
  maxSnake: 4,
  x: 450,
  y: 450,
  dirX: grid,
  dirY: 0,
}

food = {
  x: 150,
  y: 150,
};
let foodRaX= random(0, 60) * grid;
let foodRaY=random(0, 40) * grid;
function scored(){
  
  score++;
  innerScore()
}
function innerScore1(){
  getscore1.innerHTML=score1;
}
function scored1(){
  
  score1++;
  innerScore1()
}
function innerScore(){
  getscore.innerHTML=score;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function recanvas1() {

  requestAnimationFrame(recanvas1)
if(++speed<ss){
  return
}
  speed=0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.x += snake.dirX;
  snake.y += snake.dirY;
  if(snake.x>=canvas.width){
    snake.x=0
  }else if(snake.x<0){
    snake.x= canvas.width-grid
  };
  if(snake.y>=canvas.height){
    snake.y=0
  }else if(snake.y<0){
    snake.y=canvas.height-grid
  };
  snake.tail.unshift({ x: snake.x, y: snake.y });
  if (snake.tail.length > snake.maxSnake) {
    snake.tail.pop();
  };

 
  context.fillStyle = 'red';
  context.fillRect(food.x, food.y, grid - 1, grid - 1);

  context.fillStyle = 'pink';

  snake.tail.forEach(function (st, index) {
  
    context.fillRect(st.x, st.y, grid, grid);
   
    if (st.x === food.x && st.y === food.y) {
  
      snake.maxSnake++;
      scored()

      food.x = random(0, 60) * grid;
      food.y = random(0, 40) * grid;
    }
   
    for (let i = index + 1; i < snake.tail.length; i++) {
   
      if (st.x === snake.tail[i].x && st.y === snake.tail[i].y) {
        score=0;
        innerScore()
        snake.x = 300;
        snake.y = 300;
        snake.tail = [];
        snake.maxSnake = 4;
        snake.dirX = grid;
        snake.dirY = 0;
       
        food.x = random(0, 60) * grid;
        food.y = random(0, 40) * grid;
      }
    }
  })
  snake1.x += snake1.dirX;
  snake1.y += snake1.dirY;
  if(snake1.x>=canvas.width){
    snake1.x=0
  }else if(snake1.x<0){
    snake1.x= canvas.width-grid
  };
  if(snake1.y>=canvas.height){
    snake1.y=0
  }else if(snake1.y<0){
    snake1.y=canvas.height-grid
  };
  snake1.tail.unshift({ x: snake1.x, y: snake1.y });
  if (snake1.tail.length > snake1.maxSnake) {
    snake1.tail.pop();
  };

 


  context.fillStyle = 'green';

  snake1.tail.forEach(function (st1, index1) {
  
    context.fillRect(st1.x, st1.y, grid, grid);
   
    if (st1.x === food.x && st1.y === food.y) {
  
      snake1.maxSnake++;
      scored1()

      food.x = random(0, 60) * grid;
      food.y = random(0, 40) * grid;
    }
   
    for (let i = index1+ 1; i < snake1.tail.length; i++) {
   
      if (st1.x === snake1.tail[i].x && st1.y === snake1.tail[i].y) {
        score1=0;
        innerScore1()
        snake1.x = 450;
        snake1.y = 450;
        snake1.tail = [];
        snake1.maxSnake = 4;
        snake1.dirX = grid;
        snake1.dirY = 0;
       
        // food.x = random(0, 60) * grid;
        // food.y = random(0, 40) * grid;
      }
    }
  });



}


document.addEventListener("keydown", function (e) {
  if (e.keyCode === 37 && snake.dirX === 0) {
    snake.dirX = -grid;
    snake.dirY = 0;
  } else if (e.keyCode === 38 && snake.dirY === 0) {
    snake.dirX = 0;
    snake.dirY = -grid;
  } else if (e.keyCode === 39 && snake.dirX === 0) {
    snake.dirX = grid;
    snake.dirY = 0;
  } else if (e.keyCode === 40 && snake.dirY === 0) {
    snake.dirX = 0;
    snake.dirY = grid;
  } if (e.keyCode === 65 && snake1.dirX === 0) {
    snake1.dirX = -grid;
    snake1.dirY = 0;
  } else if (e.keyCode === 87&& snake1.dirY === 0) {
    snake1.dirX = 0;
    snake1.dirY = -grid;
  } else if (e.keyCode === 68 && snake1.dirX === 0) {
    snake1.dirX = grid;
    snake1.dirY = 0;
  } else if (e.keyCode === 83 && snake1.dirY === 0) {
    snake1.dirX = 0;
    snake1.dirY = grid;
  }
},
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 65 && snake1.dirX === 0) {
    snake1.dirX = -grid;
    snake1.dirY = 0;
  } else if (e.keyCode === 87&& snake1.dirY === 0) {
    snake1.dirX = 0;
    snake1.dirY = -grid;
  } else if (e.keyCode === 68 && snake1.dirX === 0) {
    snake1.dirX = grid;
    snake1.dirY = 0;
  } else if (e.keyCode === 83 && snake1.dirY === 0) {
    snake1.dirX = 0;
    snake1.dirY = grid;
  }
})

);
function recanvas() {

  requestAnimationFrame(recanvas)
if(++speed<ss){
  return
}
  speed=0;
  context.clearRect(0, 0, canvas.width, canvas.height);
  snake.x += snake.dirX;
  snake.y += snake.dirY;
  if(snake.x>=canvas.width){
    snake.x=0
  }else if(snake.x<0){
    snake.x= canvas.width-grid
  };
  if(snake.y>=canvas.height){
    snake.y=0
  }else if(snake.y<0){
    snake.y=canvas.height-grid
  };
  snake.tail.unshift({ x: snake.x, y: snake.y });
  if (snake.tail.length > snake.maxSnake) {
    snake.tail.pop();
  };

 
  context.fillStyle = 'red';
  context.fillRect(food.x, food.y, grid - 1, grid - 1);

  context.fillStyle = 'pink';

  snake.tail.forEach(function (st, index) {
  
    context.fillRect(st.x, st.y, grid, grid);
   
    if (st.x === food.x && st.y === food.y) {
  
      snake.maxSnake++;
      scored()

      food.x = random(0, 60) * grid;
      food.y = random(0, 40) * grid;
    }
   
    for (let i = index + 1; i < snake.tail.length; i++) {
   
      if (st.x === snake.tail[i].x && st.y === snake.tail[i].y) {
        score=0;
        innerScore()
        snake.x = 300;
        snake.y = 300;
        snake.tail = [];
        snake.maxSnake = 4;
        snake.dirX = grid;
        snake.dirY = 0;
       
        food.x = random(0, 60) * grid;
        food.y = random(0, 40) * grid;
      }
    }
  });



}


document.addEventListener("keydown", function (e) {
  if (e.keyCode === 37 && snake.dirX === 0) {
    snake.dirX = -grid;
    snake.dirY = 0;
  } else if (e.keyCode === 38 && snake.dirY === 0) {
    snake.dirX = 0;
    snake.dirY = -grid;
  } else if (e.keyCode === 39 && snake.dirX === 0) {
    snake.dirX = grid;
    snake.dirY = 0;
  } else if (e.keyCode === 40 && snake.dirY === 0) {
    snake.dirX = 0;
    snake.dirY = grid;
  }
});



light.addEventListener('click',function(){
  ss=6

  // requestAnimationFrame(recanvas1)
})
medium.addEventListener('click',function(){

  ss=4
})
hard.addEventListener('click',function(){

  ss=2
})
player1.addEventListener('click',function(){
  requestAnimationFrame(recanvas)
})
player2.addEventListener('click',function(){
  requestAnimationFrame(recanvas1)
})

