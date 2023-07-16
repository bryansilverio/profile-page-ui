<template>
    <section class="ftco-section" id="about-section">
        <div class="container">
            <SectionTitle :title="'Ultimos posts'" data-aos="fade-left"/>
            <div class="row">
                <div class="mb-5 resume-wrap col-md-4" v-for="(v,i) in posts" :key="i">
                    <div class="row">
                        <div class="col-md-10">
                            <h5 
                                class="fw-bold" 
                                style="
                                    text-align: left;
                                    font-size:20px;
                                    word-wrap: break-word;
                                    white-space: normal;" v-html="v.title">
                            </h5>
                            <small style="font-weight: 500;">{{new Date(v.modified).toLocaleString()}}</small>
                            <p class="mt-2" style="font-size: small;" v-html="v.excerpt"></p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <button 
                                @click="goToPostDetail(v.ID)" 
                                style="cursor: pointer;"
                                class="btn btn-white btn-outline-white btn-block">
                                Ver post
                            </button>
                        </div>
                    </div>
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
        goToPostDetail(id=0){
            this.$router.push('/posts/'+id).catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    /* eslint-disable no-console */
                    console.log(error)
                    /* eslint-enable no-console */
                }
            });
        },
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
