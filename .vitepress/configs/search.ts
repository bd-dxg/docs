import { type DefaultTheme } from 'vitepress'

const search = {
  provider: 'local',
  options: {
    // // _render 是 VitePress 内部 API，用于过滤不索引的页面
    // _render: (md_src: string, env: { relativePath: string }, md: any) => {
    //   // 只索引RustCourse项目
    //   if (env.relativePath.startsWith('RustCourse/')) {
    //     return md.renderAsync(md_src, env) // 返回空字符串 → 不索引该页面
    //   }
    //   return '' // 其他目录不索引
    // },
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档',
      },
      modal: {
        noResultsText: '无法找到相关结果',
        resetButtonTitle: '清除查询条件',
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
        },
      },
    },
  },
} as DefaultTheme.Config['search']

export default search
