var mixins = {
  created() {},
  methods: {
    redirectToPage(page) {
      if (this.$route.path !== page) {
        this.$router.push(page);
      }
    },
  },
};

export default mixins;
