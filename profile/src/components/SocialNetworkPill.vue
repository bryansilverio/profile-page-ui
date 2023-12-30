<template>
    <nav class="flex gap-4 mt-8 flex-wrap">>
        <a v-for="(v, i) in socialNetworks" :key="i"
            class="bg-blue-900 border border-white/10 text-white rounded-full flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-xs md:text-base transition hover:scale-110 hover:bg-white/10"
            :href="v.url" target="_blank" rel="noopener noreferrer">
            <MilIcon v-if="v.id == 'EMAIL'" />
            <LinkedInIcon v-else-if="v.id == 'LINKEDIN'" />
            <WordpressIcon v-else-if="v.id == 'WORDPRESS'" />
            <GitHubIcon v-else-if="v.id == 'GITHUB'" />
            {{ v.name }}
        </a>
    </nav>
</template>
<script>
import MilIcon from "@/components/icons/MailIcon.vue"
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue"
import WordpressIcon from "@/components/icons/WordpressIcon.vue"
import GitHubIcon from "@/components/icons/GitHubIcon.vue"
import listSocialNetworkService from "@/services/socialNetworks/listSocialNetworkService.js"
export default {
    name: "SocialNetworkPill",
    components: {
        MilIcon,
        LinkedInIcon,
        WordpressIcon,
        GitHubIcon
    },
    mixins: [listSocialNetworkService],
    computed: {
        socialNetworks() {
            return this.executeListSocialNetworks();
        }
    }
};
</script>