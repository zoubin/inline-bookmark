# inline-bookmark
Create inline bookmarks.

[![version](https://img.shields.io/npm/v/inline-bookmark.svg)](https://www.npmjs.org/package/inline-bookmark)
[![status](https://travis-ci.org/zoubin/inline-bookmark.svg?branch=master)](https://travis-ci.org/zoubin/inline-bookmark)
[![dependencies](https://david-dm.org/zoubin/inline-bookmark.svg)](https://david-dm.org/zoubin/inline-bookmark)
[![devDependencies](https://david-dm.org/zoubin/inline-bookmark/dev-status.svg)](https://david-dm.org/zoubin/inline-bookmark#info=devDependencies)

## Usage

```bash
npm i -g inline-bookmark

bookmark -h

```

### inline

```bash
bookmark -f example/alert.js

```

alert.js

```javascript
alert('Hi, there!')

```

output:

```
javascript:(function%20wrapper()%7Bfunction%20e()%7Balert(%22Hi%2C%20there!%22)%7Dvar%20t%3Ddocument.createElement(%22script%22)%3Bt.innerText%3D%22!%22%2Be.toString()%2B%22()%22%2Cdocument.head.appendChild(t)%7D)()

```

### external

```bash
bookmark -x http://spriteme.org/spriteme.js

```

output:

```
javascript:(function%20wrapper()%7Bvar%20e%3Ddocument.createElement(%22script%22)%3Be.type%3D%22text%2Fjavascript%22%2Ce.src%3D%22http%3A%2F%2Fspriteme.org%2Fspriteme.js%22%2Cdocument.head.appendChild(e)%7D)()

```


