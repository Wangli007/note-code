### Flex

#### 容器的属性

| 值             | 描述                                                         | 默认值       |
| :------------- | ------------------------------------------------------------ | ------------ |
| flex-wrap      | flex容器是单行或者多行，同时横轴的方向决定了新行堆叠的方向。 | nowrap       |
| flex-direction | flex-direction属性决定主轴的方向                             | row          |
| align-items    | 项目在交叉轴上如何对齐。单行对齐用这个                       | stretch      |
| align-content  | 多行对齐用这个 如果项目只有一根轴线，该属性不起作用。        | stretch      |
|                |                                                              |              |

> 备注 stretch  如果项目未设置高度或设为auto，将占满整个容器的高度。
>
> 

#### 项目的属性

| 值 | 描述 | 默认值 |
| :--: | ---- | ---- |
| flex-grow      | 如果项目有多余的空间,是否进行扩展                            | 0            |
| flex-shrink    | 元素宽度超过项目的宽度,是否进行收缩                          | 1            |
| flex-basis     | 一个长度单位或者一个百分比，规定灵活项目的初始长度。         | auto         |
| flex           | 简写属性 ; flex: flex-grow  flex-shrink  flex-basis          | 0  1  auto |
| order | 项目的排列顺序。数值越小，排列越靠前， | 0 |
| align-self | 单个项目有与其他项目不一样的对齐方式  align-items属性 | auto |
|      |      |      |

