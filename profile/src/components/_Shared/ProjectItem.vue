<template>
    <div class="row">

        <div class="col-md-12 card-project-item zoom" style="max-height: 480px;margin-top: 20px;border-radius: 10px;"
            v-for="(v, i) in items" :key="i">
            <div class="row card-project-header">
                <div class="col-md-1" style="padding-top: 20px;" v-show="false">
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
                    <ul class="fh5co-social" style="text-align: start;">
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
    border-radius: 10px;
}

.description p {
    margin-top: 10px;
}

.card-project-item {
    /*box-shadow: 0 1px 30px rgb(255 255 255 / 20%);*/
    box-shadow: 0 1px 10px;
    padding: 15px 30px;
}

.zoom {
    transition: transform .2s;
}

.zoom:hover {
    transform: scale(1.1);
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