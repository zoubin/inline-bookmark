#!/usr/bin/env node

var bookmark = require('..')
var file = process.argv[2] || 'index.js'
process.stdout.write(bookmark(file))

