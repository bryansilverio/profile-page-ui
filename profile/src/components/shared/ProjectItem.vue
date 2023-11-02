<template>
    <div class="col-md-4 d-flex project-item">
        <div class="blog-entry justify-content-end" 
            :style="'background-color:'+bgColor+';'">
          <a class="block-20" :style="setImage(item.image)+'cursor: pointer'">
          </a>
          <div class="text mt-3 float-right d-block">
            <div class="d-flex align-items-center mb-3 meta margin-content">
                <h5 class="mb-0 project-name">
                    {{item.name}}
                </h5>
            </div>
            <div class="margin-content">
                <p style="font-size: small;">
                    {{item.description.short}}
                </p>
            </div>
            <div class="clearfix" v-if="showButtonDetails">
                <button 
                    @click="goToProjectDetails(item.id)" 
                    style="cursor: pointer;"
                    class="btn btn-white btn-outline-white btn-block">
                    Ver proyecto
                </button>
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
        font-size: 20px;
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
    .project-item:hover .project-name{
        cursor: pointer;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: "ProjectItem",
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
            return "background-image: url("+url+");";
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
        },
        setUrlBase(image = '') {
            if (!image.includes(this.$url)) {
                return this.$url + '/' + image
            } else {
                return image
            }
        }
    },
}
</script>