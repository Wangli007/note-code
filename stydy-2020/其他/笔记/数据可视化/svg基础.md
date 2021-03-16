### 基本绘制

**viewport**

是svg图像的可见区域



**viewBox**

是用于在画布上绘制svg图形的坐标系统

https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox

场景: 让svg可以响应式的变大缩小

````html
  <!-- 
    viewBox : min-x min-y width height
    500 / 50 = 10;  绘制出来的图形要*10
    200 / 20 = 10;  绘制出来的*10
    所有的东西都会自动的*这个缩放比,如果宽高比不一样,preserveAspectRatio属性起作用
   -->
  <svg width="500" height="200" viewBox="0 0 50 20" style="border: 1px solid rgb(0,0,0);">
    <rect x="25" y="0" width="1" height="1" style="stroke:rgb(0,0,0);fill:none"></rect>
  </svg>
````

**preserveAspectRatio**

当viewport的比例和viewBox的比例不一致时 就需要用到这个属性

**xMid** 与最小值对齐   **XMid** 对齐  **xMax** 与最大值对齐

第二个参数

- meet => svg优先采纳压缩比较小的作为最终压缩比,meet是默认参数
- slice => 保持宽高比并将所有不在viewport中的viewBox剪裁掉
- none => 不保存宽高比

参数 : (默认) "xMinYMax meet"

preserveAspectRatio : "xMinYMax meet"

````html
<!-- 定义svg组件 -->
<svg width="0" height="0" viewBox="0 0 200 200">
    <g id="arrow">
      <polyline points="30 20, 70 50, 30 80" fill="transparent" stroke="currentColor" stroke-width="3"></polyline>
    </g>
</svg>

<!-- 使用svg组件-g标签 -->
<svg width="100" heigh="100" viewBox="0 0 200 200">
  <use href="#arrow"></use>
</svg>

<!-- g对比symbol类似 但是可以有一个独立的viewBox 定义 -->
<!-- 定义svg组件 -->
<svg width="0" height="0" viewBox="0 0 200 200">
    <symbol id="arrow">
      <polyline points="30 20, 70 50, 30 80" fill="transparent" stroke="currentColor" stroke-width="3"></polyline>
    </symbol>
</svg>

<!-- 使用svg组件-symbol标签  好处是可以不用再去写viewBox了 他会用里面组件写好的viewBox-->
<svg width="100" heigh="100">  
  <use href="#arrow"></use>
</svg>

````



### svg动画

**translate 位移**

````html
<rect x="0" y="0" width="50" height="50" transform="translate(10,10)" />
````

**rotate旋转**

````html
<rect x="0" y="0" width="50" height="50" transform="translate(50,50) rotate(30)" />
````

**skewX和skewY 斜切 (围绕这x轴或者y轴斜切)**

````html
<rect x="0" y="0" width="50" height="50" transform="translate(50,50) skewX(30)" />
````

### scale 缩放

````html
 <rect x="0" y="0" width="50" height="50" transform="translate(50,50) scale(.5)" />
````

**matrix 复杂变形**

````html
<rect x="10" y="10" width="30" height="20" fill="red" transform="matrix(2 1 -1 2 50 0)" />

<!--  	react是个矩形 他有4个点 按照下面这个公式计算出其他点的坐标
		(_x 为旧的x轴位置 x为转换过后的位置 )
		[2,-1,50] => 2*_x+(-1)*_y+50 = x 
		a*_x+b*_y+c = x
		[1, 2, 0] => 1*_x+2*_y+0 = y 
		d*_x+e*_y+f = x
	
		顶点坐标
		[0,0]	=> [50,0]
		[100,0]	=> [250,100]
		[100,50]=>	[200,200]
		[0,50]	=>	[0,100]
-->		


<!--	 
		matrix 用法 将前后的_x和_x带入到公式里面去 然后解除 a b c d e f的值
		a*440+b*220+c = 220
		 d*440+e*220+f = 0
-->
````



### css3的两种动画

**过渡动画 (transition)**

**所谓过渡动画，也就是元素从一种样式逐渐改变为另一种样式的效果**

要实现过渡动画有 两个必须点(和其他可选属性)
1.指定要添加过渡效果的CSS属性(或者"all");
2.指定过渡效果的持续时间



**animation动画 帧动画 补间动画** 

用animation动画的关键：

````css
  .circle {
    animation: circle 5s linear infinite;
      //5s一组动画  匀速的播放  无线的播放
  }

  @keyframes circle {
    from {
      stroke-dasharray: 0 1069;
    }
    to {
      stroke-dasharray: 1069 0;
    }
  }
````



1.用@keyframes定义规则，并绑定到一个选择器上;
2.规定动画的名称(animation-name),规定动画的时长(animation-duration)。
 也就是这个动画中的“animation: wlk 2s;



**stroke-dasharray 控制用来描边的点划线的图案范式 **

````html
<line stroke-dasharray="5, 5" x1="10" y1="10" x2="190" y2="10" />

<!-- 

stroke-dasharray : 10;
当一个值的时候 先draw一条10px的线 再画一个10px白线  以此类推

stroke-dasharray : 10 20;
当二个值的时候 先draw一条10px的线 再画一个20px白线  以此类推
使用svg组件-g标签 -->
````

**stroke-dashoffset指定了dash模式到路径开始的距离**

可以和stroke-dasharray加上过渡  用来做进度条的动画



### 描边动画

- 获取 path 长度

```javascript
const path = document.getElementById('taobao-logo');
const pathLen = path.getTotalLength(); // 6885


```

- 添加描边样式和动画

```css
.taobao-path {
  fill: none;
  stroke: #333;
  stroke-width: 1;
  animation: taobao 5s linear infinite forwards;
}
@keyframes taobao {
  from {
    stroke-dasharray: 6885;
    stroke-dashoffset: 6885;
  }
  to {
    stroke-dasharray: 6885;
    stroke-dashoffset: 0;
  }
}
```

### SMIL

它允许我们通过 HTML 标签实现动画效果

- 路径运动动画（CSS3无法实现）

**现在更多的是这种方式去做动画**

