<template>

    <section id="project" class="project_area pt-125">
        <div class="container">
            <div class="row">
                <div class="col-sm-9">
                    <div class="section_title pb-30">
                        <h5 class="sub_title">Proyectos</h5>
                        <h3 class="main_title">Ultimos proyectos</h3>
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
            <div v-show="false" class="row project_active slick-initialized slick-slider"><span class="prev slick-arrow"
                    style="display: block;"><i class="lni lni-chevron-left"></i></span>




                <div class="slick-list draggable">
                    <div class="slick-track"
                        style="opacity: 1; width: 3600px; transform: translate3d(-720px, 0px, 0px);">
                        <div class="col-lg-4 slick-slide slick-cloned" tabindex="-1" style="width: 360px;"
                            data-slick-index="-2" aria-hidden="true">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-2.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4>Search Engine Optimization</h4>
                                    <p>Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide slick-cloned" tabindex="-1" style="width: 360px;"
                            data-slick-index="-1" aria-hidden="true">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-1.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4 class="project_title"><a href="#" tabindex="-1">HTML/CSS Coding</a></h4>
                                    <p>Front-end Development</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide slick-current slick-active" tabindex="0" style="width: 360px;"
                            data-slick-index="0" aria-hidden="false">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-3.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4 class="project_title"><a href="#" tabindex="0">Creative Agency Landing page</a>
                                    </h4>
                                    <p>UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide slick-active" tabindex="0" style="width: 360px;"
                            data-slick-index="1" aria-hidden="false">
                            <div class="single_project ">
                                <div class="project_image">
                                    <img src="assets/images/project-1.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4 class="project_title"><a href="#" tabindex="0">App Landing Page</a></h4>
                                    <p>Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide" tabindex="-1" style="width: 360px;" data-slick-index="2"
                            aria-hidden="true">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-2.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4>Search Engine Optimization</h4>
                                    <p>Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide" tabindex="-1" style="width: 360px;" data-slick-index="3"
                            aria-hidden="true">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-1.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4 class="project_title"><a href="#" tabindex="-1">HTML/CSS Coding</a></h4>
                                    <p>Front-end Development</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide slick-cloned" tabindex="-1" style="width: 360px;"
                            data-slick-index="4" aria-hidden="true">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-3.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4 class="project_title"><a href="#" tabindex="-1">Creative Agency Landing page</a>
                                    </h4>
                                    <p>UI/UX Design</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide slick-cloned" tabindex="-1" style="width: 360px;"
                            data-slick-index="5" aria-hidden="true">
                            <div class="single_project ">
                                <div class="project_image">
                                    <img src="assets/images/project-1.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4 class="project_title"><a href="#" tabindex="-1">App Landing Page</a></h4>
                                    <p>Web Design</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide slick-cloned" tabindex="-1" style="width: 360px;"
                            data-slick-index="6" aria-hidden="true">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-2.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4>Search Engine Optimization</h4>
                                    <p>Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 slick-slide slick-cloned" tabindex="-1" style="width: 360px;"
                            data-slick-index="7" aria-hidden="true">
                            <div class="single_project">
                                <div class="project_image">
                                    <img src="assets/images/project-1.jpg" alt="project">
                                </div>
                                <div class="project_content">
                                    <h4 class="project_title"><a href="#" tabindex="-1">HTML/CSS Coding</a></h4>
                                    <p>Front-end Development</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><span class="next slick-arrow" style="display: block;"><i
                        class="lni lni-chevron-right"></i></span>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "Projects",
    data() {
        return {};
    },
};
</script>
    