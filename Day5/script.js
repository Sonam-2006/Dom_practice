let box = document.querySelector('.box');

let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let pink = document.querySelector('#pink');
let blue = document.querySelector('#blue');

red.addEventListener('click', () => {
    let div = document.createElement('div');

    div.style.height = '100px';
    div.style.width = '80px';
    div.style.backgroundColor = "red";

    box.appendChild(div);
});

yellow.addEventListener('click',()=>{
    let div = document.createElement('div');
     div.style.height='100px';
    div.style.width='80px';
    div.style.backgroundColor ="yellow";
    box.appendChild(div);
});

pink.addEventListener('click',()=>{
    let div = document.createElement('div');
   div.style.height='100px';
    div.style.width='80px';
    div.style.backgroundColor ="pink";
    box.appendChild(div);
});

blue.addEventListener('click',()=>{
    let div = document.createElement('div');
    div.style.height='100px';
    div.style.width='80px';
    div.style.backgroundColor ="blue";
    box.appendChild(div);
});