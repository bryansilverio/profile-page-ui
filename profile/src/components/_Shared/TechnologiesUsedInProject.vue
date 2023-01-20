<template>
    <div class="col-md-12 text-start alert">
        <hr class="nb nc nd am" aria-hidden="true">
        <h3>{{ txtTechnology }}</h3>
        <p class="badge badge-pill badge-secondary" v-for="(t, i) in items" :key="i" style="font-size: small;">
            <i :class="t.icon" style="font-size:20px;"></i> {{ t.name }} - {{ t.type }}
        </p>
    </div>
</template>
<style>
.alert{
    background-color: #FF4A57;
}
</style>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: 'TechnologiesUsedInProject',
    data() {
        return {
            txtTechnology: VueI18n.tc('pages.projectDetails.technologies')
        }
    },
    props: {
        items: {
            type: Array
        }
    }
}
</script>