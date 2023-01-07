<template>


    <div class="fh5co-flex-wrap">
        <div class="fh5co-card animate-box" @click="onClickEvent(v.id)" style="cursor: pointer;" v-for="(v, i) in items"
            :key="i" data-animate-effect="fadeInLeft">
            <h5>{{ v.name }}</h5>
            <h4>{{ v.company.name }}</h4>
            <p>{{ v.type }}</p>
            <small style="margin-top: -10px;">{{ v.date }}</small>
            <p v-html="v.content"></p>
            <ul class="fh5co-social">
                <i v-for="(t, i) in v.technologies" :key="i" :class="t.icon" style="font-size:20px;margin-right:15px">
                </i>
            </ul>
            <p><a href="#" class="btn btn-md btn-primary">Learn More</a></p>
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