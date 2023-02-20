<template>
    <div class="col-md-6 col-lg-3 d-flex">
        <div class="align-self-stretch box p-4 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
                <span :class="item.icon"></span>
            </div>
            <h3 class="mb-4">{{item.name}}</h3>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>
      </div>
</template>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: 'TechnologiesUsedInProject',
    props:{
        item:{
            type: Object
        }
    },
    data() {
        return {
            txtTechnology: VueI18n.tc('pages.projectDetails.technologies')
        }
    }
}
</script>