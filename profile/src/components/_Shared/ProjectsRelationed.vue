<template>
	<div class="sidebar-box sidebar-projects-relationed">
      <h3 class="heading-sidebar">{{lbProjectsRelationed}}</h3>
      <div class="block-21 mb-4 d-flex" v-for="(v,i) in projectsRelationed" :key="i" @click="onClickToProjectById(v.id)">
        <a v-show="false" class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
        <div class="text">
          <h3 class="heading"><a>{{v.name}}</a></h3>
          <div class="meta">
            <div><a href="#"><span class="icon-person">{{v.company.name}}</span> </a></div>
          </div>
        </div>
        <hr>
      </div>
    </div>
</template>
<style>
  .sidebar-projects-relationed{
    background-color: #36394A;
  }
  .block-21 .text .meta > div a{
    color: white;
  }
</style>
<script>
import VueI18n from '@/translation/i18n'
export default{
	name:'ProjectsRelationed',
  data(){
    return {
       lbProjectsRelationed: VueI18n.tc('pages.projectDetails.projectsRelationed')
    }
  },
	props:{
		projectsRelationed:{
			type: Array
		}
	}
}
</script>