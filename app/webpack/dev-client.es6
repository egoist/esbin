import 'eventsource-polyfill'
import hotClient from 'webpack-hot-middleware/client?reload=true'

document.addEventListener('click', () => {
  window.parent.postMessage({
    type: 'focus-output'
  }, '*')
})

hotClient.subscribe(event => {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
