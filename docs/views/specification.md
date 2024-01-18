# 项目规范

## 代码格式化工具 (Prettier)

**1、下载 prettier 相关依赖**

```BASH
npm install prettier -D
```

**2、安装 Vscode 插件 (Prettier - Code formatter)**

[![img](/prettier%20-%20Code%20formatter.png 'Vscode 插件 (Prettier - Code formatter)')](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

**3、配置 Prettier (.prettierrc.cjs)**

```JS
// https://www.prettier.cn
module.exports = {
    // 指定最大换行长度
    printWidth: 130,
    // 缩进制表符宽度 | 空格数
    tabWidth: 4,
    // 使用制表符而不是空格缩进行 (true：制表符，false：空格)
    useTabs: true,
    // 结尾不用分号 (true：有，false：没有)
    semi: false,
    // 使用单引号 (true：单引号，false：双引号)
    singleQuote: true,
    // 在对象字面量中决定是否将属性名用引号括起来 可选值 "<as-needed|consistent|preserve>"
    quoteProps: 'as-needed',
    // 在JSX中使用单引号而不是双引号 (true：单引号，false：双引号)
    jsxSingleQuote: true,
    // 多行时尽可能打印尾随逗号 可选值"<none|es5|all>"
    trailingComma: 'none',
    // 在对象，数组括号与文字之间加空格 "{ foo: bar }" (true：有，false：没有)
    bracketSpacing: true,
    // 将 > 多行元素放在最后一行的末尾，而不是单独放在下一行 (true：放末尾，false：单独一行)
    bracketSameLine: false,
    // (x) => {} 箭头函数参数只有一个时是否要有小括号 (avoid：省略括号，always：不省略括号)
    arrowParens: 'avoid',
    // 指定要使用的解析器，不需要写文件开头的 @prettier
    requirePragma: false,
    // 可以在文件顶部插入一个特殊标记，指定该文件已使用 Prettier 格式化
    insertPragma: false,
    // 用于控制文本是否应该被换行以及如何进行换行
    proseWrap: 'preserve',
    // 在html中空格是否是敏感的 "css" - 遵守 CSS 显示属性的默认值， "strict" - 空格被认为是敏感的 ，"ignore" - 空格被认为是不敏感的
    htmlWhitespaceSensitivity: 'css',
    // 控制在 Vue 单文件组件中 <script> 和 <style> 标签内的代码缩进方式
    vueIndentScriptAndStyle: false,
    // 换行符使用 lf 结尾是 可选值 "<auto|lf|crlf|cr>"
    endOfLine: 'auto',
    // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码 (rangeStart：开始，rangeEnd：结束)
    rangeStart: 0,
    rangeEnd: Infinity
}
```

## 代码规范工具 (ESLint)

**1、下载 ESLint 相关依赖**

```BASH
npm install eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

|               依赖               |                               作用描述                               |
| :------------------------------: | :------------------------------------------------------------------: |
|              eslint              |                            ESLint 核心库                             |
|      eslint-config-prettier      |               关掉所有和 Prettier 冲突的 ESLint 的配置               |
|      eslint-plugin-prettier      |         将 Prettier 的 rules 以插件的形式加入到 ESLint 里面          |
|        eslint-plugin-vue         |                      为 Vue 使用 ESlint 的插件                       |
| @typescript-eslint/eslint-plugin |      ESLint 插件，包含了各类定义好的检测 TypeScript 代码的规范       |
|    @typescript-eslint/parser     | ESLint 的解析器，用于解析 TypeScript，从而检查和规范 TypeScript 代码 |

**2、安装 Vscode 插件 (ESLint)**

[![img](/ESLint.png 'Vscode 插件 (ESLint)')](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

**3、配置 ESLint (.eslintrc.cjs)**

```JS
// http://eslint.cn

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    // 指定如何解析语法
    parser: 'vue-eslint-parser',
    // 优先级低于 parse 的语法解析配置
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        jsxPragma: 'React',
        ecmaFeatures: {
            jsx: true
        }
    },
    // 继承某些已有的规则
    extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    /**
     * "off" 或 0    ==>  关闭规则
     * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
     * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
     */
    rules: {
        // eslint (http://eslint.cn/docs/rules)
        'no-var': 'error', // 要求使用 let 或 const 而不是 var
        'no-multiple-empty-lines': ['error', {
            max: 1
        }], // 不允许多个空行
        'prefer-const': 'off', // 使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
        'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们

        // typeScript (https://typescript-eslint.io/rules)
        '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
        '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
        '@typescript-eslint/ban-ts-comment': 'error', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
        '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
        '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间
        '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
        '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
        '@typescript-eslint/no-var-requires': 'off', // 允许使用 require() 函数导入模块
        '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
        '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)

        // vue (https://eslint.vuejs.org/rules)
        'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用，此规则仅在启用该no-unused-vars规则时有效
        'vue/v-slot-style': 'error', // 强制执行 v-slot 指令样式
        'vue/no-mutating-props': 'error', // 不允许改变组件 prop
        'vue/custom-event-name-casing': 'error', // 为自定义事件名称强制使用特定大小写
        'vue/html-closing-bracket-newline': 'error', // 在标签的右括号之前要求或禁止换行
        'vue/attribute-hyphenation': 'error', // 对模板中的自定义组件强制执行属性命名样式：my-prop="prop"
        'vue/attributes-order': 'off', // vue api使用顺序，强制执行属性顺序
        'vue/no-v-html': 'off', // 禁止使用 v-html
        'vue/require-default-prop': 'off', // 此规则要求为每个 prop 为必填时，必须提供默认值
        'vue/multi-word-component-names': 'off' // 要求组件名称始终为 “-” 链接的单词
    }
}
```

## 样式规范工具 (StyleLint)

**1、下载 StyleLint 相关依赖**

```BASH

```

**2、安装 Vscode 插件 (StyleLint)**

| 依赖 | 作用描述 |
| :--: | :------: |
|      |          |

**3、在项目根目录的 .vscode 文件夹下新建 setting.json**

```json

```

**4、配置 StyleLint (.stylelintrc.cjs)**

```JS

```
