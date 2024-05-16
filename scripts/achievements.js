let title = document.querySelector('h1')
let write = document.querySelector('#write')
let web = document.querySelector('#web')

write.style.animationDelay = '500ms'
web.style.animationDelay = '1000ms'

title.setAttribute('transition-style', 'in:wipe:left')
write.setAttribute('transition-style', 'in:wipe:bottom-right')
web.setAttribute('transition-style', 'in:wipe:bottom-right')