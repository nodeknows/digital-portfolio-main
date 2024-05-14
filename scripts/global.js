let mobile = document.querySelector('.mobile')
let hamb = document.querySelector('#hamburger')
let frame = document.querySelector('#frame')
let exit = document.querySelector('#exit')

hamb.onclick = function() {
    let delay = 0;
    frame.style.display = 'flex'
    frame.setAttribute('transition-style', 'in:circle:hesitate')
    hamb.style.display = 'none'
    for (let a of frame.querySelectorAll('a')) {
        delay++
        a.style.animationDelay = (delay * 150) + 'ms' 
        a.setAttribute('transition-style', 'in:wipe:left')
    }
}

exit.onclick = function () {
    frame.style.display = 'none';
    hamb.style.display = 'flex';
    hamb.setAttribute('transition-style', 'in:wipe:left');
}

let logo = document.querySelector('#logo')
logo.onclick = function () {
    window.open('https://evans-digital-portfolio.netlify.app/home')
}