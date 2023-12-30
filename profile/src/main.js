import { createApp } from 'vue';
import App from "@/layouts/Layout.vue";
import { i18n } from "@/translation/i18n";
import router from '@/router/index.js'
import './index.css'

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app');