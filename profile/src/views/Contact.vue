<template>
  <!--contact section-->
  <section class="py-7 bg-section" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h2>Contacto</h2>
          <div class="divider bg-primary mx-auto"></div>
          <p class="text-muted lead">
            Contacto.
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-8 mx-auto">
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Correo"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control"
                    placeholder="Teléfono"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input
                    type="url"
                    class="form-control"
                    placeholder="Sitio web"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    rows="5"
                    class="form-control"
                    placeholder="Comentario"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="text-center mt-3">
              <button class="btn btn-primary">Enviar mensaje</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Contact",
  props: {
    name: String,
    data: Array,
  },
  data() {
    return {
      emailContact: null,
    };
  },
  created() {
    this.getEmail(this.data);
  },
  methods: {
    getEmail(items = []) {
      this.emailContact = null;
      this.emailContact = items.find(({ type }) => type === "EMAIL");
    },
  },
};
</script>
