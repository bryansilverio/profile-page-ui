<template>
  <!-- about section -->
  <section class="pb-7 bg-section" id="about">
    <div class="container">
      <hr class="my-6" />
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h4 class="dot-circle font-weight-normal">
            Desarrollo de aplicaciones y sistemas web.
          </h4>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6 order-2 order-md-1 my-md-auto">
          <h3>Google Design</h3>
          <p class="text-muted lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            ante posuere, vestibulum mauris eget, efficitur felis. Vestibulum
            tincidunt sit amet odio at gravida. Cras mollis dapibus orci, in
            interdum odio scelerisque rhoncus.
          </p>
          <a href="#" class="btn btn-primary">View project</a>
        </div>
        <div class="col-md-6 order-1 order-md-2">
          <img
            src="assets/img/google-design.jpeg"
            class="img-fluid d-block mx-auto"
            alt="Google Design"
          />
        </div>
        <div
          class="col-md-6 order-3 mx-auto border-top border-bottom mt-5 mt-md-0 py-4"
        >
          <div class="review text-center">
            <p class="quote">
              Praesent vulputate dolor velit, in condimentum odio pellentesin
              condimentum odio pellentesque libero.
            </p>
            <div
              class="mt-4 d-flex flex-row align-items-center justify-content-center"
            >
              <img
                src="assets/img/client-1.jpg"
                class="img-review rounded-circle mr-2"
                alt="Client 1"
              />
              <span class="text-muted">Ryan Siddle, Google Design</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img
            src="assets/img/facebook-messenger.jpeg"
            class="img-fluid d-block mx-auto"
            alt="Facebook Messenger"
          />
        </div>
        <div class="col-md-6 my-md-auto">
          <h3>Facebook Messenger</h3>
          <p class="text-muted lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            ante posuere, vestibulum mauris eget, efficitur felis. Vestibulum
            tincidunt sit amet odio at gravida. Cras mollis dapibus orci, in
            interdum odio scelerisque rhoncus.
          </p>
          <a href="#" class="btn btn-primary">View project</a>
        </div>
        <div
          class="col-md-6 mx-auto border-top border-bottom mt-5 mt-md-0 py-4"
        >
          <div class="review text-center">
            <p class="quote">
              Integer id ante posuere, vestibulum mauris eget, efficitur felis.
            </p>
            <div
              class="mt-4 d-flex flex-row align-items-center justify-content-center"
            >
              <img
                src="assets/img/client-2.jpg"
                class="img-review rounded-circle mr-2"
                alt="Client 2"
              />
              <span class="text-muted">Ameli Mao, VP Facebook</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 order-2 order-md-1 my-md-auto">
          <h3>Twitter Mobile</h3>
          <p class="text-muted lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id
            ante posuere, vestibulum mauris eget, efficitur felis. Vestibulum
            tincidunt sit amet odio at gravida. Cras mollis dapibus orci, in
            interdum odio scelerisque rhoncus.
          </p>
          <a href="#" class="btn btn-primary">View project</a>
        </div>
        <div class="col-md-6 order-1 order-md-2">
          <img
            src="assets/img/twitter-mobile.jpeg"
            class="img-fluid d-block mx-auto"
            alt="Twitter Mobile"
          />
        </div>
        <div
          class="col-md-6 order-3 mx-auto border-top border-bottom mt-5 mt-md-0 py-4"
        >
          <div class="review text-center">
            <p class="quote">
              Praesent vulputate dolor velit, pellentesin condimentum odio
              pellentesque libero.
            </p>
            <div
              class="mt-4 d-flex flex-row align-items-center justify-content-center"
            >
              <img
                src="assets/img/client-3.jpg"
                class="img-review rounded-circle mr-2"
                alt="Client 3"
              />
              <span class="text-muted">Kathrine Jones, Twitter</span>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-6">
        <div class="col-md-6 mx-auto text-center">
          <h4>Want to work with us?</h4>
          <p class="lead text-muted">
            Ready to launch your awesome project? We'd be happy to help you.
          </p>
          <a href="#" class="btn btn-primary">Get in touch</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  props: {
    data: Object,
    name: String,
  },
  data() {
    return {};
  },
};
</script>
