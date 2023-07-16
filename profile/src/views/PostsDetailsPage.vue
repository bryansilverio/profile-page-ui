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
                        {{ 'Posts' }}
                    </span>
                </h3>
            </div>
            <div class="col-md-10">
                <hr>
            </div>
            <div class="col-md-12">
                <p data-aos="fade-left"></p>
            </div>
        </div>
        <div class="row">
          <div class="col-lg-12" style="margin-top: 100px;"> 
            <h4 v-html="postDetail.title"></h4>
            <small style="font-weight: 500;">{{new Date(postDetail.modified).toLocaleString()}}</small>
          </div>          
          <div class="col-md-12 mt-5" data-aos="fade-right">
            <div v-html="postDetail.content"></div>
          </div>
        </div>
      </div>
    </section> <!-- .section -->
</template>
<style>
    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-top: 3px solid;
        color: #FF474C;
    }
    .title-text-color{
        color: #FF474C;
        font-size: 3rem;
        font-weight: 900;
    }
</style>
<script>
import listPostWordpressServices from "@/services/listPostWordpressServices.js"
export default {
    name: 'PostsDetailsPage',
    mixins:[listPostWordpressServices],
    data() {
        return {

        }
    },
    methods: {
        
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.findPostsServicesById(this.$route.params.id)
    },
    computed:{
        
    }
}
</script>