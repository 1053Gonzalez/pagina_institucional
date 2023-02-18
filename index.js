const linea = document.querySelector('#linea');
const menu = document.querySelector('nav');

menu.addEventListener('click', e => {
    if(e.target.nodeName == 'A'){
        linea.style.left = e.target.offsetLeft + 'px';
        linea.style.width = e.target.offsetWidth + 'px';
    }
})