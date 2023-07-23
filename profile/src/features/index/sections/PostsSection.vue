<template>
    <section class="ftco-section" id="posts-section">
        <div class="container">
            <SectionTitle :title="'Ultimos posts'" data-aos="fade-left"/>
            <div class="row">
                <div class="col-md-12 mb-5 resume-wrap" v-for="(v,i) in posts" :key="i" style="background-color: #36394A;">
                    <h6 style="font-weight: bold;" v-html="v.title"></h6>
                    <span>
                        <i class="icon-calendar text-primary fa-sm fa-fw"></i> 
                        {{new Date(v.modified).toLocaleString()}}
                    </span>
                     <a 
                        :href="v.URL"
                        target="_blank" 
                        style="cursor: pointer;"
                        class="btn btn-primary btn-outline-white">
                        Ver post
                    </a>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-md-12 flexbox-align">
                    <button class="btn btn-primary" @click="goToPosts()">
                        Ver todos los posts &#10140;
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import listSummaryPostWordpressService from "@/features/index/services/listSummaryPostWordpressService.js"
import SectionTitle from '@/components/shared/SectionTitle.vue'
export default {
    name: "PostsSection",
    components:{SectionTitle},
    mixins:[listSummaryPostWordpressService],
    data() {
        return {
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.executeListPostWordpress();
    },
    methods:{
        goToPosts(){
            this.$router.push('/posts').catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    /* eslint-disable no-console */
                    console.log(error)
                    /* eslint-enable no-console */
                }
            });
        }
    }
};
</script>
