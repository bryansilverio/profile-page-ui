import { createApp } from 'vue';
import App from "@/App.vue";
import { i18n } from "@/translation/i18n";
import router from '@/router/index.js'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const app = createApp(App)
app.use(i18n)
app.use(router)
app.mount('#app');