<template>
    <!--====== FOOTER PART START ======-->

    <footer id="footer" class="footer_area gray-bg pt-115 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer_content text-center">
                        <a href="#"><img src="assets/images/logo.svg" alt="Logo"></a>
                        <ul class="footer_social">
                            <li v-for="(v, i) in socialNetwork" :key="i"><a :href="v.url" target="_blank"><i
                                        :class="v.icon"></i></a>
                            </li>
                        </ul>
                        <span class="email">someone@example.com</span>
                        <ul class="footer_menu">
                            <li v-for="(v, i) in paths" :key="i"><a :href="v.url">{{ v.name }}</a></li>
                        </ul>
                        <p class="credit pt-45">Designed and Developed by <a href="" rel="nofollow"></a></p>
                    </div> <!-- footer content -->
                </div>
            </div> <!-- row -->
        </div> <!-- container -->
    </footer>

    <!--====== FOOTER PART ENDS ======-->
</template>
<script>
import menu_data from '@/data/menu.json'
import social_network_data from '@/data/social-network.json'
export default {
    name: "Footer",
    computed: {
        paths() {
            return menu_data
        },
        socialNetwork() {
            return social_network_data
        }
    }
};
</script>
  