<template>
    <section class="colorlib-skills" data-section="skills" id="skills">
        <div class="colorlib-narrow-content">
            <div class="row">
                <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                    <span class="heading-meta">{{ $t('sections.skills') }}</span>
                    <h2 class="colorlib-heading animate-box">{{ $t('sections.skills') }}</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <p>Las herramientas y tecnologías que he usado en mis proyectos y en los que tengo experiencia son los siguientes:</p>
                </div>
            </div>
            <div class="row row-pt-md">
                
                <div class="col-md-12 text-center ">
                    <Carrusel :values="skills"/>
                </div>
			</div>
        </div>
    </section>
</template>
<script src="./skillsSection.js"></script>
<style src="./skillsSection.css"></style>