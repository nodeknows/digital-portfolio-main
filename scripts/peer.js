let title = document.querySelector('h1')
title.setAttribute('transition-style', 'in:wipe:left')

let del = 1;

for (let sec of document.querySelectorAll('h2')) {
    sec.style.animationDelay = del*250+'ms';
    sec.setAttribute('transition-style', 'in:wipe:up')
    del++
}

for (let sec of document.querySelectorAll('.paragraphs')) {
    sec.style.animationDelay = del*250+'ms';
    sec.setAttribute('transition-style', 'in:wipe:right')
    del++
}

for (let sec of document.querySelectorAll('.imgcontainer')) {
    sec.style.animationDelay = del*250+'ms';
    sec.setAttribute('transition-style', 'in:wipe:left')
    del++
}