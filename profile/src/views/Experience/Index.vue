<template>
  <div class="container-fluid mt--6">
    <div class="row">
      <About :data="data" />
      <ExperienceItem :experience="data.experience" />
    </div>
  </div>
</template>
<script>
import data from '@/data/data'

import About from '@/views/common/About/About'
import ExperienceItem from './components/ExperienceItem/ExperienceItem'

export default {
  name: 'Experience',
  components: { About, ExperienceItem },
  computed: {
    data() {
      return data
    },
  },
}
</script>
