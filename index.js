var urlencode = require('urlencode')
var fs = require('fs')
var uglify = require('uglify-js')

module.exports = function (file) {
  function wrapper() {
    var s = document.createElement('script')
    s.innerText = '!' + bookmark.toString() + '()'
    document.head.appendChild(s)
    function bookmark() {
      /* body */
    }
  }
  var code = uglify.minify(
    wrapper.toString().replace('/* body */', fs.readFileSync(file, 'utf8')),
    { fromString: true }
  ).code
  return 'javascript:(' + urlencode(code) + ')()'
}

