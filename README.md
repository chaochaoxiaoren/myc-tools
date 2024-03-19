# 工具包

## 过程
1. 安装typescript
```
npm i typescript -D // 安装 TypeScript 依赖。

npx --package typescript tsc --init  // 生成一个默认的配置文件。
```

2. 安装Rollup
npm i rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs @rollup/plugin-terser rollup-plugin-postcss tslib -D

3. 安装Jest
npm i jest jest-environment-jsdom ts-jest @types/jest ts-node -D
配置jest（根据参考选择）
npx jest --init

4. 安装babel
npm i babel-jest @babel/core @babel/preset-env @babel/preset-typescript -D
配置babel.config.js(参考现在文件)

5. 安装eslint
npm init @eslint/config

6. 安装prettier
npm i -D prettier

7. 配置Editorconfig，参考现在文件

8. 安装husky
npm i husky -D
添加命令并执行husky init

配置    
.husky 下的文件pre-commit 是git提交之前的钩子，里面可以放执行的脚本(参考现在文件)   
现在的配置意思是：代码没有通过eslint检查不允许提交代码



## 参考
https://juejin.cn/post/7308925069916258356?from=search-suggest#heading-12  

https://juejin.cn/post/7309689123563782178  
