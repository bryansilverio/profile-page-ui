<template>

    <div style="margin-bottom: 50px;">
        <div class="fh5co-feature animate-box cards-experience-item" v-for="(v, i) in items" :key="i"
            data-animate-effect="fadeInLeft">
            <div class="fh5co-icon">
                <img :src="v.logo" style="width: 100px;border-radius:100%" alt="">
            </div>
            <div class="fh5co-text">
                <h3>{{ v.position }}</h3>
                <span class="badge badge-pill badge-secondary" style="background-color: #448239;">{{ v.company }}</span>
                <span> / </span>
                <span class="badge badge-pill badge-secondary" style="background-color: #448239;">{{ v.date }}</span>
                <p v-html="v.content"></p>
                <p><button class="btn btn-md btn-primary" style="border-radius: 9999px;">Learn More</button></p>
                <hr class="nb nc nd am" aria-hidden="true">
            </div>
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
  