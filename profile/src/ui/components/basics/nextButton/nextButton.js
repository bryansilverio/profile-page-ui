import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

export default defineComponent({
    name: "NextButton",
    props: {
        text: String,
        url: String,
        target: {
            type: String,
            default: "_blank"
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
});