import { defineComponent } from 'vue'
import listContactDetailsService from '@/services/contactDetails/listContactDetailsService';
export default defineComponent({
    name: "profile-footer-section",
    mixins: [
        listContactDetailsService,
    ],
    computed: {
        contactDetails() {
            return this.executeListContactDetails();
        }
    }
});