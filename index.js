var urlencode = require('urlencode')
var fs = require('fs')
var uglify = require('uglify-js')

module.exports = function (file, minify) {
  function wrapper() {
    var s = document.createElement('script')
    s.innerText = '!' + bookmark.toString() + '()'
    document.head.appendChild(s)
    function bookmark() {
      /*******/
    }
  }
  return bookmarkify(
    wrapper.toString().replace('/*******/', fs.readFileSync(file, 'utf8')),
    minify
  )
}

module.exports.src = function (src, minify) {
  function wrapper() {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = '/*******/'
    document.head.appendChild(s)
  }
  return bookmarkify(
    wrapper.toString().replace('/*******/', src),
    minify
  )
}

function bookmarkify(code, minify) {
  if (minify) {
    code = uglify.minify(code, { fromString: true }).code
  }
  return 'javascript:(' + urlencode(code) + ')()'
}

