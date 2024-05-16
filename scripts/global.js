let mobile = document.querySelector('.mobile')
let hamb = document.querySelector('#hamburger')
let frame = document.querySelector('#frame')
let exit = document.querySelector('#exit')

hamb.onclick = function() {
    frame.style.display = 'flex'
    frame.setAttribute('transition-style', 'in:wipe:down')
    hamb.style.display = 'none'
}

exit.onclick = function () {
    frame.style.display = 'none';
    hamb.style.display = 'flex';
    hamb.setAttribute('transition-style', 'in:wipe:left');
}

let logo = document.querySelector('#logo')
logo.onclick = function () {
    window.open('../home.html', '_self')
}