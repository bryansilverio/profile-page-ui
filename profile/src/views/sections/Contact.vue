<template>
<section class="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div class="container">
        <SectionTitle :title="title"/>
        <div class="row d-flex contact-info mb-5">
          <ContactItem v-for="(v,i) in contactDetails" :key="i" :item="v"/>
        </div>
      </div>
    </section>
</template>
<script>
import VueI18n from '@/translation/i18n'
import ContactItem from '@/components/_Shared/ContactItem.vue'
import contactDetailData from '@/data/contactDetails.json'
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "Contact",
    components:{ContactItem, SectionTitle},
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
        return contactDetailData
      }
    }
};
</script>
  