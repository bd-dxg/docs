# 优医问诊-项目起步

## 项目介绍{#intro}

> 知道：整体项目概况，并且知道课程中会实现哪些功能

- [产品原型](https://app.mockplus.cn/s/dtKxarcngm8)
- [产品设计](https://app.mockplus.cn/s/klLPNrzsU)
- [接口文档](https://apifox.com/apidoc/shared-aeb0d03e-c713-4f55-afaf-21cddf542751)
- [演示项目](https://cp.itheima.net/)

手机端演示：
<video width="400" controls src="./assets/优医问诊-项目起步-手机端演示.webm"></video>

## 技术方案与特色业务矩阵{#tech-business-matrix}

| 维度分类                 | 业务痛点 / 真实特色业务                            | 具体技术实现方案                                                                                                                                                         |
| :----------------------- | :------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **基础工程**             | 中大型项目起步与类型安全                           | **Vue 3** + **TypeScript** + **Vite** (create-vue) + **pnpm** 包管理                                                                                                     |
| **状态 & 路由**          | 全局状态、状态持久化与路由                         | **Vue Router** 前端路由 + **Pinia** 状态管理 + **pinia-plugin-persistedstate** 自动持久化                                                                                |
| **页面 & 适配**          | H5组件快速构建、视觉规范与多端适配                 | **Vant** 组件库 + **postcss-px-to-viewport** 移动端适配 + CSS 变量 主题定制                                                                                              |
| **网络 & 请求**          | 规范化接口请求、数据解耦与并行开发                 | **Axios 二次封装** + **Services API 接口分层** + **Mock** 本地数据模拟                                                                                                   |
| **特色业务 (核心)**      | 医生与文章推荐业务<br> 快速问诊业务<br> 问诊室业务 | • 智能化双向卡片推荐与多维度筛选机制<br>• 极速响应机制，利用 **自定义 Hook** 封装倒计时与轮询状态控制<br>• 基于 **Socket.io** 实时通讯，支持文字/图片/病历发送与状态同步 |
| **特色业务 (支付/地图)** | 问诊及药品订单支付<br> 实时物流追踪                | • 集成 **支付宝 H5 支付** 方案（沙箱环境测试、唤起 App/网页支付、支付状态轮询追踪）<br>• 集成 高德地图 SDK，实现物流轨迹可视化、司机定位实时标记与动态路线规划           |
| **特色业务 (接入)**      | QQ 快捷登录                                        | • 基于 **OAuth 2.0** 协议的第三方登录，支持 Token 本地存储、过期自动拦截与状态同步                                                                                       |
| **开发效率**             | 按需引入、SVG管理、模板定制与常用工具              | **unplugin-vue-components** 自动注册 + **vite-plugin-svg-icons** + **vite-plugin-html** + **@vueuse/core**                                                               |
| **运维 & 调试**          | 移动端真机调试与自动化部署                         | **Eruda** 移动端调试 + 生产环境配置优化 + **CI/CD** 持续集成自动部署                                                                                                     |

## pnpm介绍&安装{#pnpm}

> 掌握：pnpm 的安装和使用

本质上他是一个包管理工具，和npm/yarn没有区别，主要优势在于

- 包安装速度极快
- 磁盘空间利用效率高

安装：
:::code-group

```sh [通用]
npm i pnpm -g
```

```powershell [windows]
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

:::

使用：

| npm命令          | pnpm等效            | vitePlus等效      |
| ---------------- | ------------------- | ----------------- |
| npm install      | pnpm install        | vp install        |
| npm i axios      | pnpm add axios      | vp add zxios      |
| npm i webpack -D | pnpm add webpack -D | vp add webpack -D |
| npm run dev      | pnpm dev            | vp run dev        |

## 项目创建{#create-vue}

> 使用 create-vue 脚手架创建项目

create-vue参考地址：https://github.com/vuejs/create-vue

步骤：

1. 执行创建命令

   ```bash
   pnpm create vue
   ```

2. 选择项目依赖内容

   ```bash
   ✔ Project name: … patients-h5-100
   ✔ Add TypeScript? … No / `Yes`
   ✔ Add JSX Support? … `No` / Yes
   ✔ Add Vue Router for Single Page Application development? … No / `Yes`
   ✔ Add Pinia for state management? … No / `Yes`
   ✔ Add Vitest for Unit Testing? … `No` / Yes
   ✔ Add Cypress for both Unit and End-to-End testing? … `No` / Yes
   ✔ Add ESLint for code quality? … No / `Yes`
   ✔ Add Prettier for code formatting? … No / `Yes`

   Scaffolding project in /Users/zhousg/Desktop/patient-h5-100...

   Done. Now run:

     cd patient-h5-100
     pnpm install
     pnpm lint
     pnpm dev
   ```

## vscode插件安装{#ext}

> 安装：项目开发需要的一些插件

必装：

- [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) vue3语法支持
- [Oxc](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) 代码风格校验与格式化

可选:

- [Vue Split Editor](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vue-split-editor) 将一个vue文件显示为2个视图
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) 行内显示警告,提升效率

## oxlint & oxfmt 预制配置{#oxlint-oxfmt}

> 使用：oxlint（代码检查）和 oxfmt（代码格式化）的预制配置，且了解配置作用

在 vite.config.ts 中统一配置，由 vite-plus 插件驱动：

```ts
// vite.config.ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  // oxlint 代码检查配置
  lint: {
    options: { typeAware: true, typeCheck: true },
    plugins: ['typescript', 'unicorn', 'import', 'vue'],
  },
  // oxfmt 代码格式化配置
  fmt: {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    quoteProps: 'as-needed',
    bracketSpacing: true,
    arrowParens: 'avoid',
    htmlWhitespaceSensitivity: 'ignore',
    bracketSameLine: true,
    sortPackageJson: false,
    embeddedLanguageFormatting: 'auto',
  },
})
```

- **lint 配置**：开启类型感知检查（`typeAware: true`）和类型检查（`typeCheck: true`），启用 typescript、unicorn、import、vue 四个插件规则集
- **fmt 格式**：单引号，无分号，行宽 120 字符，对象/数组有空格，箭头函数无括号，HTML 后括号同行

执行：
:::code-group

```bash [pnpm]
# 代码检查
pnpm oxlint

# 代码格式化
pnpm oxfmt
```

```bash [viteplus]
# 代码检查
vp run oxlint

# 代码格式化
vp run oxfmt
```

:::

### Oxc VSCode 自动修复 {#oxc-vscode}

安装 [Oxc VSCode 扩展](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) 后，参考以下 VSCode 配置启用保存时自动修复：

```json
{
  // 保存时自动格式化
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "oxc.oxc-vscode",
  // 保存时自动修复 oxlint 问题
  "editor.codeActionsOnSave": {
    "source.fixAll.oxc": "explicit"
  },
  // oxc 插件配置
  "oxc.enable": true,
  "oxc.enable.oxlint": true,
  "oxc.enable.oxfmt": true,
  "oxc.typeAware": true,
  "oxc.fixKind": "safe_fix_or_suggestion"
}
```

| 配置项                  | 说明                                                             |
| ----------------------- | ---------------------------------------------------------------- |
| editor.formatOnSave     | 保存时触发格式化                                                 |
| editor.defaultFormatter | 指定 oxc 为默认格式化工具                                        |
| source.fixAll.oxc       | 保存时自动修复 oxlint 可修复的问题                               |
| oxc.enable              | 启用 oxc 插件                                                    |
| oxc.enable.oxlint       | 启用 oxlint 代码检查                                             |
| oxc.enable.oxfmt        | 启用 oxfmt 代码格式化                                            |
| oxc.typeAware           | 开启类型感知检查，与 vite.config.ts 的 typeAware 对应            |
| oxc.fixKind             | 修复等级：safe 只做安全修复，safe_fix_or_suggestion 同时包含建议 |

小结：

- oxlint 和 oxfmt 是基于 Rust 的高性能工具链，速度远超 ESLint + Prettier
- 详细配置参考：
  - https://oxc.rs/docs/guide/usage/linter.html
  - https://oxc.rs/docs/guide/usage/formatter.html

## 代码检查工作流

### husky 配置(不推荐配置)

- 初始化与安装

```bash
pnpm dlx husky-init && pnpm install
```

- 修改 .husky/pre-commit 文件

```bash
pnpm lint
```

### lint-staged 配置

- 安装

```bash
pnpm i lint-staged -D
```

- 配置 `package.json`

  ```json [package.json]
  {
    // ... 省略 ...
    "lint-staged": {
      "*.{js,ts,vue}": ["eslint --fix"]
    }
  }
  ```

  ```json{4} [package.json]
  {
    "scripts": {
      // ... 省略 ...
      "lint-staged": "lint-staged"
    }
  }
  ```

- 修改 .husky/pre-commit 文件

  ```bash [.husky/pre-commit]
  pnpm lint-staged
  ```

## 项目结构调整{#dir}

> 了解：每一个目录结构的作用

```bash
./src
├── assets        `静态资源，图片...`
├── components    `通用组件`
├── composable    `组合功能通用函数`
├── icons         `svg图标`
├── router        `路由`
│   └── index.ts
├── services      `接口服务API`
├── stores        `状态仓库`
├── styles        `样式`
│   └── main.scss
├── types         `TS类型`
├── utils         `工具函数`
├── views         `页面`
├── main.ts       `入口文件`
└──App.vue       `根组件`
```

项目使用sass预处理器，安装sass，即可支持scss语法：

```bash
pnpm add sass -D
```

## 路由代码解析{#router}

> 知道：默认生成的路由代码的含义

```ts
import { createRouter, createWebHistory } from 'vue-router'

// createRouter 创建路由实例，===> new VueRouter()
// history 是路由模式，hash模式，history模式
// createWebHistory() 是开启history模块   http://xxx/user
// createWebHashHistory() 是开启hash模式    http://xxx/#/user

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path
// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [],
})

export default router
```

小结：

- 如何创建实例的方式？
  - `createRouter()`

- 如何设置路由模式？
  - `createWebHistory()` 或者 `createWebHashHistory()`

- `import.meta.env.BASE_URL` 值来自哪里？
  - `vite.config.ts` 的 `base` 属性的值

- `base` 作用是什么?
  - 项目的基础路径前缀，默认是 `/`

## vant组件库{#vant}

> 实现：完整使用vant组件库

[文档](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#dao-ru-suo-you-zu-jian-bu-tui-jian)

安装：

```bash
# Vue 3 项目，安装最新版 Vant
pnpm add vant
```

```ts{5,6} [main.ts]
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
// 样式全局使用
import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
```

组件按需使用：`App.vue`

```vue [App.vue]
<script setup lang="ts">
import { Button as VanButton } from 'vant'
</script>

<template>
  <van-button>按钮</van-button>
</template>

<style scoped></style>
```

提问：为什么不全局使用？

- 全局使用是全量加载，是项目体积变大，加载慢

## 移动端适配{#vw}

> 实现：使用 vw 完成移动端适配

[文档](https://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#viewport-bu-ju)

安装：

```bash
pnpm add -D postcss-px-to-viewport
```

配置：
`postcss.config.js`

```js [postcss.config.js]
// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设备宽度375计算vw的值
      viewportWidth: 375,
    },
  },
}
```

测试：

![image-20220731214535978](./images/image-20220731214535978.avif)

- 有一个控制台警告可忽略，或者使用 `postcss-px-to-viewport-8-plugin` 代替当前插件

## css变量主题定制{#css-var}

> 实现：使用css变量定制项目主题，和修改vant主题

- 如果定义 css 变量使用 css 变量

```css
:root {
  --main: #999;
}
a {
  color: var(--main);
}
```

- 定义项目的颜色风格，覆盖vant的主题色 [官方文档](https://vant-contrib.gitee.io/vant/#/zh-CN/config-provider#ji-chu-bian-liang)

`styles/main.scss`

```scss
:root {
  // 问诊患者：色板
  --cp-primary: #16c2a3;
  --cp-plain: #eaf8f6;
  --cp-orange: #fca21c;
  --cp-text1: #121826;
  --cp-text2: #3c3e42;
  --cp-text3: #6f6f6f;
  --cp-tag: #848484;
  --cp-dark: #979797;
  --cp-tip: #c3c3c5;
  --cp-disable: #d9dbde;
  --cp-line: #ededed;
  --cp-bg: #f6f7f9;
  --cp-price: #eb5757;
  // 覆盖vant主体色
  --van-primary-color: var(--cp-primary);
}
```

`App.vue`

```vue
<script setup lang="ts"></script>

<template>
  <!-- 验证vant颜色被覆盖 -->
  <van-button type="primary">按钮</van-button>
  <a href="#">123</a>
</template>

<style scoped lang="scss">
// 使用 css 变量
a {
  color: var(--cp-primary);
}
</style>
```

## 用户状态仓库{#store}

> 完成：用户信息仓库创建，提供用户信息，修改用信息，删除用户信息的方法

- 请求工具需要携带token，访问权限控制需要token，所以用户信息仓库先完成

需求：

- 用户信息仓库创建
- 提供用户信息
- 修改用信息的方法
- 删除用信息的方法

代码：

`types/user.d.ts`

```ts
// 用户信息
export type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: string
  /** 用户名称 */
  account: string
  /** 手机号 */
  mobile: string
  /** 头像 */
  avatar: string
}
```

`stores/user.ts`

```ts
import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('cp-user', () => {
  // 用户信息
  const user = ref<User>()
  // 设置用户，登录后使用
  const setUser = (u: User) => {
    user.value = u
  }
  // 清空用户，退出后使用
  const delUser = () => {
    user.value = undefined
  }
  return { user, setUser, delUser }
})
```

小结：

- pinia存储这个数据的意义？
  - 数据共享，提供给项目中任何位置使用

- 如果存储了数据，刷新页面后数据还在吗？
  - 不在，现在仅仅是js内存中，需要进行本地存储（持久化）

## 数据持久化{#persisted}

> 掌握：使用 `pinia-plugin-persistedstate` 实现pinia仓库状态持久化，且完成测试

[参考文档](https://www.npmjs.com/package/pinia-plugin-persistedstate)

![image-20220730222310940](./images/image-20220730222310940.avif)

- 安装

```bash
pnpm i pinia-plugin-persistedstate
# or
npm i pinia-plugin-persistedstate
# or
yarn add pinia-plugin-persistedstate
```

- 使用 `main.ts`

```ts{1,4}
import persist from 'pinia-plugin-persistedstate'
const app = createApp(App)

app.use(createPinia().use(persist))
```

- 配置 `stores/user.ts`

```ts{20-22}
import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 用户信息
    const user = ref<User>()
    // 设置用户，登录后使用
    const setUser = (u: User) => {
      user.value = u
    }
    // 清空用户，退出后使用
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    persist: true
  }
)

```

- 测试 `App.vue`

```vue
<script setup lang="ts">
import { useUserStore } from './stores/user'

const store = useUserStore()
</script>

<template>
  <p>{{ store.user }}</p>
  <button @click="store.setUser({ id: '1', mobile: '1', account: '1', avatar: '1', token: '1' })">登录</button>
  <button @click="store.delUser()">退出</button>
</template>
```

## stores统一导出{#stores-export}

> 实现：仓库的导出统一从 `./stores` 代码简洁，职能单一，入口唯一

- 抽取pinia实例代码，职能单一

`stores/index`

```ts
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

// 创建pinia实例
const pinia = createPinia()
// 使用pinia插件
pinia.use(persist)
// 导出pinia实例，给main使用
export default pinia
```

`main.ts`

```ts{3,9}
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from './router'
import './styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
```

- 统一导出，代码简洁，入口唯一

`stores/index`

```ts
export * from './modules/user'
```

`App.vue`

```diff
-import { useUserStore } from './stores/user'
+import { useUserStore } from './stores'
```

小结：

- 统一导出是什么意思？
  - 一个模块下的所有资源通过index导出

## 请求工具函数{#request}

### 拦截器逻辑{#request-interceptors}

> 实现：token请求头携带，错误响应处理，401错误处理

`utils/request.ts`

模板代码：

```ts
import axios from 'axios'

const instance = axios.create({
  // TODO 1. 基础地址，超时时间
})

instance.interceptors.request.use(
  config => {
    // TODO 2. 携带token
    return config
  },
  err => Promise.reject(err),
)

instance.interceptors.response.use(
  res => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    return res
  },
  err => {
    // TODO 5. 处理401错误
    return Promise.reject(err)
  },
)

export default instance
```

代码实现：

```ts
import { useUserStore } from '@/stores'
import router from '@/router'
import axios from 'axios'
import { showToast } from 'vant'

// 1. 新axios实例，基础配置
const instance = axios.create({
  baseURL: 'https://consult-api.itheima.net/',
  timeout: 10000,
})

// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  config => {
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${store.user?.token}`
    }
    return config
  },
  err => Promise.reject(err),
)

// 3. 响应拦截器，剥离无效数据，401拦截
instance.interceptors.response.use(
  res => {
    // 后台约定，响应成功，但是code不是10000，是业务逻辑失败
    if (res.data?.code !== 10000) {
      showToast(res.data?.message || '业务失败')
      return Promise.reject(res.data)
    }
    // 业务逻辑成功，返回响应数据，作为axios成功的结果
    return res.data
  },
  err => {
    if (err.response.status === 401) {
      // 删除用户信息
      const store = useUserStore()
      store.delUser()
      // 跳转登录，带上接口失效所在页面的地址，登录完成后回跳使用
      router.push({
        path: '/login',
        query: { returnUrl: router.currentRoute.value.fullPath },
      })
    }
    return Promise.reject(err)
  },
)

export { baseURL, instance }
```

提问：

- baseURL 导出的目的是啥？
  - 其他模块可能需要使用

- 为什么使用函数 `useXxxStore` 函数，建议在拦截器使用？
  - 模块中的话，store可能还没初始化

- 业务成功是什么意思？
  - 响应成功，且后台业务操作完毕

### 工具函数封装{#request-fn}

> 实现：导出一个通用的请求工具函数，支持设置响应数据类型

- 导出一个通用的请求工具函数

```ts
import axios, { AxiosError, type Method } from 'axios'

// 4. 请求工具函数
const request = (url: string, method: Method = 'GET', submitData?: object) => {
  return instance.request({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData,
  })
}
```

- 支持不同接口设不同的响应数据的类型

加上泛型

```ts
// 这个需要替换axsio.request默认的响应成功后的结果类型
// 之前是：传 { name: string } 然后res是   res = { data: { name: string } }
// 但现在：在响应拦截器中返回了 res.data  也就是将来响应成功后的结果，和上面的类型一致吗？
// 所以要：request<数据类型，数据类型>() 这样才指定了 res.data 的类型
// 但是呢：后台返回的数据结构相同，所以可以抽取相同的类型
type Data<T> = {
  code: number
  message: string
  data: T
}
// 4. 请求工具函数
const request = <T>(url: string, method: Method = 'get', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData,
  })
}
```

### 测试请求工具{#request-test}

> 测试：封装好的请求工具函数

`App.vue`

```vue
<script setup lang="ts">
import { request } from '@/utils/request'
import type { User } from './types/user'
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'

// 测试，请求拦截器，是否携带token，响应拦截器401拦截到登录地址
const getUserInfo = async () => {
  const res = await request('/patient/myUser')
  console.log(res)
}

// 测试，响应拦截器，出现非10000的情况，和返回剥离后的数据
const store = useUserStore()
const login = async () => {
  const res = await request<User>('/login/password', 'POST', {
    mobile: '13211112222',
    // 密码 abc123456 测试：出现非10000的情况
    password: 'abc12345',
  })
  store.setUser(res.data)
}
</script>

<template>
  <van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
  <van-button type="primary" @click="login">登录</van-button>
</template>
```

测试：

- 登录的时候把密码改错，是测试？
  - 业务逻辑失败
- 登录成功，看 res 打印，是测试？
  - 剥离一层数据
- 获取用户信息成功，是测试？
  - 是否携带token
- 把 token 删除或修改，获取用户信息失败，是测试？
  - 401 token 失效跳转 login 页面
