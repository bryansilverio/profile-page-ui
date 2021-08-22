<template>
  <div>
    <NavBar />
    <Content />
    <Footer />
  </div>
</template>
<script>
import NavBar from "./components/navBar";
import Content from "./components/content";
import Footer from "./components/footer";

export default {
  name: "Main",
  components: {
    NavBar,
    Footer,
    Content,
  },
};
</script>
