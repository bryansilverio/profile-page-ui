<template>
    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft" style="margin-bottom: 50px;">
        <h1 class="fh5co-heading-colored">{{ title }}</h1>
        <div class="service_icon">
            <i v-for="(v, i) in items" :key="i" :class="v.icon" style="font-size:50px;margin-right: 15px;"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: "Skillsitems",
    props: {
        items: {
            type: Array
        },
        title: {
            type: String,
            default: ""
        }
    }
};
</script>
