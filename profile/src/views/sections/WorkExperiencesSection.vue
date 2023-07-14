<template>
    <section class="ftco-section ftco-no-pb" id="resume-section">
        <div class="container">
            <SectionTitle :title="title" :textSection="textSection" data-aos="fade-right"/>
            <div class="row">
                <div class="col-md-4">
                    <div class="slider" data-aos="fade-right">
                        <button 
                            v-for="(v,i) in items"
                            :key="i"
                            class="btn btn-outline-white btn-block" 
                            :class="v.active?'btn-primary':'btn-white'"
                            @click="onChangeItem(v)">
                            {{v.company}}
                        </button>
                </div>
                </div>
                <div class="col-md-8">                         
                    <div class="slides">
                        <WorkExperienceItem
                            data-aos="zoom-in" 
                            :items="items"  
                            :divId="itemSelected?itemSelected.id:null"/>
                    </div>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-md-12 flexbox-align">
                    <button class="btn btn-primary" @click="goToWorExperiencePage()">
                        Ver todas las experiencias
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .slider {
        text-align: left;
        overflow: hidden;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
    }

    .slider > a {
 
    }
    .slider > a:active {
      top: 1px;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import listWorkExperiencesServices from "@/services/listWorkExperiencesServices.js"
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "WorkExperiencesSection",
    components: { WorkExperienceItem, SectionTitle },
    mixins:[listWorkExperiencesServices],
    data() {
        return {
            title: VueI18n.tc('pages.home.sections.experience.name'),
            textSection: VueI18n.tc('pages.home.sections.experience.textSection'),
            btnDownloadCv:VueI18n.tc('common.btnDownloadCV'),
            itemSelected:null,
            items:[]
        }
    },
    methods:{
        onChangeItem(item=null){
            this.itemSelected=item;
            this.items.forEach(x=>{
                x.active=false
            });
            if(!this.itemSelected || !this.itemSelected.id){
                this.items[0].active=true
            }
            else{
                this.items.find(x=>x.id==this.itemSelected.id).active=true;
            }
        },
        listWorkExperiences() {
            this.items=[]
            let index=0;
            this.listWorkExperienceServices().forEach(x=>{
                let itemsAux={
                    id: x.id,
                    position: x.position,
                    company: x.company,
                    logo: x.logo,
                    date: x.date,
                    number: x.number,
                    content: x.content,
                    active: this.activateItem(index)
                }
                this.items.push(itemsAux);
                index++
            });
            this.onChangeItem();
        },
        activateItem(index){
            let activeAux=false;
            if(index==0){
                activeAux=true
            }
            return activeAux
        },
        goToWorExperiencePage(){
            this.$router.push('/work-experiences').catch(error => {
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
    },
    created() {
        this.listWorkExperiences();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
</script>
