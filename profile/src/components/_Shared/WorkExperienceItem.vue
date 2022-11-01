<template>
    <div class="work_experience">
        <div class="row" v-for="(v, i) in workExperiences" :key="i">
            <div class="col-lg-12">
                <div class="single_experience d-lg-flex align-items-center flex-wrap wow fadeIn"
                    data-wow-duration="1.3s" data-wow-delay="0.2s"
                    style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.2s; animation-name: fadeIn;">
                    <div :class="'experience_title ' + getPosition(i)">
                        <h3 class="title">{{ v.position }}</h3>
                        <p>{{ v.company }}</p>
                        <span class="date">{{ v.date }}</span>
                    </div>
                    <div class="experience_number">
                        <span>{{ v.number }}</span>
                    </div>
                    <div :class="'experience_content ' + getContent(i)">
                        <p>{{ v.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "WorkExperienceItem",
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
  