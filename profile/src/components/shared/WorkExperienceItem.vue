<template>
    <div>
        <div class="mb-5 resume-wrap col-md-12">
            <div class="row">
                <div class="col-md-10">
                    <h5 
                        class="fw-bold" 
                        style="
                            text-align: left;
                            font-size:20px;
                            word-wrap: break-word;
                            white-space: normal;">
                        <i class="icon-briefcase text-primary fa-sm fa-fw"></i>
                        {{itemSelected.position}}
                    </h5>
                    <h5 
                        class="fw-bold" 
                        style="
                            text-align: left;
                            font-size:16px;
                            word-wrap: break-word;
                            white-space: normal;">
                        <i class="icon-building text-primary fa-sm fa-fw"></i>
                        {{itemSelected.company}}
                    </h5>
                    <p 
                        class="mb-2 fw-bold" 
                        style="
                            text-align: left;
                            font-size:16px;
                            word-wrap: break-word;
                            white-space: normal;
                            color: white;
                            font-style: italic;">
                        <i class="icon-calendar text-primary fa-sm fa-fw"></i>
                        {{itemSelected.date}}
                    </p>   
                </div>
                <div class="col-md-2">
                    <img 
                        :src="itemSelected.logo" 
                        style="border-radius: 50%;"
                        width="70"
                        height="70">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p 
                        class="mb-2" 
                        style="
                            text-align: left;
                            font-size: small;
                            word-wrap: break-word;
                            white-space: pre-line;
                            color: white;">
                        {{itemSelected.content}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<style type="text/css">
</style>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: "WorkExperienceItem",
    data() {
        return {
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition'),
            collection: this.items,
            itemSelected: null
        }
    },
    props: {
        items: {
            type: Array,
            default: null
        },
        divId:{
            type: String,
            default: null
        }
    },
    watch:{
        divId(val){
            this.divId=val;
            this.getItemSelected();
        }
    },
    methods:{
        getItemSelected(){
            if(this.divId){
                this.itemSelected=this.collection.find(x=>x.id==this.divId)
            }
        }
    },
    created(){
        this.itemSelected=this.collection[0]
        this.getItemSelected();
    }
};
</script>
