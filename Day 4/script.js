//create element
// let arr =['sonam','priya','divya','riya']

//  let img = document.createElement('img');
//  let div = document.querySelector('div');

//  img.setAttribute('src','https://images.unsplash.com/photo-1777847349762-eb9027e61f69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8');
// div.appendChild(img)

let btn = document.querySelector('button');

btn.addEventListener('click',()=>{
        let box = document.createElement('box');
        box.style.width = '100px';
        box.style.height = '100px';
        box.style.color = 'blue';
});