import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
