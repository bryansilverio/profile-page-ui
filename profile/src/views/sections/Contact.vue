<template>
<section class="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center">
            <h1 class="mb-4 title-text-color-contact">{{title}}</h1>
            <p>{{textSection}}</p>
          </div>
        </div>

        <div class="row d-flex contact-info mb-5">
          <ContactItem v-for="(v,i) in contactDetails" :key="i" :item="v"/>
        </div>

        <div class="row no-gutters block-9" v-show="false">
          <div class="col-md-6 order-md-last d-flex">
            <form action="#" class="bg-light p-4 p-md-5 contact-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Name">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Your Email">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Subject">
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
              </div>
            </form>
          
          </div>

          <div class="col-md-6 d-flex">
            <div class="img" style="background-image: url(assets/images/about.jpg);"></div>
          </div>
        </div>
      </div>
    </section>
</template>
<style>
    .title-text-color-contact{
        color: #FF474C;
        font-size: 4vw;
        font-weight: 900;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import ContactItem from '@/components/_Shared/ContactItem.vue'
import contactDetailData from '@/data/contactDetails.json'
export default {
    name: "Contact",
    components:{ContactItem},
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
  