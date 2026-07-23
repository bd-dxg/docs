---
title: Day 01 — 环境搭建与 Node.js 初印象
description: 安装 Node.js 环境，理解 Node.js 运行时与全栈开发基础
---

# Day 01 — 环境搭建与 Node.js 初印象 {#day-01}

> 项目作者: [前端小卒](https://space.bilibili.com/17875980) 项目链接: https://github.com/crisweb1994/60-days-nodejs

## 📋 今日目标 {#goals}

- 安装 Node.js 开发环境
- 理解 Node.js 是什么、为什么它适合全栈开发
- 运行第一个 Node.js 程序
- 熟悉 REPL 和命令行工具

## 📖 核心知识点 {#core-knowledge}

### 1. Node.js 是什么？ {#what-is-nodejs}

Node.js 是一个基于 Chrome V8 引擎的 **JavaScript 运行时**。它让 JavaScript 脱离浏览器，可以运行在服务端。

作为前端工程师，你已经熟悉了浏览器中的 JavaScript。Node.js 和浏览器中的 JS 有以下关键区别：

| 维度             | 浏览器 JS                  | Node.js                           |
| ---------------- | -------------------------- | --------------------------------- |
| 运行环境         | 浏览器                     | 操作系统                          |
| 标准全局对象访问 | globalThis                 | globalThis                        |
| 历史环境别名     | window                     | global                            |
| DOM/BOM          | ✅ 有                      | ❌ 没有                           |
| 文件系统         | ❌ 受限                    | ✅ 完整访问                       |
| 网络请求         | `fetch` / `XMLHttpRequest` | `http` / `https` / `fetch` (v18+) |
| 模块系统         | ESModule                   | CommonJS + ESModule               |
| 用途             | UI 交互、页面渲染          | API 服务、工具链、脚本            |

### 2. 为什么选择 Node.js 做全栈？ {#why-nodejs}

对于前端工程师来说，Node.js 是转全栈的**最短路径**：

- **语言复用**：不需要学一门新语言，JS/TS 通吃前后端
- **生态丰富**：npm 是世界上最大的包管理生态
- **市场需求**：Next.js 全栈框架的流行让 Node.js 全栈工程师需求暴增
- **思维连贯**：前端对异步编程、事件驱动的理解可以无缝迁移

### 3. 安装 Node.js <Badge type="tip" text="改动" /> {#install-nodejs}

::: details 原版
**推荐使用 nvm（Node Version Manager）管理 Node.js 版本：**

```bash
# 安装 nvm（macOS / Linux）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 重启终端后，安装 Node.js v20 LTS
nvm install 20
nvm use 20
nvm alias default 20

# 验证安装
node --version    # 应显示 v20.x.x
npm --version     # 应显示 10.x.x
```

**Windows 用户推荐使用 [nvm-windows](https://github.com/coreybutler/nvm-windows)。**

**安装 pnpm（推荐的包管理器）：**

```bash
# 使用 corepack 启用 pnpm
corepack enable
corepack prepare pnpm@latest --activate

# 验证
pnpm --version
```

:::

#### 3.1 推荐安装方式 [pnpm](https://pnpm.io/) {#install-pnpm}

管理 node 版本, 当前使用最新版 `pnpm 11` 版本 作为介绍

:::code-group

```powershell [Windows]
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

```shell [MacOS/Linux]
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

:::
安装完成pnpm后, 通过[pnpm来管理/安装/卸载 nodeJS](https://pnpm.io/cli/runtime):

```shell
# 安装长期支持版本
pnpm runtime set node lts -g
# 安装最新版本
pnpm runtime set node latest -g
# 安装指定版本
pnpm runtime set node 22 -g
```

> [!tip] 提示
> 自 `v11.0.0` 起，安装 Node.js 运行时（通过 `pnpm runtime set node …` 或 `node@runtime:<version>`）不会从 Node.js 归档中提取捆绑的 `npm`、`npx` 和 `corepack`。 这样一来，`pnpm` 在运行时安装期间需要哈希处理、写入 CAS 和链接的文件数量大致减少了一半。 如果仍然需要 `npm`，请使用 `pnpm add -g npm` 单独安装它。

#### 3.2 使用[viteplus](https://viteplus.dev/guide/)管理 {#install-viteplus}

vitePlus又被叫做 vite+, 是尤雨溪推荐的前端工程统一化工具,是对`pnpm`、`yarn`和`npm`进一步的封装

涵盖包管理器、开发服务器、LINTER、格式化器、测试运行器、捆绑器、任务执行器以及越来越多的配置文件。

我个人正在使用这一套全家桶, 喜欢的可以试试:

:::code-group

```powershell [Windows]
irm https://vite.plus/ps1 | iex
```

```bash [MacOS/Linux]
curl -fsSL https://vite.plus | bash
```

:::
安装完成的同时,会自动安装一个长期支持版的node版本,如果想用指定的node版本,也可以通过命令管理node版本

```bash
vp env use 20
```

### 4. 配置开发环境 <Badge type="tip" text="改动" /> {#setup-ide}

::: details 原版

**VS Code 推荐插件：**

- **ESLint** — 代码规范检查
- **Prettier** — 代码格式化
- **Thunder Client** — API 测试（类似 Postman）
- **Error Lens** — 行内显示错误信息
  :::

**VS Code 推荐插件：**

- **[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)** — 行内显示错误信息
- **[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)** — API 测试（类似 Postman）
- **[Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode)** - 新一代lint和fmt工具,可配合vitePlus使用,也可以单独使用

### 5. Node.js REPL {#nodejs-repl}

REPL（Read-Eval-Print-Loop）是 Node.js 的交互式命令行：

```bash
# 进入 REPL
node

# 在 REPL 中试试：
> 1 + 1
2
> console.log('Hello Node.js!')
Hello Node.js!
> process.version
'v20.x.x'
> process.platform
'darwin'  // macOS
> .exit
```

**REPL 常用命令：**

- `.help` — 显示帮助
- `.clear` — 清除上下文
- `.exit` — 退出（或按 Ctrl+C 两次）
- `Tab` — 自动补全

### 6. 第一个 Node.js 程序 {#first-program}

创建文件 `hello.js`：

```javascript
// hello.js
console.log('🚀 Hello, Node.js!')
console.log('Node.js version:', process.version)
console.log('Platform:', process.platform)
console.log('Architecture:', process.arch)
console.log('PID:', process.pid)
console.log('Current directory:', process.cwd())
console.log('Memory usage:', process.memoryUsage())
```

运行：

```bash
node hello.js
```

### 7. process 对象 {#process-object}

`process` 是 Node.js 最重要的全局对象之一，没有浏览器等价物：

```javascript
// process-demo.js

// 1. 环境变量
console.log('HOME:', process.env.HOME)
console.log('PATH:', process.env.PATH)

// 2. 命令行参数
// 运行: node process-demo.js --name=Node --version=20
console.log('argv:', process.argv)
// argv[0] = node 路径
// argv[1] = 脚本路径（REPL 中无此项）
// argv[2+] = 自定义参数

// 3. 标准 I/O
process.stdout.write('请输入你的名字: ')
process.stdin.once('data', data => {
  console.log(`你好, ${data.toString().trim()}!`)
  process.exit(0) // 退出程序，0 表示正常退出
})

// 4. 退出事件
process.on('exit', code => {
  console.log(`进程即将退出，退出码: ${code}`)
})
```

### 8. 全局对象与模块作用域 {#module-scope}

Node.js 中每个文件都是一个独立的**模块**，变量默认不会污染全局：

```javascript
// scope-demo.js

// 这些是 Node.js 中每个模块都有的特殊变量
console.log('__filename:', __filename) // 当前文件的绝对路径
console.log('__dirname:', __dirname) // 当前文件所在目录
console.log('module:', module) // 当前模块信息
console.log('exports:', exports) // 模块导出对象

// 注意：在 ESModule 模式下，__filename 和 __dirname 不可用
// 需要使用 import.meta.url 替代
```

## 💻 实践练习 {#practice}

### 练习 1：系统信息收集器 <Badge type="tip" text="改动" /> {#exercise-1}

编写一个 `system-info.js` 脚本，收集并美化输出以下系统信息：

- Node.js 版本
- 操作系统类型和版本
- CPU 架构
- 当前用户主目录
- 当前工作目录
- 内存使用情况（格式化为 MB）
- 进程运行时间

**提示**：使用 `process` 对象和 `os` 模块（`const os = require('os')` 或 `import os from 'os'`）。

:::details 答案
<<< ./solutions/01-system-info.js
:::

### 练习 2：命令行计算器 <Badge type="tip" text="改动" /> {#exercise-2}

编写一个 `calc.js`，支持通过命令行参数进行计算：

```bash
node calc.js add 3 5      # 输出: 8
node calc.js subtract 10 3 # 输出: 7
node calc.js multiply 4 6  # 输出: 24
node calc.js divide 15 3   # 输出: 5
```

**要求**：

- 使用 `process.argv` 解析参数
- 处理除以零的错误
- 处理无效操作符的错误
- 使用不同的退出码来表示成功(0)和失败(1)

:::details 答案
<<< ./solutions/02-calc.js
:::

### 练习 3：交互式问候程序 <Badge type="tip" text="改动" /> {#exercise-3}

编写一个 `greeter.js`，使用 `process.stdin` 和 `process.stdout` 实现：

1. 提示用户输入姓名
2. 提示用户输入年龄
3. 输出个性化问候信息

:::details 答案
<<< ./solutions/03-greeter.js
:::

## ✅ 今日产出 {#summary}

- [ ] 安装好 Node.js 、pnpm、VS Code 插件
- [ ] 完成 `hello.js` 和 `process-demo.js`
- [ ] 完成练习 1（系统信息收集器）
- [ ] 完成练习 2（命令行计算器）
- [ ] 完成练习 3（交互式问候程序）

## 📚 延伸阅读 {#further-reading}

- [Node.js 官方文档 - Getting Started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Node.js 官方文档 - process](https://nodejs.org/docs/latest-v20.x/api/process.html)
- [nvm GitHub 仓库](https://github.com/nvm-sh/nvm)
