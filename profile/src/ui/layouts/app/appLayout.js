import { defineComponent } from "vue";
import Nav from "@/ui/sections/navbar/NavBarSection.vue"
export default defineComponent({
  name: "AppLayout",
  components:{
    Nav
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