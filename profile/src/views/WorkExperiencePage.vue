<template>
	<section class="ftco-section" id="projects-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12" style="margin-top: 100px;">
          <h3 class="mb-4 mt-3">
            <span
              class="title-text-color"
              style="font-size:3rem"
              data-aos="fade-left">
              {{ 'Experiencia Laboral' }}
          </span>
          </h3>
        </div>
        <div class="col-md-10">
          <hr>
        </div>
        <p data-aos="fade-left">En esta sección se muestrán los proyectos en los que he participado dentro de las empresas en las que he elaborado, además de proyectos personales.
        </p>
      </div>
      <div class="row">
        <div class="col-md-12">
          <ul class="timeline" style="list-style: none;" v-for="(v,i) in workexperiences" :key="i">
            <li class="timeline-event">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy">
                <p class="timeline-event-thumbnail">{{v.date}}</p>
                <h3>{{v.position}}</h3>
                <h4>{{v.company}}</h4>
                <p><strong>{{v.company}}: {{v.position}}</strong><br>{{v.content}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--
      <div class="row d-flex" v-show="false">
        <template v-if="items.length>0">
          <ProjectItem
            data-aos="zoom-in" 
            v-for="(v,i) in items" 
            :key="i" 
            :item="v"
            bgColor="#36394A"
            :showButtonDetails="true"/>
        </template>
        <template v-else>
          <div class="col-md-12 flexbox-align">
            <span>
              Cargando los proyectos...
            </span>
          </div>
        </template>
      </div>
      -->
    </div>
  </section>
</template>
<style type="text/css">
	body {
		font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-size: 1em;
		font-weight: 300;
		line-height: 1.5;
		letter-spacing: 0.05em;
	}

/* Layout */
* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* Styling */
.timeline {
  /*margin: 4em auto;*/
  position: relative;
  /*max-width: 46em;*/
}
.timeline:before {
  background-color: #FF474C;
  content: "";
  margin-left: -10px;
  position: absolute;
  top: 0;
  left: 5em;
  width: 2px;
  height: 100%;
}

.timeline-event {
  position: relative;
}
.timeline-event:hover .timeline-event-icon {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #a83279;
}
.timeline-event:hover .timeline-event-thumbnail {
  -moz-box-shadow: inset 40em 0 0 0 #a83279;
  -webkit-box-shadow: inset 40em 0 0 0 #a83279;
  box-shadow: inset 40em 0 0 0 #a83279;
}

.timeline-event-copy {
  padding: 2em;
  position: relative;
  top: -1.875em;
  left: 4em;
  width: 80%;
}
.timeline-event-copy h3 {
  font-size: 1.75em;
}
.timeline-event-copy h4 {
  font-size: 1.2em;
  margin-bottom: 1.2em;
}
.timeline-event-copy strong {
  font-weight: 700;
}
.timeline-event-copy p:not(.timeline-event-thumbnail) {
  padding-bottom: 1.2em;
}

.timeline-event-icon {
  -moz-transition: -moz-transform 0.2s ease-in;
  -o-transition: -o-transform 0.2s ease-in;
  -webkit-transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: black;
  outline: 10px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  -moz-transition: box-shadow 0.5s ease-in 0.1s;
  -o-transition: box-shadow 0.5s ease-in 0.1s;
  -webkit-transition: box-shadow 0.5s ease-in;
  -webkit-transition-delay: 0.1s;
  transition: box-shadow 0.5s ease-in 0.1s;
  color: white;
  font-size: 0.75em;
  background-color: black;
  -moz-box-shadow: inset 0 0 0 0em #ef795a;
  -webkit-box-shadow: inset 0 0 0 0em #ef795a;
  box-shadow: inset 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}
.title-text-color{
    color: #FF474C;
    font-size: 3rem;
    font-weight: 900;
}
</style>
<script type="text/javascript">
import work_experiences_data from '@/data/work-experiences.json'
export default{
  name:'WorkExperiencePage',
  data(){
    return {

    }
  },
  created() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  computed: {
      workexperiences() {
          return work_experiences_data;
      }
  }
}
</script>