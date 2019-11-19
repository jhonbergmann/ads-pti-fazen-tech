const gradient = document.querySelector('.gradient')

function onMouseMove(event) {
  gradient.style.backgroundImage =
    'radial-gradient(at ' + event.clientX + 'px ' + event.clientY + 'px, rgba(249,200,155,.9) 0, #f9c89b 70%)'
}
document.addEventListener('mousemove', onMouseMove)
