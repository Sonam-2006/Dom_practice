let body = document.body;

let div = document.querySelector('div')
let btn = document.querySelector('button')

body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center'
body.style.flexDirection = 'column';
body.style.gap = '10px';
body.style.backgroundColor = 'white'
body.style.color = 'black'
body.style.transition = '0.5s'
body.style.fontSize = '40px';

btn.style.padding = '10px 20px';
btn.style.fontSize = '20px'
btn.style.borderRadius = '10px';
// btn.style.border = 'none';

var toggle = true;
btn.addEventListener('click', () => {
    if (toggle) {
        body.style.backgroundColor = 'black';
        div.style.color = 'white';
        btn.style.backgroundColor = 'black'
        btn.style.color = 'white'
        toggle = false;
    } else {
        body.style.backgroundColor = 'white';
        div.style.color = 'black';
         btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
        toggle = true;
    }
})