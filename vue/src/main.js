// import { createApp } from 'vue'
// import App from './App.vue'
// import '@/assets/css/global.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import router from '../router/index'
// import qs from 'qs'
//
// Vue.prototype.$qs = qs
// createApp(App).use(ElementPlus).use(router).mount('#app')
// App.use(ElementPlus, {
//     locale: zhCn,
// })
//

import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from '../router/index'
import qs from 'qs'

// 创建 Vue 应用实例
const app = createApp(App)

// 添加全局属性
app.config.globalProperties.$qs = qs

// 使用 ElementPlus 和路由
app.use(ElementPlus, {
    locale: zhCn,
})
app.use(router)

// 挂载应用
app.mount('#app')
import * as ElIcon from '@element-plus/icons-vue'

Object.keys(ElIcon).forEach((key) => {
    app.component(key, ElIcon[key])
})