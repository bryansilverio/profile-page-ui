<template>
    <section class="ftco-section">
      <div class="container">
        <div class="row">
            <div class="col-lg-12" style="margin-top: 100px;">
                <h3 class="mb-4 mt-3">
                    <span 
                        class="title-text-color" 
                        style="font-size:3rem" 
                        data-aos="fade-left">
                        {{ 'Contacto' }}
                    </span>
                </h3>
            </div>
            <div class="col-md-10">
                <hr>
            </div>
            <br>
        </div>
        <div class="row d-flex justify-content-start">
            <div class="col-md-6" data-aos="fade-right">
                Puedes ponerte en contacto conmigo por medio a través del correo <a :href="'mailto:'+findContactEmail.url">{{findContactEmail.url}}</a>.
                <br>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                    <li v-for="(v,i) in contactDetails" :key="i">
                        <a :href="v.url" target="_blank">
                            <span :class="v.icon" style="font-size: 17px;"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 d-flex contact-info mb-5">
                <img src="assets/images/background/contacto.webp" width="900" height="300">
            </div>
        </div>
      </div>
    </section>
</template>
<style type="text/css">
    hr {
        margin-top: -1rem;
        margin-bottom: 1rem;
        border-top: 3px solid;
        color: #FF474C;
    }
    .title-text-color{
        color: #FF474C;
        font-size: 3rem;
        font-weight: 900;
    }
    .flexbox-align {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      width: 200px;
      font-weight: 900;
    }
</style>
<script type="text/javascript">
import listContactService from "@/features/contact/services/listContactService.js";
import findEmailContact from "@/features/contact/services/findEmailContact.js";

export default{
    name:'ContactPage',
    mixins:[listContactService, findEmailContact],
    data(){
        return{
            
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    },
    methods: {
       
    },
    computed: {
        findContactEmail(){
            return this.executeFindEmailContact();
        },
        contactDetails(){
            return this.executeListContact();
        }
    }
}

</script>