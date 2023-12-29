<template>
  <div>
    <div
      class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    </div>

    <Header />
    <IndexPage />
    <Footer />

  </div>
</template>
<style>
html {
  font-family: "Onest Variable", system-ui, sans-serif;
  scroll-behavior: smooth;
}

body {
  background: #050505;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
<script>
import Header from "@/sections/Header.vue"
import IndexPage from "@/pages/Index.vue"
import Footer from "@/sections/Footer.vue"
export default {
  name: "Layout",
  components: {
    Header,
    IndexPage,
    Footer
  }
};
</script>
  