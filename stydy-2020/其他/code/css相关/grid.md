### Grid

> 阮一峰
> 网格布局（Grid）是最强大的 CSS 布局方案
> Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。Grid 布局远比 Flex 布局强大。
>
> http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html

Grid 布局只对项目生效。(也就是只对第一个子元素生效,对孙子元素是没有效果的)
注意，设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。

>我的理解
>就是有点像表格  
>grid-template-rows用来定义多少条横线
>grid-template-columns 定义多少钱纵线 
>然后横线和纵线相交 产生的单元格 然后用属性去控制单元格的样式

#### 容器属性

| 值                    | 描述                              | 默认值      |
| --------------------- | --------------------------------- | ----------- |
| grid-template-columns | 定义每一列的列宽                  | auto        |
| grid-template-rows    | 定义每一行的行高                  | auto        |
| grid                  | 50px auto 50px / 200px auto       |             |
| grid-row-gap          | 设置行与行的间隔（行间距）        |             |
| grid-column-gap       | 设置列与列的间隔（列间距）        |             |
| grid-gap              | <grid-row-gap> <grid-column-gap>  |             |
| grid-auto-flow        | 子元素的排列顺序  column 先列后行 | row先行后列 |
| justify-items         | 单元格的水平位置                  |             |
| align-items           | 单元格的垂直位置                  |             |
| place-items           | <align-items> <justify-items>;    |             |
| justify-content       | 内容区域在容器里面的水平位置      |             |
| align-content         | 内容区域的垂直位置（上中下）      |             |
| place-content         | <align-content> <justify-content> |             |
| grid-auto-columns     | 决定新增网格的列宽                |             |
| grid-auto-rows        | 决定新增网格行高。                |             |
|                       |                                   |             |
|                       |                                   |             |

> 补充
>
> 浏览器最新标准
>
> grid-column-gap 等同于 column-gap
>
> grid-row-ga 等同于 row-gap
>
> grid-gap 写成  gap
>
> grid-auto-flow : 如果排列当中有空档的位置 元素可以放置进去的 可以加入 dense 去填充
>
> grid-auto-flow: column dense;

## justify-content属性值

| 值            | 描述                                                         |
| :------------ | :----------------------------------------------------------- |
| space-around  | 每个项目两侧的间隔相等。所以，项目之间的间隔比项目与容器边框的间隔大一倍。{很常用,就相当于border的间距} |
| space-between | 相对于上一个,项目与容器边框之间没有间隔。  项目与项目的间隔相等 |
| space-evenly  | 项目与项目的间隔相等，项目与容器边框之间也是同样长度的间隔。 |
| stretch       | 拉伸整个整个网格容器                                         |

```js
//example  css
函数 repeat()
grid-template-columns: repeat(3, 33.33%);  //设置3个33.33%
grid-template-columns: repeat(2, 100px 20px 80px); //设置2个 100px 20px 80px
grid-template-columns: repeat(auto-fill, 100px);
//上面代码表示每列的宽度100px  知道容器不能放置更多的列


//fr 关键字
grid-template-columns: 150px 1fr 2fr;
// 表示第一列的宽度为150px 第二列的宽度是第三列的一半
grid-template-columns: 1fr 1fr minmax(100px, 1fr);
// minmax(100px, 1fr)表示列宽不小于100px，不大于1fr。


//网格线的名称 
grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
//方括号，指定每一根网格线的名字，方便以后的引用。  网格布局允许同一根线有多个名字
// 3 * 3 的单元格 是有4条水平线 和 4条垂直线的


//网格的区域 grid-template-areas
grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
如果某些区域不需要利用，则使用"点"（.）表示。
grid-template-areas: 'a . c'
                     'd . f'
                     'g . i';

/*
注意，区域的命名会影响到网格线。每个区域的起始网格线，会自动命名为区域名-start，终止网格线自动命名为区域名-end。

比如，区域名为header，则起始位置的水平网格线和垂直网格线叫做header-start，终止位置的水平网格线和垂直网格线叫做header-end。
*/

```



实例

````javascript
//二栏式布局
.wrapper {
  display: grid;
  grid-template-columns: 70% 30%;
}

//十二栏式布局
grid-template-columns: repeat(12, 1fr);


````



#### 项目属性

| 属性                              | 描述                                                         | 默认值 |
| ----------------------------- | ------------------------------------------------------------ | ------ |
| grid-column-start | 左边框所在的垂直网格线 , 除了指定为第几个网格线，还可以指定为网格线的名字。span 2 表示跨越2个网格 |        |
| grid-column-end   | 右边框所在的垂直网格线                                       |        |
| grid-row-start    | 上边框所在的水平网格线                                       |        |
| grid-row-end      | 下边框所在的水平网格线                                       |        |
| grid-column       | <start-line> / <end-line>;                                   |        |
| grid-row          | <start-line> / <end-line>;                                   |        |
| grid-area         | <row-start> / <column-start> / <row-end> / <column-end>;     |        |
| justify-self      | 设置单元格内容的水平位置                                     |        |
| align-self        | 设置单元格内容的垂直位置                                     |        |
| place-self        | <align-self> <justify-self>                                  |        |

> 补充 用法
>
> ```css
> grid-column-start: 1;
> grid-column-end: 3;
> grid-column: 1 / 3;
> grid-column: 1 / span 2;
> 
> //grid-area 例子
> //3*3的单元格 这里把当前项目移动到3*3的最后一个单元格
> grid-area: 3/3;
> 
> ```