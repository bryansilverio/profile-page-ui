<template>
  <div>
    <div class="form-group">
      <label class="form-control-label">
        {{ label_title }}
      </label>
      <p>{{ value }}</p>
    </div>
  </div>
</template>
<script>
import VueI18n from '@/translation/i18n'

export default {
  name: 'InfoItem',
  props: {
    label: String,
    value: String,
    lang: String,
  },
  data() {
    return {
      label_title: VueI18n.t(this.label),
    }
  },
  watch: {
    lang($event) {
      this.label_title = VueI18n.t(this.label, $event)
    },
  },
}
</script>
