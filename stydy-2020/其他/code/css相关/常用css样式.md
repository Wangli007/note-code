````css
div{		
    /* 单行溢出隐藏 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

 div{
     /* 多行溢出隐藏 */
     display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 3;
     overflow: hidden;
 }

.mask { /*弹层可以这么写mask*/
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
````





### flex和grid

[布局](http://www.ruanyifeng.com/blog/2020/08/five-css-layouts-in-one-line.html)

```css
flex: <flex-grow> <flex-shrink> <flex-basis>;
flex-basis：项目的初始宽度。
flex-grow：指定如果有多余宽度，项目是否可以扩大。
flex-shrink：指定如果宽度不足，项目是否可以缩小。

flex: 0 1 210px; 
项目的初始宽度是210px，且不可以扩大，但是当容器宽度不足210px时，项目可以缩小。

二栏布局
.container{
    display: grid;
    grid-template-columns: minmax(150px, 25%) 1fr;
}
页面分成两列，第一列宽度最小150px  也就是25%  第二列占满剩余高度



三明治布局
.container {
    display: grid;
    grid-template-rows: auto 1fr auto;
}


圣杯布局 就是上下 main 里面再分出左右中
.container {
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
}
```













































### 工作中常用

````css
{
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
    }
    <!-- 取消滚动条的样式 -->
}
````

### 不怎么常用的

````javascript
{
    (function() {
    var elements = document.body.getElementsByTagName('*');
    var items = [];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].innerHTML.indexOf('html * { outline: 1px solid red }') != -1) {
        items.push(elements[i]);
        }
    }
    if (items.length > 0) {
        for (var i = 0; i < items.length; i++) {
            items[i].innerHTML = '';
        }
    } else {
        document.body.innerHTML +=
        '<style>html * { outline: 1px solid red }</style>';
    }
    })();
    <!-- 可以把所有的现况都列出来  我几乎没用过.. -->
}
````

### 一些`css`的库

http://tinyjs.net/examples/  小游戏动画， 因小游戏而生

https://animate.style/  纯css3的动画