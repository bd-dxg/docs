import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import type { MarkdownOptions } from 'vitepress'

const markdownConfig: MarkdownOptions = {
  lineNumbers: true,
  image: {
    lazyLoading: true,
  },
  config(md) {
    md.use(groupIconMdPlugin)
  },
}

export default markdownConfig
