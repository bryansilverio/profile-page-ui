<template>
  <section class="contact" id="contact">
    <div class="max-width">
      <h2 class="title">Contacto</h2>
      <div class="contact-content">
        <div class="column left">
          <div class="text">Contacto</div>
          <p></p>
          <div class="icons">
            <div class="row">
              <i class="fas fa-user"></i>
              <div class="info">
                <div class="head">Nombre</div>
                <div class="sub-title">{{ name }}</div>
              </div>
            </div>
            <div class="row">
              <i class="fas fa-map-marker-alt"></i>
              <div class="info">
                <div class="head">Direeción</div>
                <div class="sub-title">Qro. MX</div>
              </div>
            </div>
            <div class="row" v-if="emailContact">
              <i class="fas fa-envelope"></i>
              <div class="info">
                <div class="head">Correo</div>
                <div class="sub-title">{{ emailContact.value }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="column right">
          <div class="text">Mensage</div>
          <form action="#">
            <div class="fields">
              <div class="field name">
                <input type="text" placeholder="Nombre" required />
              </div>
              <div class="field email">
                <input type="email" placeholder="Correo" required />
              </div>
            </div>
            <div class="field">
              <input type="text" placeholder="Asunto" required />
            </div>
            <div class="field textarea">
              <textarea
                cols="30"
                rows="10"
                placeholder="Mensage.."
                required
              ></textarea>
            </div>
            <div class="button-area">
              <button type="submit">Envier mensage</button>
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
