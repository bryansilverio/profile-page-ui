<template>
    <section class="ftco-section" id="about-section">
        <div class="container">
            <SectionTitle :title="'Ultimos posts'" data-aos="fade-left"/>
            <div class="row">
                <div class="col-md-12 mb-5 resume-wrap" v-for="(v,i) in posts" :key="i" style="background-color: #36394A;">
                    <h6 style="font-weight: bold;" v-html="v.title"></h6>
                    <span><i class="icon-calendar text-primary fa-sm fa-fw"></i> {{new Date(v.modified).toLocaleString()}}</span>
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
import listPostWordpressServices from "@/services/listPostWordpressServices.js"
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "PostsSection",
    components:{SectionTitle},
    mixins:[listPostWordpressServices],
    data() {
        return {
        }
    },
    created() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        this.listPostsServices();
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
