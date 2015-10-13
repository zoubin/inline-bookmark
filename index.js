function() {
  var s = document.createElement('script')
  s.innerText = mark.toString()
  document.head.appendChild(s)
  function mark() {
    [].filter.call(
      document.getElementById('app-attendant')
        .shadowRoot.getElementById('calendar')
        .shadowRoot.getElementById('month-view')
        .shadowRoot.querySelectorAll('.com-f-time'),
      function (e) {
        return e.textContent.split('-')[1].split(':')[0].trim() >= 20 ||
          e.textContent.split('-')[0].split(':')[0].trim() >= 20
      }
    )
    .forEach(function (e, i) {
      var mark = e.querySelector('.x-xx-xxx')
      e.style.position = 'relative'
      if (!mark) {
        mark = document.createElement('span')
        mark.className = 'x-xx-xxx'
        mark.style.position = 'absolute'
        mark.style.lineHeight = '2em'
        mark.style.minWidth = '2em'
        mark.style.padding = '0 .5em'
        mark.style.top = '-2em'
        mark.style.right = '0'
        mark.style.borderRadius = '1em'
        mark.style.backgroundColor = 'red'
        mark.style.color = 'white'
        mark.style.fontWeight = 'bold'
        mark.style.textAlign = 'center'
        e.appendChild(mark)
      }
      mark.innerHTML = i + 1
    })
  }
}
