<template>
    <div>
        <div class="fh5co-testimonial">
            <div class="fh5co-narrow-content">
                <div class="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                    <div class="item">
                        <figure>
                            <img src="assets/images/testimonial_person2.jpg" alt="Free HTML5 Bootstrap Template">
                        </figure>
                        <p class="text-center quote">&ldquo;Design must be functional and functionality must be
                            translated
                            into visual aesthetics, without any reliance on gimmicks that have to be explained. &rdquo;
                            <cite class="author">&mdash; Ferdinand A. Porsche</cite>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="fh5co-narrow-content">
            <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Proyectos <span>We Love To
                    Do</span>
            </h2>
            <div class="row">
                <div class="col-md-6">
                    <div class="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                        <div class="fh5co-icon">
                            <i class="icon-strategy"></i>
                        </div>
                        <div class="fh5co-text">
                            <h3>Strategy</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                        <div class="fh5co-icon">
                            <i class="icon-telescope"></i>
                        </div>
                        <div class="fh5co-text">
                            <h3>Explore</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                        <div class="fh5co-icon">
                            <i class="icon-circle-compass"></i>
                        </div>
                        <div class="fh5co-text">
                            <h3>Direction</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
                        <div class="fh5co-icon">
                            <i class="icon-tools-2"></i>
                        </div>
                        <div class="fh5co-text">
                            <h3>Expertise</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="fh5co-cards">
            <div class="fh5co-narrow-content">
                <h2 class="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Press Release</h2>

                <div class="fh5co-flex-wrap">
                    <div class="fh5co-card animate-box" data-animate-effect="fadeInLeft">
                        <h5>Expertise</h5>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                            there
                            live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
                            Semantics,
                            a large language ocean. A small river named Duden flows by their place and supplies it with
                            the
                            necessary regelialia.</p>
                        <p><a href="#" class="btn btn-md btn-primary">Learn More</a></p>
                    </div>
                    <div class="fh5co-card animate-box" data-animate-effect="fadeInLeft">
                        <h5>Explore</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                            decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
                            because
                            there were thousands of bad Commas.</p>
                        <p><a href="#" class="btn btn-md btn-primary">Learn More</a></p>
                    </div>
                    <div class="fh5co-card animate-box" data-animate-effect="fadeInLeft">
                        <h5>Explore</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                            decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
                            because
                            there were thousands of bad Commas.</p>
                        <p><a href="#" class="btn btn-md btn-primary">Learn More</a></p>
                    </div>

                    <div class="fh5co-card animate-box" data-animate-effect="fadeInLeft">
                        <h5>Explore</h5>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                            unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                            decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so,
                            because
                            there were thousands of bad Commas.</p>
                        <p><a href="#" class="btn btn-md btn-primary">Learn More</a></p>
                    </div>


                </div>

            </div>
        </div>
    </div>
</template>
<script>
import social_network_data from '@/data/social-network.json'
export default {
    name: "Home",
    watch: {
        $route() {
            this.setData();
        }
    },
    data() {
        return {
            title: '',
            subtitle: '',
            text: '',
            image: '',
            url: ''
        };
    },
    created() {
        this.setData();
    },
    methods: {
        setData() {

            if (this.$route.path == '/') {
                this.title = "Bryan Silverio";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/about"
            }
            else if (this.$route.path == '/about') {
                this.title = "Sobre mi";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
            else if (this.$route.path == '/work-experience') {
                this.title = "Mi Experiencia";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
            else if (this.$route.path == '/projects') {
                this.title = "Mis projectos";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
            else if (this.$route.path == '/contact') {
                this.title = "Contacto";
                this.subtitle = "Desarrollador de software";
                this.text = "";
                this.image = "assets/images/hero.png";
                this.url = "/work-experience"
            }
        }
    },
    computed: {
        socialNetwork() {
            return social_network_data
        }
    }
};
</script>
  