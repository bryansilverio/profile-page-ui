<template>

    <!--
    <div style="margin-bottom: 50px;">
        <div class="fh5co-feature animate-box cards-experience-item" v-for="(v, i) in items" :key="i"
            data-animate-effect="fadeInLeft">
            <div class="fh5co-icon">
                <img :src="v.logo" style="width: 100px;border-radius:100%" alt="">
            </div>
            <div class="fh5co-text">
                <h3>{{ v.position }}</h3>
                <span class="badge badge-pill badge-secondary">{{ v.company }}</span>
                <span> / </span>
                <span class="badge badge-pill badge-secondary">{{ v.date }}</span>
                <div class="content" v-html="v.content"></div>
                <hr class="nb nc nd am" aria-hidden="true">
            </div>
        </div>
    </div>
-->

    <div>
        <div class="col-md-12 zoom" v-for="(v, i) in items" :key="i">
            <div class="courses-container">
                <div class="course">
                    <div class="course-preview">
                        <h6>Experiencia</h6>
                        <h2>
                            {{ v.position }}
                        </h2>
                        <a>
                            <span style="font-weight: bold;">{{ company }}: </span>
                            <div class="fh5co-icon" style="margin-bottom: 10px">
                                <img :src="v.logo" style="width: 100px;border-radius:100%" alt="">
                            </div>
                            {{ v.company }}
                            <br>
                            <span style="font-weight: bold;"> </span>{{ v.date }}
                        </a>
                    </div>
                    <div class="course-info">
                        <div class="progress-container">
                            <div class="progress"></div>
                            <span class="progress-text">
                                6/9 Challenges
                            </span>
                        </div>
                        <h6 style="color: black;">Descripción</h6>
                        <div style="font-size: small;color: black;" class="content" v-html="v.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<style>
.zoom {
    transition: transform .2s;
    cursor: pointer;
}

.zoom:hover {
    transform: scale(1.1);
}

.courses-container {}

.course {
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    max-width: 100%;
    margin: 20px;
    overflow: hidden;
    width: 1000px;
}

.course h6 {
    opacity: 0.6;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.course h2 {
    letter-spacing: 1px;
    margin: 10px 0;
}

.course-preview {
    background-color: #2A265F;
    color: #fff;
    padding: 30px;
    width: 500px;
}

.course-preview a {
    color: #fff;
    display: inline-block;
    font-size: 12px;
    opacity: 0.6;
    margin-top: 30px;
    text-decoration: none;
}

.course-info {
    padding: 30px;
    position: relative;
    width: 100%;
}

.progress-container {
    position: absolute;
    top: 30px;
    right: 30px;
    text-align: right;
    width: 150px;
}

.progress {
    background-color: #ddd;
    border-radius: 3px;
    height: 5px;
    width: 100%;
}

.progress::after {
    border-radius: 3px;
    background-color: #2A265F;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 66%;
}

.progress-text {
    font-size: 10px;
    opacity: 0.6;
    letter-spacing: 1px;
}

.btn {
    background-color: #2A265F;
    border: 0;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    color: #fff;
    /*font-size: 16px;*/
    padding: 12px 25px;
    position: absolute;
    bottom: 30px;
    right: 30px;
    letter-spacing: 1px;
}

@media only screen and (max-width: 600px) {
    .course {
        display: list-item;
        margin: 0px 0px 20px 0px;
    }

    .btn {
        bottom: 0px;
        right: 30px;
        left: 30px;
    }

    .course-info h6 {
        margin-top: 30px;
    }

    .fh5co-social {
        margin-bottom: 20px;
    }

    .course h2 {
        display: table-caption;
    }
}
</style>
<script lang="js">
import VueI18n from '@/translation/i18n'
export default {
    name: "WorkExperienceItem",
    data() {
        return {
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition')
        }
    },
    props: {
        items: Array
    }
};
</script>
