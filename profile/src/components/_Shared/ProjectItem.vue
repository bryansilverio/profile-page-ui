<template>


    <div class="fh5co-flex-wrap">
        <div class="fh5co-feature animate-box cards-experience-item" style="cursor: pointer;" v-for="(v, i) in items"
            :key="i" data-animate-effect="fadeInLeft">

            <div class="fh5co-text" style="float: none;">
                <h3>{{ v.name }}</h3>
                <span class="badge badge-pill badge-secondary" style="background-color: #448239;">
                    {{ v.company.name }}
                </span>
                <span> / </span>
                <span class="badge badge-pill badge-secondary" style="background-color: #448239;">
                    {{ v.type }}
                </span>
                <p v-html="v.content"></p>
                <ul class="fh5co-social">
                    <i v-for="(t, i) in v.technologies" :key="i" :class="t.icon"
                        style="font-size:30px;margin-right:15px">
                    </i>
                </ul>
                <p>
                    <button class="btn btn-md btn-primary" style="border-radius: 9999px;" @click="onClickEvent(v.id)">
                        Learn More
                    </button>
                </p>
                <hr class="nb nc nd am" aria-hidden="true">
            </div>
        </div>
    </div>

</template>
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