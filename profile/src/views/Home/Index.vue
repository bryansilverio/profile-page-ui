<template>
  <div class="container-fluid mt--6">
    <div class="row">
      <About :data="data" />
      <Information :data="data" />
    </div>
  </div>
</template>
<script>
import About from '@/views/common/About/About'
import Information from './components/Information/Information'

//data
import data from '@/data/data'

export default {
  name: 'Index',
  components: { About, Information },
  data() {
    return {
      data_aux: null,
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.data_aux = data
    },
  },
  computed: {
    data() {
      return this.data_aux
    },
  },
}
</script>
