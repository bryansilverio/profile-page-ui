import { createApp } from 'vue';
import App from "@/App.vue";
import { i18n } from "@/config/i18n/i18n";
import router from '@/config/router/index.js'
//import '@/index.css'
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
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
import { faSitemap } from '@fortawesome/free-solid-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faEnvelope)
library.add(faLinkedin)
library.add(faGithub)
library.add(faWordpress)
library.add(faAnglesDown)
library.add(faBriefcase)
library.add(faDatabase)
library.add(faCode)
library.add(faDiagramProject)
library.add(faSitemap)
library.add(faTerminal)

AOS.init();

const app = createApp(App)
app.use(i18n)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');