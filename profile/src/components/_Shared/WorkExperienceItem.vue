<template>
    <div class="resume-wrap">
        <span class="date">{{item.position}}</span>
        <h2>{{item.company}}</h2>
        <span class="position">{{item.date}}</span>
        <p class="mt-4" style="font-size: small;" v-html="item.content"></p>
    </div>
</template>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: "WorkExperienceItem",
    data() {
        return {
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition')
        }
    },
    props: {
        item: Object
    }
};
</script>
