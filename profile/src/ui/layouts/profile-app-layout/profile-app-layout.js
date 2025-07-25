import { defineComponent } from "vue";
import ProfileNavbarSection from "@/ui/pages/profile-index-page/sections/profile-navbar-section/ProfileNavbarSection.vue"
export default defineComponent({
  name: "profile-app-layout",
  components:{
    ProfileNavbarSection
  },
  data(){
    return {
      active:false
    }
  },
  methods:{
    onActive(){
      this.active=!this.active
      //js-colorlib-nav-toggle colorlib-nav-toggle active
      //js-colorlib-nav-toggle colorlib-nav-toggle
      let body = document.getElementsByName('body');
      if(this.active){
        body.classList.add('offcanvas')
      }
      else{
        body.classList.remove('offcanvas')
      }
    }
  }
});