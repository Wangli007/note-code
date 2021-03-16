
//  1、1、2、3、5、8、13、21、34、……
function computed(n){
    if(n < 3) {
        return 1
    };
    return computed(n-1) + computed(n - 2)
}
var nums = computed(3);
console.log(nums);

// 时间复杂度：O(2^N)，空间复杂度：O(N)


var arr = [];
function computed1(n){
    if(n < 3) {
        return 1
    };
    if(arr[n] !== undefined){
        return arr[n];
    }else{
        return arr[n] = computed1(n-1) + computed1(n - 2);
    }
}

console.log(computed1(3));

// 时间复杂度：0(N)， 空间复杂度：0(N)


function Fib(n) {
    let first = 1;
    let second = 1;
    let ret = 0;
    for (var i = 3; i <= n; i++) {
        ret = first + second;
        first = second;
        second = ret;
    }
    return second;
}

console.log(Fib(100));