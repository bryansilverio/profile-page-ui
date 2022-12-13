<template>

    <div>
        <div class="bg-card-projects">
            <avatar :image="project.company.logo" :size="50" color="white" />
            <img :src="project.image" alt="Free HTML5 Website Template by FreeHTML5.co" class="img-responsive">
            <h3 class="fh5co-work-title" style="margin: 5px">{{ project.name }}</h3>
            <p>{{ project.type }}, {{ project.company.name }}</p>
            <i v-for="(t, i) in project.technologies" :key="i" :class="t.icon" style="font-size:20px;margin-right:15px">
            </i>

            <br>
            <p><a @click="onClickEvent(project.id);" style="cursor: pointer;" class="btn btn-md btn-primary">Ver
                    detalle</a></p>
        </div>
        <div class="clearfix visible-md-block"></div>
    </div>
    <!---
    <carousel :per-page="1" :mouse-drag="false" :navigation-enabled="navigationEnabled"
        :pagination-active-color="paginationActiveColor" :pagination-color="paginationColor">
        <slide v-for="(p, i) in projects" :key="i">
            <div class="project_item" :style="'cursor:pointer;background-color:' + bgColor"
                @click="onClickEvent(p.id);">
                <img v-if="showImageProject" class="card-img-top" :src="p.image" alt="Card image cap">
                <div class="card-body">
                    <h3 class="title_project" :style="'color:' + textColor">{{ p.name }}</h3>
                    <p class="text-description" :style="'color:' + textColor">{{ p.type }}</p>
                    <div class="service_icon text-center mt-10">
                        <i v-for="(t, i) in p.technologies" :key="i" :class="t.icon"
                            style="font-size:20px;margin-right:15px"></i>
                    </div>
                </div>
                <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                    <div class="views text-description">
                        <table>
                            <tr>
                                <td>
                                    <avatar :image="p.company.logo" :size="50" color="white" />
                                </td>
                                <td>
                                    <span style="padding: 10px;">{{ p.company.name }}</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </slide>
    </carousel>
    -->
</template>
<style>
.bg-card-projects {
    /*box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;*/
    /*border-radius: 10px*/;
}
</style>
<script>
import Avatar from "vue-avatar-component";
export default {
    name: "ProjectItem",
    components: { Avatar },
    props: {
        project: {
            type: Object
        },
        navigationEnabled: {
            type: Boolean,
            default: false
        },
        bgColor: {
            type: String,
            default: ""
        },
        borderRadius: {
            type: String,
            default: ""
        },
        textColor: {
            type: String,
            default: "#000"
        },
        paginationActiveColor: {
            type: String,
            default: "#ff5c35"
        },
        paginationColor: {
            type: String,
            default: "#fff"
        },
        showImageProject: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        onClickEvent(id) {
            this.$emit('goToProjectDetails', id)
        }
    }
}
</script>