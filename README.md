# inline-bookmark
Create inline bookmarks.

[![npm](https://nodei.co/npm/inline-bookmark.png?downloads=true)](https://www.npmjs.org/package/inline-bookmark)

[![status](https://travis-ci.org/zoubin/inline-bookmark.svg?branch=master)](https://travis-ci.org/zoubin/inline-bookmark)
[![version](https://img.shields.io/npm/v/inline-bookmark.svg)](https://www.npmjs.org/package/inline-bookmark)
[![dependencies](https://david-dm.org/zoubin/inline-bookmark.svg)](https://david-dm.org/zoubin/inline-bookmark)
[![devDependencies](https://david-dm.org/zoubin/inline-bookmark/dev-status.svg)](https://david-dm.org/zoubin/inline-bookmark#info=devDependencies)

## Usage

```bash
npm i -g inline-bookmark

bookmark pig.js

```

pig.js

```javascript
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

```

output:

```
javascript:(function%20wrapper()%7Bfunction%20e()%7B%5B%5D.filter.call(document.getElementById(%22app-attendant%22).shadowRoot.getElementById(%22calendar%22).shadowRoot.getElementById(%22month-view%22).shadowRoot.querySelectorAll(%22.com-f-time%22)%2Cfunction(e)%7Breturn%20e.textContent.split(%22-%22)%5B1%5D.split(%22%3A%22)%5B0%5D.trim()%3E%3D20%7C%7Ce.textContent.split(%22-%22)%5B0%5D.split(%22%3A%22)%5B0%5D.trim()%3E%3D20%7D).forEach(function(e%2Ct)%7Bvar%20n%3De.querySelector(%22.x-xx-xxx%22)%3Be.style.position%3D%22relative%22%2Cn%7C%7C(n%3Ddocument.createElement(%22span%22)%2Cn.className%3D%22x-xx-xxx%22%2Cn.style.position%3D%22absolute%22%2Cn.style.lineHeight%3D%222em%22%2Cn.style.minWidth%3D%222em%22%2Cn.style.padding%3D%220%20.5em%22%2Cn.style.top%3D%22-2em%22%2Cn.style.right%3D%220%22%2Cn.style.borderRadius%3D%221em%22%2Cn.style.backgroundColor%3D%22red%22%2Cn.style.color%3D%22white%22%2Cn.style.fontWeight%3D%22bold%22%2Cn.style.textAlign%3D%22center%22%2Ce.appendChild(n))%2Cn.innerHTML%3Dt%2B1%7D)%7Dvar%20t%3Ddocument.createElement(%22script%22)%3Bt.innerText%3D%22!%22%2Be.toString()%2B%22()%22%2Cdocument.head.appendChild(t)%7D)()

```
