<template>
  <div>
    <section id="skills" class="skills section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>{{ $t("sections.about.skills") }}</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div class="row skills-content">
          <template v-for="(item, index) in data.skills">
            <div class="col-lg-2" :key="index">
              <ImageShadow :src="item.image" :width="50" :shadowHover="true" />
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ImageShadow from "vue-image-shadow";

export default {
  name: "Skills",
  components: { ImageShadow },
  props: { data: Object },
};
</script>
