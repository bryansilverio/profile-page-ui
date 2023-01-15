<template>
    <div class="col-md-12">
        <div class="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
            <div class="fh5co-icon">
                <i :class="icon"></i>
            </div>
            <div class="fh5co-text">
                <h3>{{ title }}</h3>
                <p style="font-size: small;">{{ description }}</p>
                <p>
                    <button class="btn btn-md btn-primary" style="border-radius: 9999px;" @click="onClick(url)">
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
    name: 'HomeCardPageLink',
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        description: {
            type: String,
            default: ''
        },
        url: {
            type: String,
            default: ''
        }
    },
    methods: {
        onClick(url) {
            this.$router.push(url)
        }
    }
}
</script>
