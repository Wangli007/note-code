/**
 * 元素隐式具有 “any” 类型
 * 解决方案
 * tsconfig => compilerOptions配置 
 * "noImplicitAny": false,  如果编译器无法根据变量的使用来判断类型时，将用 any 类型代替。为 true 时，进行强类型检查，会报错,
 * "suppressImplicitAnyIndexErrors":true
 */ 