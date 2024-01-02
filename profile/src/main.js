import { createApp } from 'vue';
import App from "@/App.vue";
import { i18n } from "@/translation/i18n";
import router from '@/router/index.js'
import '@/index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faEnvelope)
library.add(faLinkedin)
library.add(faGithub)
library.add(faWordpress)

AOS.init();

const app = createApp(App)
app.use(i18n)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');