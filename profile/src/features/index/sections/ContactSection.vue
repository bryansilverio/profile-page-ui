<template>
<section class="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div class="container">
        <SectionTitle :title="title" data-aos="fade-right"/>
        <div class="row d-flex contact-info mb-5">
          <ContactItem v-for="(v,i) in contactDetails" :key="i" :item="v" data-aos="zoom-in"/>
        </div>
      </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
import ContactItem from '@/components/shared/ContactItem.vue'
import findPrincipalContactService from "@/features/index/services/findPrincipalContactService.js"
import SectionTitle from '@/components/shared/SectionTitle.vue'
export default {
    name: "ContactSection",
    components:{ContactItem, SectionTitle},
    mixins:[findPrincipalContactService],
    data(){
      return{
        title: VueI18n.tc('pages.home.sections.contact.name'),
        textSection: VueI18n.tc('pages.home.sections.contact.textSection')
      }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    computed:{
      contactDetails(){
        return this.executeFindPrincipalContactDetails();
      }
    }
};
</script>
  