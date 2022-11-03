<template>

    <section id="project" class="project_area pt-125">
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <div class="section_title pb-30">
                        <h5 class="sub_title">Proyectos</h5>
                        <h3 class="main_title">Proyectos en que he participado</h3>
                        <ul class="line">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="project_btn text-sm-right">
                        <a class="main-btn main-btn-2" href="#">All Works</a>
                    </div>
                </div>
            </div>
            <div class="row project_active slick-initialized slick-slider" v-for="(v, i) in projects" :key="i">
                
                <div class="call_to_action_area">
                    <div class="container">
                        <div class="project_wrapper wow fadeIn" data-wow-duration="1.3s" data-wow-delay="0.5s">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="project_box d-md-flex justify-content-between align-items-center">
                                        <div class="project_content">
                                            <h3 class="project_title">{{ v.company.name }}</h3>
                                            <ul class="line">
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div> <!-- call to action content -->

                                        <div class="project_logo">
                                            <avatar :image="v.company.logo" :size="100" color="white"></avatar>
                                        </div> <!-- call to action btn -->
                                    </div> <!-- call to action box -->
                                </div>
                            </div>  <!-- row -->
                        </div>  <!-- call to action wrapper -->
                    </div> <!-- container -->
                </div>

                <div class="slick-list">
                    <div class="slick-track">
                        <div class="row">
                            <div class="col-lg-4" v-for="(p, i) in v.company.projects" :key="i">
                                <div class="single_project wow fadeInUpBig">
                                    <div class="project_image">
                                        <img :src="p.image" alt="project">
                                    </div>
                                    <div class="project_content">
                                        <h4 class="project_title">{{ p.name }}</h4>
                                        <p class="project_content">{{ p.description }}</p>
                                        <p class="project_content">{{ p.type }}</p>
                                        <template v-if="p.technologies.length">
                                            <vue-badges v-for="(t, i) in p.technologies" :key="i" :badges='[[t.name]]'>
                                            </vue-badges>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
<script>
import Avatar from 'vue-avatar-component'
import projects_data from '@/data/projects.json'
export default {
    name: "Projects",
    components: { Avatar },
    computed: {
        projects() {
            return projects_data
        }
    }
};
</script>
    