function add(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;

  let ret = ""; //结果
  let carry = 0; //是否有进位
  while (i >= 0 || j >= 0) {
    debugger;
    let x = 0;
    let y = 0;
    let sum;
    if (i >= 0) {
      x = a[i] - "0";
      i--;
    }
    if (j >= 0) {
      y = b[j] - "0";
      j--;
    }

    sum = x + y + carry;

    if (sum >= 10) {
      //如果当前加上进位的值大于10 要继续进位
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }

    ret = sum + ret;
  }

  if (carry) {
    ret = carry + ret;
  }

  return ret;
}

console.log(add("999", "999"));