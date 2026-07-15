import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

const viteConfig = {
  plugins: [groupIconVitePlugin()],
  server: {
    watch: {
      // 排除大型二进制媒体文件，避免 Windows 上 EBUSY 错误
      ignored: ['**/*.webm', '**/*.mp4', '**/*.mov', '**/*.avi'],
    },
  },
}

export default viteConfig
