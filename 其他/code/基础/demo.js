const compose = (...fns) => {
    console.log(fns,"fns");
  return fns.reduceRight(
    (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
    (value) => value
  );
};

const compose1 = (f,g)=>{
    return (...args) => {
        console.log(...args);   //["hello"]    ...args  'hello'
        //  g(...args) 
        return f(g(...args))
    }
};

const example = compose1(
  (val) => {
    console.log(1);
    console.log(`1<${val}>`);
    return `1<${val}>`;
  },
  (val) => {
    console.log(2);
    return `2<${val}>`;
  },
  (val) => {
    console.log(3);
    return `3<${val}>`;
  }
);

example("hello","world");
