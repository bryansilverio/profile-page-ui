<template>
    <div id="overlay" style="display: block;">
        <div style="text-align: center;margin-top: 250px;">
            <img src="assets/images/loading-gif.gif" width="50" alt="">
            <h5 class="text" style="margin-top: 20px;">Obteniendo datos...</h5>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Loader',
    props: {
        showLoader: {
            type: Boolean,
            default: false
        }
    }
}
</script>