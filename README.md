# 说明

rollup+ts 封装能运行在浏览器,nodejs,webpack 中的实例模块

使用策略模式打印出对应的策略名称

## build file 说明

- rollup-hello.umd.js 可以在各种环境中使用 RollupHello 对象暴露在 default 中。
  - nodejs 用法 `const RollupHello = require('rollup-hello').default;`
  - esm(webpack 或.mjs) 用法 `import RollupHello from 'rollup-hello';`
  - 浏览器用法`const Hello= window.RollupHello.default`
- rollup-hello.cjs.js (commonjs 规范)
  - nodejs 用法 `const RollupHello = require('rollup-hello')`
  - esm 不支持
  - 浏览器 不支持
- rollup-hello.browser.js
