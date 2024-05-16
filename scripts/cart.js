let title = document.querySelector('h1')
title.setAttribute('transition-style', 'in:wipe:left')

let del = 1;

for (let sec of document.querySelectorAll('.primary')) {
    sec.style.animationDelay = del*250+'ms';
    sec.setAttribute('transition-style', 'in:circle:center')
    del++
}