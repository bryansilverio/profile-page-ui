<template>
    <div class="col-md-12 text-start alert">
        <h4>{{ txtTechnology }}</h4>
        <div class="row">
            <div class="col-md-12" v-for="(t, i) in items" :key="i">
                <span class="badge badge-pill badge-secondary" style="font-size: small;">
                    <i :class="t.icon" style="font-size:20px;"></i> {{ t.name }} - {{ t.type }}
                </span>
            </div>
        </div>
    </div>
</template>
<style>
.alert {
    background-color: #525FFF;
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