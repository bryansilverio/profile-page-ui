<template>
    <section class="ftco-section ftco-no-pb" id="resume-section">
        <div class="container">
            <SectionTitle :title="title" :textSection="textSection"/>
            <div class="row">
                <div class="col-md-12">
                    <section>
                        <div class="slider">
                            <button 
                                v-for="(v,i) in items"
                                :key="i"
                                class="btn btn-outline-white" 
                                :class="v.active?'btn-primary':'btn-white'"
                                @click="onChangeItem(v)">
                                {{v.position}}
                            </button>
                        </div>
                        <div class="slides mt-5">
                            <WorkExperienceItem 
                                :items="items"  
                                :divId="itemSelected?itemSelected.id:null"/>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
    .slider {
      text-align: center;
      overflow: hidden;
    }

    .slider > a {
 
    }
    .slider > a:active {
      top: 1px;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
import work_experiences_data from '@/data/work-experiences.json'
import WorkExperienceItem from '@/components/_Shared/WorkExperienceItem.vue'
import SectionTitle from '@/components/_Shared/SectionTitle.vue'
export default {
    name: "WorkExperience",
    components: { WorkExperienceItem, SectionTitle },
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
            work_experiences_data.forEach(x=>{
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
        }
    },
    created() {
        this.listWorkExperiences();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
</script>
