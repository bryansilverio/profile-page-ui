<template>
    <div class="col-md-4 text-center d-flex">
        <a href="#" class="services-1">
            <span class="icon">
                <i :class="item.icon"></i>
            </span>
            <div class="desc">
                <h3 class="mb-5">{{item.type}}</h3>
            </div>
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
