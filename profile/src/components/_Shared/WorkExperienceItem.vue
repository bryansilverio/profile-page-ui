<template>
    <li class="timeline-item mb-5">
        <div class="resume-wrap">
            <span class="timeline-icon">
                <i class="icon-briefcase text-primary fa-sm fa-fw"></i>
            </span>
            <h5 class="fw-bold">
                {{item.position}} - {{item.company}}
            </h5>
            <p class="text-muted mb-2 fw-bold">{{item.date}}</p>
            <p class="text-muted" style="font-size: small;" v-html="item.content"></p>
        </div>
    </li>
    <!--
    <div class="resume-wrap">
        <span class="date">{{item.position}}</span>
        <h2>{{item.company}}</h2>
        <span class="position">{{item.date}}</span>
        <p class="mt-4" style="font-size: small;" v-html="item.content"></p>
    </div>
    -->
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
