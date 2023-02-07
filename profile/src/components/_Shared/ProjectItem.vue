<template>
    <div class="row">
        <div class="col-md-12 zoom" v-for="(v, i) in items" :key="i">
            <div class="courses-container">
                <div class="course">
                    <div class="course-preview">
                        <h6>Proyecto</h6>
                        <h2>{{ v.name }}</h2>
                        <a>
                            <span style="font-weight: bold;">{{ company }}: </span> {{ v.company.name }}
                            <br>
                            <span style="font-weight: bold;">{{ position }}: </span>{{ v.type }}
                        </a>
                    </div>
                    <div class="course-info">
                        <div class="progress-container">
                            <div class="progress"></div>
                            <span class="progress-text">
                                6/9 Challenges
                            </span>
                        </div>
                        <h6 style="color: black;">{{ position }}</h6>
                        <p class="description" style="font-size: small;color: black;" v-html="v.description.short"></p>
                        <ul class="fh5co-social" style="text-align: start;">
                            <i v-for="(t, i) in v.technologies" :key="i" :class="t.icon"
                                style="font-size:20px;margin-right:10px">
                            </i>
                        </ul>
                        <button @click="onClickEvent(v.id)" class="btn">{{ seeMore }}</button>
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
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: "ProjectItem",
    data() {
        return {
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition'),
            seeMore: VueI18n.tc('pages.projects.seeMore')
        }
    },
    props: {
        items: {
            type: Array
        },
    },
    methods: {
        onClickEvent(id) {
            this.$emit('goToProjectDetails', id)
        },
        setUrlBase(image = '') {
            if (!image.includes(this.$url)) {
                return this.$url + '/' + image
            } else {
                return image
            }
        }
    }
}
</script>