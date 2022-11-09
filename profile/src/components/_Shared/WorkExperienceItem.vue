<template>
    <div class="work_experience">
        <div class="row">
            <div class="col-lg-12" v-for="(v, i) in workExperiences" :key="i" style="cursor: pointer">
                <div class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn"
                    data-wow-duration="1.3s" data-wow-delay="0.2s"
                    style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.2s; animation-name: fadeIn;">
                    <div :class="'experience_title text-lg-right'">
                    </div>
                    <div class="experience_number">
                        <span>{{ v.number }}</span>
                    </div>
                    <div :class="'experience_content '">
                        <h3 class="title" style="color: #fff">
                            <i class="lni lni-briefcase" style="color: #fff"></i> {{ v.position }}
                        </h3>
                        <div>
                            <table>
                                <tr>
                                    <td rowspan="2">
                                        <avatar :image="v.logo" :size="50" color="white"></avatar>
                                    </td>
                                    <td>
                                        <span class="company_name" style="margin-right: 5px;color: #fff">
                                            <i class="lni lni-apartment" style="color: #fff"></i> {{ v.company }}
                                        </span>
                                        <br>
                                        <span class="company_date" style="color: #fff">
                                            <i class="lni lni-calendar" style="color: #fff"></i> {{ v.date }}
                                        </span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div v-html="v.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
import Avatar from 'vue-avatar-component'
export default {
    name: "WorkExperienceItem",
    components: { Avatar },
    props: {
        workExperiences: Array
    },
    data() {
        return {
            positionItems: [
                {
                    title: 'text-lg-right',
                    content: ''
                },
                {
                    title: 'order-last',
                    content: 'order-first'
                }
            ]

        };
    },
    methods: {
        getPosition(i = 0) {
            let index = (i % 2) == 0 ? 1 : 0;
            return this.positionItems[index].title
        },
        getContent(i = 0) {
            let index = (i % 2) == 0 ? 1 : 0;
            return this.positionItems[index].content
        }
    }
};
</script>
  