<template>
    <div class="col-md-2 text-center d-flex">
        <a class=""> <!-- services-1 -->
            <span class="icon">
                <img :src="item.icon" :style="styleCss">
            </span>
        </a>
    </div>
</template>
<script>
export default {
    name: "Skillsitems",
    props: {
        item: {
            type: Object
        },
        styleCss:{
            type: String
        }
    }
};
</script>
