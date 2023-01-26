<template>
    <div class="col-md-12 animate-box fh5co-text" data-animate-effect="fadeInLeft" style="margin-bottom: 50px;">
        <h3 class="fh5co-heading-colored">{{ title }}</h3>
        <div class="service_icon row">
            <div v-for="(v, i) in items" :key="i" class="col-md-2" style="margin: 20px;">
                <i :class="v.icon" style="font-size:80px;margin: 15px;"></i>
            </div>
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
