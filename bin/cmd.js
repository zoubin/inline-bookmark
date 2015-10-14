#!/usr/bin/env node

var bookmark = require('..')
var args = process.argv.slice(2)

var mark
if (args[0] === '-s') {
  mark = bookmark.src(args[1])
} else {
  mark = bookmark(args[0] || 'index.js')
}
process.stdout.write(mark)

