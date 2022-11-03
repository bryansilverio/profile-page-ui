<template>
    <!--====== FOOTER PART START ======-->

    <footer id="footer" class="footer_area gray-bg pt-30 pb-20 bg-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h5 class="sub_title_footer">Sobre mi</h5>
                    <p class="content_footer">
                        El motivo de este sitio crecer como profesional
                        dentro de la industria del desarrollo del software.
                    </p>
                </div>
                <div class="col-lg-3">
                    <h5 class="sub_title_footer">Enlaces</h5>
                    <ul class="footer_menu">
                        <li v-for="(v, i) in paths" :key="i">
                            <a :href="v.url" class="content_footer sub_title_footer">
                                {{ v.name }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h5 class="sub_title_footer">Otros enlaces</h5>
                    <a href="https://bssilverio.wordpress.com/" target="_blank" class="content_footer">Wordpress</a>
                </div>
                <div class="col-lg-3">
                     
                    <div class="footer_content">
                        <h5 class="sub_title_footer">Contacto</h5>
                        <ul class="footer_social">
                            <li v-for="(v, i) in socialNetwork" :key="i">
                                <a :href="v.url" target="_blank">
                                    <i :class="v.icon"></i>
                                </a>
                            </li>
                        </ul>

                    </div> <!-- footer content -->
                </div>
            </div> <!-- row -->

            <div class="row">
                <div class="col-lg-12">
                    <p  style="align-items: center;" class="credit pt-45">Designed and Developed by <a href="" rel="nofollow"></a></p>
                </div>
            </div>

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
  