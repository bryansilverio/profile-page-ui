<template>
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
</template>
<script>
import Avatar from "vue-avatar-component";
export default {
    name: "ProjectsCarrusel",
    components: { Avatar },
    props: {
        projects: {
            type: Array
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