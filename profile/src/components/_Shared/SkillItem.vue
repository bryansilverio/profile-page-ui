<template>
    <div class="col-md-3 text-center d-flex">
        <a class="services-1">
            <span class="icon">
                <!--<i :class="item.icon"></i>-->
                <img :src="item.icon" style="width:8.5rem;height: 8.5rem;">
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
    }
};
</script>
