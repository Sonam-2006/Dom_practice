const board = document.querySelector('board')
const blockHeight = 50;
const blockWidth = 50;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = []
const snake =[{
    x:1,y:3
},{
    x:1,y:4
},{
    x:1,y:5
}]


for(let row =0; row <rows; row++){
    // for(let column =0; column< columns;column++){

    // }
}

function render(){
    snake.forEach(segment=>{})
}