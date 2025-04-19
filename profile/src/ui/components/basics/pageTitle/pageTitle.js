import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

export default defineComponent({
    name: "PageTitle",
    setup() {
        const { t } = useI18n()
        return { t }
    },
    props: {
        logo: String,
        company: String,
        position: String,
        date: String,
        content: String
    }
});