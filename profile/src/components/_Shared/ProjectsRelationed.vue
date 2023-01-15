<template>
    <div class="col-md-12 text-start">
        <hr class="nb nc nd am" aria-hidden="true">
        <h3>{{ txtOtherProjects }}</h3>
        <ul class="technologies">
            <li style="cursor: pointer;" @click="onClickToProjectById(v.id)" v-for="(v, i) in items" :key="i"
                class="item-other-project">{{
    v.name
                }}</li>
        </ul>
    </div>
</template>
<style>
.technologies li {
    padding-left: 1ch;
}

.technologies li::marker {
    content: "=>";
    color: #FBD065;
}
</style>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: 'ProjectsRelationed',
    data() {
        return {
            txtOtherProjects: VueI18n.tc('pages.projectDetails.otherProjects')
        }
    },
    props: {
        items: {
            type: Array
        }
    },
    methods: {
        onClickToProjectById(id) {
            this.$emit("onClickToProjectById", id)
        }
    }
}
</script>