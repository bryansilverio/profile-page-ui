<template>
    <div :class="cssClass" @click="onClickEvent(project.id)" style="cursor: pointer;">
        <img :src="project.image" alt="Image project" class="img-responsive">
        <h3>{{ project.name }}</h3>
        <h4>{{ project.company.name }}</h4>
        <p>{{ project.type }}</p>
        <ul class="fh5co-social">
            <i v-for="(t, i) in project.technologies" :key="i" :class="t.icon" style="font-size:20px;margin-right:15px">
            </i>
        </ul>
        <avatar :image="project.company.logo" :size="50" color="white" />
    </div>
</template>
<script>
import Avatar from "vue-avatar-component";
export default {
    name: "ProjectItem",
    components: { Avatar },
    props: {
        project: {
            type: Object
        },
        cssClass: {
            type: String,
            default: ""
        }
    },
    methods: {
        onClickEvent(id) {
            this.$emit('goToProjectDetails', id)
        }
    }
}
</script>