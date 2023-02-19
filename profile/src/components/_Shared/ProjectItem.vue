<template>
    <div class="col-md-4 d-flex">
        <div class="blog-entry justify-content-end">
          <a @click="goToProjectDetails(item.id)" class="block-20" style="background-image: url('assets/images/image_1.jpg');">
          </a>
          <div class="text mt-3 float-right d-block">
            <div class="d-flex align-items-center mb-3 meta">
                <p class="mb-0">
                    <span class="mr-2">{{item.position}}</span>
                </p>
            </div>
            <h3 class="heading"><a @click="goToProjectDetails(item.id)">{{item.name}}</a></h3>
            <p v-html="item.description.short"></p>
          </div>
        </div>
      </div>
</template>
<script>
import VueI18n from '@/translation/i18n'
export default {
    name: "ProjectItem",
    data() {
        return {
            company: VueI18n.tc('pages.projects.labelCompany'),
            position: VueI18n.tc('pages.projects.labelPosition'),
            seeMore: VueI18n.tc('pages.projects.seeMore')
        }
    },
    props: {
        item: {
            type: Object
        },
    },
    methods: {
        goToProjectDetails($id) {
            if ($id != null) {
                this.$router.push('/projects/' + $id).catch(error => {
                    if (
                        error.name !== 'NavigationDuplicated' &&
                        !error.message.includes('Avoided redundant navigation to current location')
                    ) {
                        /* eslint-disable no-console */
                        console.log(error)
                        /* eslint-enable no-console */
                    }
                })
            }
            else {
                this.$route.push({ path: '/404' })
            }
        },
        setUrlBase(image = '') {
            if (!image.includes(this.$url)) {
                return this.$url + '/' + image
            } else {
                return image
            }
        }
    },
}
</script>