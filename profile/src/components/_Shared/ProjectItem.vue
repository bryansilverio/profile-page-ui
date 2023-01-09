<template>


    <div class="fh5co-flex-wrap">
        <div class="fh5co-feature animate-box cards-experience-item" style="cursor: pointer;" v-for="(v, i) in items"
            :key="i" data-animate-effect="fadeInLeft">

            <div class="fh5co-text" style="float: none;">
                <h3 class="title-project">{{ v.name }}</h3>
                <span class="badge badge-pill badge-secondary">
                    {{ v.company.name }}
                </span>
                <span> / </span>
                <span class="badge badge-pill badge-secondary">
                    {{ v.type }}
                </span>
                <p v-html="v.content"></p>
                <span class="badge badge-pill badge-secondary">
                    <ul class="fh5co-social">
                        <i v-for="(t, i) in v.technologies" :key="i" :class="t.icon"
                            style="font-size:30px;margin-right:15px">
                        </i>
                    </ul>
                </span>
                <p style="margin-top: 20px;">
                    <button class="btn btn-md btn-primary mt-5" style="border-radius: 9999px;"
                        @click="onClickEvent(v.id)">
                        Learn More
                    </button>
                </p>
                <hr class="nb nc nd am" aria-hidden="true">
            </div>
        </div>
    </div>

</template>
<style>
.title-project {
    color: #fbd065;
    font-weight: bolder;
}
</style>
<script>

export default {
    name: "ProjectItem",
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