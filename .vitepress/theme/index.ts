// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import GitalkLayout from './gitalk/gitalkLayout.vue'
import 'virtual:group-icons.css'
import './style.css'
import './custom.css'
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => h(GitalkLayout),
    })
  },
} satisfies Theme
