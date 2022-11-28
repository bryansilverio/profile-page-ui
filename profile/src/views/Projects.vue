<template>
    <div>

        <section id="projects" class="project_area pt-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title text-center pb-30">
                            <h3 class="main_title" style="color:#fff">Proyectos</h3>
                            <h5 class="sub_title" style="color:#fff">Proyectos en que he participado</h5>
                            <ul class="line">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p style="color:#fff">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum, velit tempor dictum
                            vehicula, ipsum velit sodales justo, in hendrerit nisi diam vitae tellus. Etiam nec eleifend
                            lacus, nec rhoncus elit. Cras hendrerit lacus ut augue molestie tincidunt. Vestibulum non
                            cursus nisl, sit amet efficitur nibh. Praesent fermentum, felis et rhoncus ullamcorper,
                            magna mauris luctus odio, sit amet semper tortor ipsum et lectus. Ut facilisis malesuada
                            magna in accumsan. Sed consectetur varius nisl, vitae rutrum diam cursus ut.

                            Proin quis aliquet ex. Vivamus quis lectus in nulla pellentesque efficitur. Cras nulla
                            felis, sodales vitae justo at, consequat malesuada tellus. Aliquam ac leo vitae nibh
                            vestibulum iaculis. Nulla posuere blandit diam ac facilisis. Sed iaculis nibh vitae euismod
                            porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                            curae; Nunc ac felis non eros rutrum vestibulum.

                            Proin sit amet feugiat mauris. Suspendisse potenti. Nulla mattis auctor aliquam. Vivamus
                            sagittis neque nec condimentum fermentum. Class aptent taciti sociosqu ad litora torquent
                            per conubia nostra, per inceptos himenaeos. Nullam aliquam, neque quis tempor maximus, nisi
                            mauris posuere mi, ut facilisis leo mi eget est. Praesent commodo elit non vulputate auctor.

                            Suspendisse congue tellus quis maximus laoreet. Vestibulum consequat felis nunc, at pulvinar
                            nibh venenatis vel. Duis ut justo velit. Praesent quis felis augue. Integer viverra metus
                            eget lectus facilisis facilisis. Fusce tristique, purus et porta varius, nulla sapien
                            consequat lorem, sit amet molestie massa velit vitae neque. Donec at ipsum ut purus lacinia
                            dignissim. Donec pellentesque condimentum quam et posuere. Vestibulum dignissim ultrices
                            lorem, sit amet blandit est porta et. Vestibulum id vestibulum augue. Sed convallis congue
                            erat, vitae egestas magna blandit ac. Maecenas eleifend sapien ac justo tincidunt eleifend.
                            Nam et metus ligula. Aenean ac scelerisque eros. Cras pulvinar magna sed purus tempus
                            mattis. Donec feugiat nunc nisi, et mollis tortor dapibus at.

                        </p>
                    </div>
                    <div class="col-lg-6 text-center">
                        <carousel :per-page="1" :mouse-drag="false" :navigation-enabled="true"
                            pagination-active-color="#ff5c35" pagination-color="#fff">
                            <slide v-for="(p, i) in projects" :key="i">
                                <div class="project_item" style="cursor:pointer" @click="goToProjectDetails(p.id)">
                                    <img class="card-img-top" :src="p.image" alt="Card image cap">
                                    <div class="card-body">

                                        <h3 class="title_project">{{ p.name }}</h3>
                                        <p class="text-description" style="color:#000">{{ p.type }}</p>
                                        <div class="service_icon text-center mt-10">
                                            <i v-for="(t, i) in p.technologies" :key="i" :class="t.icon"
                                                style="font-size:20px;margin-right:15px"></i>
                                        </div>
                                    </div>
                                    <div
                                        class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
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
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Avatar from "vue-avatar-component";
import projects_data from "@/data/projects.json";
import workExperiences_data from "@/data/work-experiences.json";
export default {
    name: "Projects",
    components: { Avatar },
    data() {
        return {
            itemSelected: {
                name: "Todos",
                url: "assets/logos/proyectosweb.png",
            },
            projects: projects_data
        };
    },
    created() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    computed: {
        workExperiences() {
            return workExperiences_data;
        },
    },
    methods: {
        goToProjectDetails(id = '') {
            this.$router.push('/projects/' + id).catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    /* eslint-disable no-console */
                    console.log(error)
                    /* eslint-enable no-console */
                }
            })
        }
    },
};
</script>
