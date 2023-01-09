<template>
    <div class="title-page-parent">
        <TitlePageLarge :title="title" :showLoader="showLoader" v-if="scrollValue < 200"
            :scrollValue="scrollValue" />
        <TitlePageSmall :title="title" :showLoader="showLoader" v-else :scrollValue="scrollValue" />
    </div>
</template>
<style>

</style>
<script>
import TitlePageLarge from '@/components/_Shared/TitlePageLarger'
import TitlePageSmall from '@/components/_Shared/TitlePageSmall'
export default {
    name: 'TitlePageParent',
    components: { TitlePageSmall, TitlePageLarge },
    props: {
        title: {
            type: String,
            default: ''
        },
        showLoader: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        scrollValue() {
            this.getScrollTopValue()
        }
    },
    data() {
        return {
            scrollValue: 0,
        }
    },
    created() {
        this.getScrollTopValue()
    },
    methods: {
        getScrollTopValue() {
            let thix = this
            window.onscroll = function () {
                thix.scrollValue = window.scrollY
            };
        }
    },
}
</script>