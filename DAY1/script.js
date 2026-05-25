let body = document.body;


let div = document.querySelector('div')
let btn = document.querySelector('button')
div.style.height='30%';
div.style.width = '30%';
div.style.borderRadius = '50%';
div.style.backgroundColor = 'red';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center'
body.style.flexDirection = 'column';
body.style.gap = '10px';

var toggle = true;
btn.addEventListener('click',()=>{
    if(toggle){
       div.style.backgroundColor = 'yellow';
       btn.textContent = 'Off'
       console.log('ok');
        toggle =false;
    }else{
        div.style.backgroundColor = 'red';
        btn.textContent = 'ON'
        console.log('not ok');
        toggle =true;
    }
})
