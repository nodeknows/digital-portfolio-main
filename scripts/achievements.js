let title = document.querySelector('h1')
let write = document.querySelector('#write')
let web = document.querySelector('#web')

write.style.animationDelay = '250ms'
web.style.animationDelay = '500ms'

title.setAttribute('transition-style', 'in:wipe:left')
write.setAttribute('transition-style', 'in:polygon:opposing-corners')
web.setAttribute('transition-style', 'in:polygon:opposing-corners')