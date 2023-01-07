<template>

    <div style="margin-bottom: 50px;">
        <div class="fh5co-card animate-box cards-experience-item" v-for="(v, i) in items" :key="i" data-animate-effect="fadeInLeft">
            <h5>{{ v.position }}</h5>
            <h4>{{ v.company }}</h4>
            <small style="margin-top: -10px;">{{v.date}}</small>
            <p v-html="v.content"></p>
            <p><button class="btn btn-md btn-primary" style="border-radius: 9999px;">Learn More</button></p>
        </div>
    </div>
</template>
<script lang="js">
export default {
    name: "WorkExperienceItem",
    props: {
        items: Array
    }
};
</script>
  