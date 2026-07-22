import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import type { MarkdownOptions } from 'vitepress'
import { taskLists } from 'markdown-it-task-lists-ts'

const markdownConfig: MarkdownOptions = {
  lineNumbers: true,
  image: {
    lazyLoading: true,
  },
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
