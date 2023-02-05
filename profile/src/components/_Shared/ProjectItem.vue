<template>
    <div class="row">

        <div class="col-md-12 card-project-item" style="max-height: 480px;margin-top: 20px;" v-for="(v, i) in items"
            :key="i">
            <div class="row card-project-header">
                <div class="col-md-1" style="padding-top: 20px;">
                    <img :src="v.image" width="50px" alt="" style="border-radius: 100%;" class="img-responsive">
                </div>
                <div class="col-md-11" style="padding-top: 20px;">
                    <h3 class="title-project">{{ v.name }}</h3>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-md-12">
                    <small>
                        <span style="font-size: small;font-weight: bold;color:#FF4A57">{{ position }}: </span>
                        <span style="font-size: small;">{{ v.type }}</span>
                    </small>
                </div>
                <div class="col-md-12">
                    <p class="description" style="font-size: small;" v-html="v.description.short"></p>
                </div>
                <div class="col-md-12">
                    <ul class="fh5co-social">
                        <i v-for="(t, i) in v.technologies" :key="i" :class="t.icon"
                            style="font-size:20px;margin-right:10px">
                        </i>
                    </ul>
                </div>
                <div class="col-md-12">
                    <small>
                        <span style="font-size: small;font-weight: bold;color:#FF4A57">{{ company }}: </span>
                        <img :src="v.company.logo" width="20px" alt="" style="border-radius: 100%;">
                        &nbsp;
                        <span style="font-size: small;">{{ v.company.name }} </span>
                    </small>
                </div>
                <div class="col-md-12" style="margin-top: 10px;">
                    <button class="btn btn-md btn-primary mt-5" style="cursor: pointer;border-radius: 9999px;"
                        @click="onClickEvent(v.id)">
                        {{ seeMore }}
                    </button>
                </div>
            </div>
        </div>
        <!--
        <div class="fh5co-feature animate-box cards-experience-item" style="cursor: pointer;" v-for="(v, i) in items"
            :key="i" data-animate-effect="fadeInLeft">

            <div class="fh5co-text" style="float: none;">
                <h3 class="title-project">{{ v.name }}</h3>
                <span class="badge badge-pill badge-secondary">
                    <img :src="v.company.logo" width="20px" alt="" style="border-radius: 100%;">
                    {{ v.company.name }}
                </span>
                <span> / </span>
                <span class="badge badge-pill badge-secondary">
                    {{ v.type }}
                </span>
                <br>
                <span class="badge badge-pill badge-secondary">
                    <ul class="fh5co-social">
                        <i v-for="(t, i) in v.technologies" :key="i" :class="t.icon"
                            style="font-size:20px;margin-right:10px">
                        </i>
                    </ul>
                </span>
                <div class="description" style="font-size: small;" v-html="v.description.short"></div>
                <p style="margin-top: 20px;">
                    <button class="btn btn-md btn-primary mt-5" style="border-radius: 9999px;"
                        @click="onClickEvent(v.id)">
                        Learn More
                    </button>
                </p>
                <hr class="nb nc nd am" aria-hidden="true">
            </div>
        </div>
        -->
    </div>

</template>
<style>
.title-project {
    color: #fff;
    font-weight: bolder;
}

.card-project-header {
    background-color: #ff4a57;
    margin-right: -30px;
    margin-left: -30px;
    margin-top: -15px;
    margin-bottom: -15px;
}

.description p {
    margin-top: 10px;
}

.card-project-item {
    /*box-shadow: 0 1px 30px rgb(255 255 255 / 20%);*/
    box-shadow: 0 1px 10px;
    padding: 15px 30px;
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