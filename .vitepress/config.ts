import { defineConfig } from 'vitepress'
import { viteConfig, markdownConfig, patientH5NoteSidebar } from './configs'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'docs',
  title: '一些项目文档合集',
  description: 'A VitePress Site',
  head: [
    ['script', { src: 'https://unpkg.com/gitalk@1.8.0/dist/gitalk.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/gitalk@1.8.0/dist/gitalk.css' }],
  ],
  markdown: markdownConfig,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '优医问诊', link: '/PatientH5Note' },
    ],
    sidebar: [patientH5NoteSidebar],
  },
  vite: viteConfig,
})
