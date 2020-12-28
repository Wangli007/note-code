
var arr = [1, 2, [3, 4]];

/**
 * reduce API 没提供initialValue 循环次数 length - 1  desc 为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素
 * arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * {accumulator} 缩写acc  desc 累计器:上一次调用回调时返回的累积值  从下标0开始 => length-1(到倒数第二个下标) 结束
 * {currentValue} 缩写cur desc 当前的值   从下标为1开始 => 到最后一个下标最后结束
 * {CurrentIndex} 缩写idx 当前索引
 * {SourceArray}  缩写src  源数组{这里example是[1, 2, [3, 4]] 也就是arr}
 * initialValue 如果没有提供初始值，acc将使用数组中的第一个元素  cur 使用数组第二个值
 * 使用场景  计算总和  简单数组去重  统计每个值，在数组中出现的次数  > 归类 统计  相对于其他循环 api 他有更多特性 比如累加 初始值 等
 */
var result = arr.reduce((acc,val)=>{
  return acc.concat(val);
},[])   // [1,2,3,4]



/**
 * call,supply,bind  第一个参数 this指向默认window   第二个参数有区别
 * call   arg1,arg2,...
 * apply [arg1,agr2,arg3] or 类数组
 * bind   最常用的场景就是 react中的合成事件 需要用bind将this绑定到合成事件中去  return 返回修改后this指向的函数
 */

 //example   求一个数组中的最大值 最小值等  array本身没有方法  但是Math里面有这个方法
 var arr1 = [1,2,20,10];
 Math.max.call(null,...[1,2,20,10])//20
 Math.max.apply(null,[1,2,20,10]) //20
 Math.max.bind(null,...[1,2,20,10])()  //20

 //防抖