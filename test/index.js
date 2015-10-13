var test = require('tap').test
var bookmark = require('..')
var path = require('path')
var fixture = path.resolve.bind(
  path, __dirname, 'fixture'
)
var fs = require('fs')

test('pig', function(t) {
  t.plan(1)
  fs.readFile(fixture('pig.expected'), 'utf8', function (err, body) {
    t.equal(
      body.trim(),
      bookmark(fixture('pig.js')).trim()
    )
  })

})

