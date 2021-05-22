const btnDark = document.querySelector('.btn');
const body = document.querySelector('body');

load();

btnDark.addEventListener('click', e =>{
    body.classList.toggle('ModoOscuro');
    store(body.classList.contains('ModoOscuro'));
});

function load(){
    const dark = localStorage.getItem('ModoOscuro');
    
    if(!dark){
        store('false');
    }else if(dark == 'true'){
        body.classList.add('ModoOscuro');
    }
}

function store(value){
    localStorage.setItem('ModoOscuro', value);
}