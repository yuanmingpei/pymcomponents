# pymcomponents

组件库
|--.husky
    |--pre-commit
    |--commit-msg
|--lib    //打包编译之后的文件，ES6标准的JavaScript编译为ES5
    |--index.js    
|--node_modules
|--src    //开发目录
    |--component
        |--about
            |--index.js
            |--index.scss
        |--hello
            |--index.js
            |--index.scss
        |--具体的业务逻辑组件
|--.babelrc    //babel的配置文件
|--.eslintignore
|--.eslintrc.json
|--.gitignore
|--.npmrc    //npm镜像配置文件
|--.prettierignore
|--.prettierrc
|--commitlint.config.js
|--index.js    //统一导出的出口文件
|--package.json    //项目管理文件，项目初始化时自动生成
|--README.MD    //项目说明文件，可在新建仓库时生成该文件，根据项目内容自行编辑
|--rollup.config.js