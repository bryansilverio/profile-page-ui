<template>
    <div class="col-md-12 text-start alert">
        <h4>{{ txtOtherProjects }}</h4>
        <ul class="technologies">
            <li style="cursor: pointer;" @click="onClickToProjectById(v.id)" v-for="(v, i) in items" :key="i"
                class="item-other-project">{{ v.name }}
            </li>
        </ul>
    </div>
</template>
<style>
.alert {
    background-color: #FF4A57;
}

.technologies li {
    padding-left: 1ch;
}

.technologies li::marker {
    content: "=>";
    color: #1F2235;
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