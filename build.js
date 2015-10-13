var urlencode = require('urlencode')
var fs = require('fs')

fs.writeFile(
  'bookmark',
  'javascript:(' + urlencode(fs.readFileSync('index.js', 'utf8')) + ')()'
)

