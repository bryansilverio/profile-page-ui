import { defineComponent } from "vue";
export default defineComponent({
  name: "profile-navbar-section",
  methods: {
    myMenuFunction() {
      var menuBtn = document.getElementById("myNavMenu");

      if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    },
  },
});
