<template>
    <div class="col-md-12">
        <div class="fh5co-feature animate-box" data-animate-effect="fadeInLeft">
            <div class="fh5co-icon text-animation">
                <i :class="icon"></i>
            </div>
            <div class="fh5co-text">
                <h3 class="text-animation">{{ title }}</h3>
                <p style="font-size: small;" class="text-animation">{{ description }}</p>
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
<style>
.text-animation{
    animation: fadein 6s;
    -moz-animation: fadein 6s; /* Firefox */
    -webkit-animation: fadein 6s; /* Safari and Chrome */
    -o-animation: fadein 6s; /* Opera */
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}
</style>
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
