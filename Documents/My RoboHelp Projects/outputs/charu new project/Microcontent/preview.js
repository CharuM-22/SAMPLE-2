const map = JSON.parse('{}')
var x, y
document.addEventListener('mousemove', function mousePosi(event) {
   x = event.pageX
   y = event.pageY
})

document.addEventListener('click', function mousePosi(event) {
  hidepopover()
})
function debounce(func, timeout) {
  let timer
  return (...args) => {
      const next = () => func(...args);
      if (timer) {
          clearTimeout(timer);
      }
      timer = setTimeout(next, timeout > 0 ? timeout : 100);
  };
}

function showpopover(target) {
  debounce(doShowPopover, 100)(target)
}

function doShowPopover(target) {
  let id = target.id
  let path = map[id]
  let iframe = document.getElementById('displayFrame')
  iframe.style.visibility = 'visible'
  iframe.style.top = (y + 10) + 'px'
  iframe.style.left = (x + 10) + 'px'
  iframe.style.width = '15rem'
  iframe.style.height = '20rem'
  iframe.style.backgroundColor = 'white'
  iframe.style.position = 'absolute'
  iframe.src = path
}

function hidepopover(target) {
  let iframe = document.getElementById('displayFrame')
  iframe.style.visibility = 'hidden'
  iframe.src = ''
}