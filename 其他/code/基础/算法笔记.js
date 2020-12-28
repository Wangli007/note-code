

// var n = 1000;
// console.log("Hey - I'm busy looking at:"+n)
// 他的时间复杂度就是O(1)  常数


for(var n = 1;i<=n;i++){
    console.log(n)
}
//O(n)  这是线性的时间复杂度    两层嵌套 O(n^2)     三层嵌套 O(n^3)

//例子  example
//如果算求和的话  1,2,3...n

//暴力求解
var sum = 0;
var n = 100
for (var i = 1;i < n;i++){  // O(n)
    sum += i;
}

//运用公式求  求和公式
sum = n * (n+1) / 2;  //降低了时间复杂度 O(1)


//斐波那契数列  0 1 1 2 3 5 8 13 21 34 ... n
//f(n) = f(n - 1) + f(n - 2)

//递归解决  example

function computed(n){
    if(n<2) return n;
    return computed(n-1) + computed(n+2)
}

console.log(computed(2));