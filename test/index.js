var test = require('tape')
var bookmark = require('..')
var path = require('path')
var fixture = path.resolve.bind(
  path, __dirname, 'fixture'
)
var fs = require('fs')

test('inline', function(t) {
  t.plan(1)
  fs.readFile(fixture('pig.expected'), 'utf8', function (err, body) {
    t.equal(
      bookmark(fixture('pig.js')).trim(),
      body.trim()
    )
  })

})

test('external', function(t) {
  t.plan(1)
  fs.readFile(fixture('spriteme.expected'), 'utf8', function (err, body) {
    t.equal(
      bookmark.src('http://spriteme.org/spriteme.js').trim(),
      body.trim()
    )
  })

})

