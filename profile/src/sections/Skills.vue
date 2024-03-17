<template>
    <section class="colorlib-skills" data-section="skills" id="skills">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">My Specialty</span>
                    <h2 class="colorlib-heading animate-box">My Skills</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                </div>
                <div class="col-md-2 animate-box" data-animate-effect="fadeInLeft" v-for="(v, i) in skills" :key="i">
                    <article>
                        <img :src="v.icon" alt="Experience icon" class="icon" style="width: 30px;"/>
                    </article>
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