let title = document.querySelector('h1')
title.setAttribute('transition-style', 'in:wipe:left')

let windows = document.querySelectorAll('.window')
let del = 1;
for (let win of windows) {
    win.style.animationDelay = del*500+'ms'
    win.setAttribute('transition-style', 'in:wipe:bottom-right')
    del++
}