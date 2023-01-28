<template>
    <div class="fh5co-card-title-page-small header-page" :style="styleObj">
        <div class="fh5co-narrow-content">
            <div class="owl-carousel-fullwidth animate-box" data-animate-effect="fadeInLeft">
                <div class="row">
                    <div class="col-md-6 col-sm-12 col-xs-12">
                        <h5 class="fh5co-heading-small">
                            <i :class="icon" style="font-size: 50px;"></i> {{ title }}
                        </h5>
                    </div>
                    <div class="item col-md-6 col-sm-12 col-xs-12">
                        <figure>
                            <img class="image-heading-small" src="assets/images/testimonial_person2.jpg" alt="">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@media only screen and (min-width: 768px) {
    .fh5co-heading-small {
        font-size: 25px;
    }

    .image-heading-small {
        margin-top: -30px;
        width: 60px;
        margin-left: 205px;
    }
}

.fh5co-heading-small {
    margin-top: -60px;
    font-size: 50px;
    margin-bottom: 1em;
}

.image-heading-small {
    margin-top: -86px;
    width: 100px;
    border-radius: 100px;
    text-align: end;
    margin-left: 160px;
}

.social-heading-small {
    margin-top: -50px;
}
</style>
<script>
export default {
    name: 'TitlePageSmall',
    props: {
        title: {
            type: String,
            default: ''
        },
        showLoader: {
            type: Boolean,
            default: true
        },
        icon: {
            type: String,
            default: ''
        }
    },
    computed: {
        styleObj() {
            return {
                position: 'fixed',
                top: '0',
                width: '100%',
                padding: '15px 20px',
                backgroundColor: '#FF4A57',
                fontSize: '20px',
                color: '#FFFFFF',
                zIndex: this.showLoader ? '0' : '99'
            };
        }
    }
}
</script>