<template>
    <ul :class="classCss">
        <li v-for="(v, i) in socialNetworkItems" :key="i">
            <a :href="v.url" target="_blank">
                <i :class="v.icon" style="color: #fff;"></i>
            </a>
        </li>
    </ul>
</template>
<script>
import social_network_data from "@/data/social-network.json";
export default {
    name: "SocialNetworkItem",
    props: {
        classCss: {
            type: String,
            default: ""
        }
    },
    computed: {
        socialNetworkItems() {
            return social_network_data;
        }
    }
}
</script>