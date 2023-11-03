<template>
    <div class="col-md-12 project-item">
        <div class="blog-entry justify-content-end" :style="'background-color:'+bgColor+';'">
            <div class="row">
                <div class="col-md-8">
                    <div class="text mt-3 float-right d-block" data-aos="fade-right">
                        <div class="d-flex align-items-center mb-3 meta margin-content">
                            <h1 class="mb-0 project-name">
                            {{item.name}}
                            </h1>
                        </div>
                        <div class="d-flex align-items-center mb-3 meta margin-content">
                            <img 
                                :src="item.company.logo" 
                                style="border-radius: 50%;"
                                width="50"
                                height="50">
                                &nbsp;&nbsp;<strong>{{item.company.name }}</strong>
                        </div>
                        <div class="margin-content">
                            <p class="mt-5"
                                style="font-size: small;">
                                {{item.description.long}}
                            </p>
                        </div>
                        <div class="margin-content">
                            <div class="row">
                                <Skillitem 
                                    v-for="(v,i) in item.technologies" 
                                    :key="i*200" 
                                    :item="v"
                                    data-aos="zoom-in"
                                    :styleCss="'width:2.5rem;height: 2.5rem;'"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img :src="setImage(item.image)" 
                        style="width: 75%;margin: 10%;">
                    <a
                        v-if="item.url" 
                        :href="item.url"
                        style="margin-left: 10%;"
                        target="_blank">
                        Visitar el sitio
                    </a>
                     
                    <div class="clearfix" v-if="showButtonDetails" v-show="false">
                        <button 
                            @click="goToProjectDetails(item.id)" 
                            style="cursor: pointer;"
                            class="btn btn-white btn-outline-white margin-content margin-content">
                            Ver detalle del proyecto
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
</template>
<style>
    .blog-entry{
        border-radius: 5px;
    }
    .project-name{
        font-weight: 700;
        font-size: 30px;
        color: #FF474C;
    }
    .margin-content{
        margin: 20px;
    }
    .margin-content-button{
        margin: 5px 20px 5px 20px;
    }
    .project-item{
        border-radius: 10px;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import Skillitem from "@/components/shared/SkillItem.vue";

export default {
    name: "ProjectItem",
    components:{ Skillitem },
    data() {
        return {
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition'),
            seeMore: VueI18n.tc('pages.projects.seeMore')
        }
    },
    props: {
        item: {
            type: Object
        },
        bgColor:{
            type: String,
            default:"rgba(255, 255, 255, 0.1)"
        },
        showButtonDetails:{
            type: Boolean,
            default:false
        }
    },
    methods: {
        setImage(url){
            return url;
        },
        goToProjectDetails($id) {
            if ($id != null) {
                this.$router.push('/projects/' + $id).catch(error => {
                    if (
                        error.name !== 'NavigationDuplicated' &&
                        !error.message.includes('Avoided redundant navigation to current location')
                    ) {
                        /* eslint-disable no-console */
                        console.log(error)
                        /* eslint-enable no-console */
                    }
                })
            }
            else {
                this.$route.push({ path: '/404' })
            }
        }
    },
}
</script>