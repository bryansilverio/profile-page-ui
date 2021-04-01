<template>
  <div class="col-lg-8 mt-5 mt-lg-0">
    <form
      action="forms/contact.php"
      method="post"
      role="form"
      class="php-email-form"
    >
      <div class="row">
        <div class="col-md-6 form-group">
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
            :placeholder="$t('sections.contact.form.name')"
            required
          />
        </div>
        <div class="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            :placeholder="$t('sections.contact.form.email')"
            required
          />
        </div>
      </div>
      <div class="form-group mt-3">
        <input
          type="text"
          class="form-control"
          name="subject"
          id="subject"
          :placeholder="$t('sections.contact.form.subject')"
          required
        />
      </div>
      <div class="form-group mt-3">
        <textarea
          class="form-control"
          name="message"
          rows="5"
          :placeholder="$t('sections.contact.form.message')"
          required
        ></textarea>
      </div>
      <div class="my-3">
        <div class="loading">Loading</div>
        <div class="error-message"></div>
        <div class="sent-message">
          {{ $t("sections.contact.form.messageResponse") }}
        </div>
      </div>
      <div class="text-center">
        <button type="submit">
          {{ $t("sections.contact.form.btnSendMessage") }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
};
</script>
