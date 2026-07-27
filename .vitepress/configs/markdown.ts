import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import type { MarkdownOptions } from 'vitepress'
import { taskLists } from 'markdown-it-task-lists-ts'

const markdownConfig: MarkdownOptions = {
  lineNumbers: true,
  image: {
    lazyLoading: true,
  },
  theme: { light: 'ayu-light', dark: 'ayu-dark' },
  // theme: 'ayu-light',
  // env → bash 映射，消除 'The language "env" is not loaded' 警告
  languageAlias: { env: 'bash' },
  config(md) {
    md.use(groupIconMdPlugin)
    md.use(taskLists, {
      enabled: true,
      label: true,
      tiptapCompatible: true,
    })
  },
}

export default markdownConfig
