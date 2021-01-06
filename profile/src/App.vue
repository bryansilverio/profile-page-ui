<template>
  <div class="main-content" id="panel">
    <NavBar />
    <Header :data="data" />
    <Content />
    <Footer />
  </div>
</template>
<script>
//Components
import NavBar from '@/components/NavBar'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

//data
import data from '@/data/data'

export default {
  name: 'App',
  components: { NavBar, Header, Content, Footer },
  data() {
    return {
      data_aux: null,
    }
  },
  methods: {
    loadData() {
      this.data_aux = data
    },
  },
  mounted() {
    this.loadData()
  },
  computed: {
    data() {
      return this.data_aux
    },
  },
}
</script>
