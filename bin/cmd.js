#!/usr/bin/env node

var Command = require('commander').Command

var program = new Command('bookmark')

program
  .version(require('../package.json').version)
  .usage('[options]')
  .option('-f, --file <file>', 'Wrap the script.')
  .option('-x, --external <src>', 'Request an external script.')
  .option('-M, --no-minify', 'Suppress uglify')
  .parse(process.argv)

var bookmark = require('..')

if (program.external) {
  process.stdout.write(bookmark.src(program.external, program.minify))
} else if (program.file) {
  process.stdout.write(bookmark(program.file, program.minify))
} else {
  console.error('Run `bookmark -h` to see the help text.')
  process.exit(-1)
}

