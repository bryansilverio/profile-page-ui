<template>
    <a class="col-md-6 col-lg-3 d-flex contact-item" :href="item.url" target="_blank">
        <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
                <span :class="item.icon"></span>
            </div>
            <h3 class="mb-4"></h3>
            <p></p>
      </div>
  </a>
</template>
<style>
    .contact-item:hover{
        transform: scale(1.1);
        transition: transform .2s;
    }
</style>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: 'TechnologiesUsedInProject',
    props:{
        item:{
            type: Object
        }
    },
    data() {
        return {
            txtTechnology: VueI18n.tc('pages.projectDetails.technologies')
        }
    }
}
</script>