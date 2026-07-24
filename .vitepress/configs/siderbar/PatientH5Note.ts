import { type DefaultTheme } from 'vitepress'
const PatientH5Note: DefaultTheme.SidebarItem = {
  base: '/PatientH5Note',
  text: '优医问诊H5项目课程',
  items: [
    { text: '1. 项目起步', link: '/index' },
    { text: '2. 登录模块', link: '/login' },
    { text: '3. 用户模块', link: '/user' },
    { text: '4. 首页模块', link: '/home' },
    { text: '5. 极速问诊', link: '/consult' },
    { text: '6. 医生问诊室', link: '/room' },
    { text: '7. 问诊订单模块', link: '/consult-order' },
    { text: '8. 药品订单模块', link: '/order' },
    { text: '9. 其他扩展', link: '/end' },
    { text: '辅助-超级医生', link: '/super-doctor' },
    { text: '二次开发-开药问诊', link: '/medicine' },
    { text: '二次开发-问医生', link: '/doctor' },
  ],
}

export default PatientH5Note
