import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico' 

export default defineComponent({
    name: "Carrusel",
    props: {
        values: {
            type: Array
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
});