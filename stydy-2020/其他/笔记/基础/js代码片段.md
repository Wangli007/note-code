### js代码片段

## 双向绑定的设置

````javascript
/*
    <div id="box" class="box" style="border: 1px solid; width: 100px; height: 100px;"></div>
    <output id="ouput" name="output"></output>
*/

const keys = Object
.values(box.attributes)
.map(({name, value}) => ({name, value}))
const cacheData = {}
const properties = keys.reduce((acc, cur) => {
    const obj = {}
    cacheData[cur.name] = box.attributes[cur.name]
    obj[cur.name] = {
        get() {
            return cacheData[cur.name]
        },
        set(data) {
            output.value = `${cur.name}: ${data}`
            cacheData[cur.name] = data
        }
    }
    return {
        ...acc,
        ...obj
    }
}, {})
Object.defineProperties(box, properties)

// 当我们修改input相应的属性时，output文字就会变成修改的内容

````

## 格式化文件大小

````javascript
const formatSize = size => {
    if (typeof +size !== 'number') {
        throw new Error('Argument(s) is illegal !')
	}
    const unitsHash = 'B,KB,MB,GB'.split(',')
    let index = 0
    while (size > 1024 && index < unitsHash.length) {
        size /= 1024
        index++
    }
    return Math.round(size * 100) / 100 + unitsHash[index]
}
formatSize('10240') // 10KB
formatSize('10240000') // 9.77MB
````

## 生成随机UID
````javascript
const genUid = () => {
  var length = 20
  var soupLength = genUid.soup_.length
  var id = []
  for (var i = 0; i < length; i++) {
    id[i] = genUid.soup_.charAt(Math.random() * soupLength)
  }
  return id.join('')
}
genUid.soup_ = '!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
genUid() // ;l`yCPc9A8IuK}?N6,%}
````

修改`url`编码格式

````javascript
//url编码
urlencode (str) {
    str = (str + '').toString();
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').  
    replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');  
}
````

瀑布流

````javascript
  function waterFall() {
    let box = document.querySelector('.news-content__left>.content__box')
    let items = box.children
    if (!items.length) {
      return
    }
    const gap = 14 //间距
    const pageWidth = box.clientWidth
    const itemWidth = items[0].offsetWidth
    let columns = parseInt(pageWidth / (itemWidth + gap))
    var arr = []

    for (var i = 0; i < items.length; i++) {
      if (i < columns) {
        items[i].style.top = 0
        items[i].style.left = (itemWidth + gap) * i + 'px'
        arr.push(items[i].offsetHeight)
      } else {
        var minHeight = arr[0]
        var index = 0
        for (var j = 0; j < arr.length; j++) {
          if (minHeight > arr[j]) {
            minHeight = arr[j]
            index = j
          }
        }
        items[i].style.top = arr[index] + gap + 'px'
        items[i].style.left = items[index].offsetLeft + 'px'
        arr[index] = arr[index] + items[i].offsetHeight + gap
      }
    }
  }
````

