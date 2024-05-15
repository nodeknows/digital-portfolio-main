let title = document.querySelector('h1')
title.setAttribute('transition-style', 'in:wipe:left')

let hoverable = document.querySelectorAll('.hoverable');
let section = document.querySelectorAll('.hoverable > section')

function applyResize(sec) {
    console.log('opening')

    let div = sec.querySelector('div');
    let img = sec.querySelector('img')
    sec.style.height = '550px'
    img.style.filter = 'brightness(50%)'
    div.style.opacity = 1;
    div.maxHeight = '1000px'

}

function undoResize(sec) {
    console.log('closing')

    let div = sec.querySelector('div');
    let img = sec.querySelector('img'); 
    sec.style.height = '350px';
    img.style.filter = 'brightness(100%)';
    div.style.opacity = 0;
    div.maxHeight = '0px';

}

let delay = 0;

for (let sec of section) {

    delay++

    sec.style.animationDelay = delay * 100 + 'ms'
    sec.setAttribute('transition-style', 'in:custom:circle-swoop')

    sec.onmouseenter = function(){
        applyResize(sec);
    };
    sec.touchstart = function(){
        applyResize(sec);
    };

    sec.onmouseleave = function(){
        undoResize(sec);
    };
    sec.touchend = function(){
        undoResize(sec);
    };
}