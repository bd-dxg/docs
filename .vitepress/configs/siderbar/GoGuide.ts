import { type DefaultTheme } from 'vitepress'
const GoGuide: DefaultTheme.SidebarItem = {
  base: '/GoGuide',
  text: 'Go 编程圣典',
  link: '/',
  items: [
    { text: 'Go 基础入门', link: '/' },
    { text: '第一个Go程序', link: '/FirstGo' },
    { text: '变量声明', link: '/VariableDeclare' },
    { text: 'Go数据类型', link: '/GoDataType' },
    { text: 'Go条件判断', link: '/GoConditional' },
  ],
}

export default GoGuide
