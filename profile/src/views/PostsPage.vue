<template>
    <section class="ftco-section" id="projects-section">
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
        </div>
        <div class="row d-flex">
            <template v-if="posts.length>0">
                <PostItem v-for="(v,i) in posts" :key="i" :item="v"/>
            </template>
            <template v-else>
                <div class="col-md-12 flexbox-align">
                    <span>
                        Cargando los proyectos...
                    </span>
                </div>
            </template>
        </div>
      </div>
    </section>
</template>
<style type="text/css">
    .projects-ul {
      display: flex;
      flex-direction: row;
    }

    .projects-li {
      flex: 1;
      display: inline-block;
      text-align: left;
    }
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
<script>
import PostItem from '@/components/_Shared/PostItem.vue'
import listPostWordpressServices from "@/services/listPostWordpressServices.js"
export default {
    name: "ProjectsPage",
    components: { PostItem },
    mixins:[listPostWordpressServices],
    data() {
        return {
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return this.listPostsServices();
    }
};
</script>
