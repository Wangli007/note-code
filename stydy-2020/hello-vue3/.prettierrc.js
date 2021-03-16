// Prettier configuration
// https://prettier.io/docs/en/configuration.html
module.exports = {
  printWidth: 80, //指定一行多长，超过的会换行
  singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  // 行尾逗号,默认none,可选 none|es5|all
  // es5 包括es5中的数组、对象
  // all 包括函数对象等所有可选
  trailingComma: "none",
  semi: true, //是否需要分号
  eslintIntegration: true,
  tabWidth: 2,
  useTabs: true
};
