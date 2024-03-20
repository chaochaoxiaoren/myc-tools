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

## 参考一
https://juejin.cn/post/7308925069916258356?from=search-suggest#heading-12


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

9. 安装lint-stage
npm i -D lint-staged
配置package.json
用于检测暂存区的文件，可以和husky和eslint搭配，在提交之前检测指定文件的格式

10. 安装commitlint
npm i -D @commitlint/cli @commitlint/config-conventional @commitlint/prompt-cli
配置 .commitlintrc.js（参考现在文件）

给husky添加commit-msg钩子：.husky下新增commit-msg，内容参考现在配置，当前配置意味着会对提交的信息做校验，规则是@commitlint/config-conventional，git commit 时会验证。

11. commit配置
因为git commit 提示出错时，只会简单提示，不清楚具体该怎么写时，使用另外一个方式：package.json 添加commit命令

## 参考二
https://juejin.cn/post/7309689123563782178  


12. 写README
https://shields.io/
https://coveralls.io/

13. Github Acitons
GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。

## 参考三
https://juejin.cn/post/7310033153904476175
