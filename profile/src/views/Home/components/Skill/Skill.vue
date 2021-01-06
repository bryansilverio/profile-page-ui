<template>
  <div class="row">
    <template v-if="skills">
      <template v-for="(item, index) in skills">
        <div class="col-lg-3" :key="index">
          <Progress :key="index" :value="item.value">
            <template v-slot:footer>
              <b>{{ item.name }}</b>
            </template>
          </Progress>
        </div>
      </template>
    </template>
  </div>
</template>
<script>
import Progress from 'easy-circular-progress'
export default {
  name: 'SkillItem',
  components: { Progress },
  props: {
    skills: Array,
  },
}
</script>
