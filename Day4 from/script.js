let inp = document.querySelector('input');
let btn = document.querySelector('button');
console.log('btn');


btn.addEventListener('click',()=>{
    if(inp.getAttribute('type')=='password'){
        inp.setAttribute('type','text');
        btn.innerHTML= '<i class="ri-eye-line"></i>';
    }else{
        inp.setAttribute('type',"password");
        btn.innerHTML = '<i class="ri-eye-off-line"></i>';
    }
})
