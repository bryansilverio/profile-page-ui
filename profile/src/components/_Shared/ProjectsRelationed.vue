<template>
	<div class="sidebar-box">
      <h3 class="heading-sidebar">Recent Blog</h3>
      <div class="block-21 mb-4 d-flex" v-for="(v,i) in projectsRelationed" :key="i" @click="onClickToProjectById(v.id)">
        <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
        <div class="text">
          <h3 class="heading"><a>{{v.name}}</a></h3>
          <div class="meta">
            <div><a href="#"><span class="icon-person">{{v.company.name}}</span> </a></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
	name:'ProjectsRelationed',
	props:{
		projectsRelationed:{
			type: Array
		}
	}
}
</script>