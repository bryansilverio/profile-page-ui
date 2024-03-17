<template>
    <section class="colorlib-skills" data-section="skills" id="skills">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">{{ $t('sections.skills') }}</span>
                    <h2 class="colorlib-heading animate-box">{{ $t('sections.skills') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <p>Las herramientas y tecnologías que he usado en mis proyectos y en los que tengo experiencia son los siguientes:</p>
                </div>
            </div>
            <div class="row row-pt-md">
				<div class="col-md-2 text-center animate-box" v-for="(v, i) in skills" :key="i">
					<div class="services" style="border-bottom:0px">
						<span class="icon">
							<img :src="v.icon" alt="Experience icon" class="icon" style="width: 45px; margin: 25px;"/>
						</span>
					</div>
				</div>
			</div>
        </div>
    </section>
</template>
<script>
import listSkillsService from '@/services/skills/listSkillsService'
import { defineComponent } from 'vue'
export default defineComponent({
    name: "Skills",
    mixins: [
        listSkillsService
    ],
    methods: {
    },
  computed: {
    skills() {
      return this.executeListSkills()
    }
  }
});
</script>
<style>
.services .icon::before{
    border-color: #222233;
}
.services .icon::after{
    border-color: #222233;
}
.services .icon{
    background: #222233;
}
</style>