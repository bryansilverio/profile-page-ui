<template>
    <div>
      <!-- ======= Resume Section ======= -->
      <section id="resume" class="resume">
        <div class="container">

          <div class="section-title">
            <h2>{{$t("menu.resume")}}</h2>
            <p class="mt-3">{{$t("sections.resume.title")}}</p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">{{$t("sections.resume.resume")}}</h3>
              <div class="resume-item pb-0">
                <h4>{{data.name}}</h4>
                <p v-show="false"><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                <p>
                <ul>
                  <li>{{data.about.location}}</li>
                  <li>{{ data.about.phone }}</li>
                  <li>{{ data.about.email }}</li>
                </ul>
                </p>
              </div>

              <h3 class="resume-title">{{$t("sections.resume.education")}}</h3>
              <EducationItem v-for="(item,index) in education" :key="index" :item="item"/>      
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">{{$t("sections.resume.experience")}}</h3>
              <ExperienceItem v-for="(item,index) in experience" :key="index" :item="item"/>
            </div>
          </div>

        </div>
      </section><!-- End Resume Section -->
    </div>
</template>
<script>
//Components
import ExperienceItem from '@/views/components/ExperienceItem'
import EducationItem from '@/views/components/EducationItem'

export default {
    name:'Resume',
    props:{data:Object},
    components:{ExperienceItem,EducationItem},
    data(){
      return{
        experience:[],
        education:[]
      }
    },
    created(){
      this.getExperience()
      this.getEducation()
    },
    methods:{
      getExperience(){
        this.experience=this.data.experience
      },
      getEducation(){
        this.education=this.data.education
      }
    }
}
</script>