<template>
<div class="slider">
	<div class="slide-track">
		<div class="slide" v-for="(v,i) in values" :key="i">
			<img :src="v.icon" height="100" width="100" alt="" />
		</div>
	</div>
</div>
</template>
<style>
@mixin white-gradient {
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);
}

@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(calc(-250px * 7));
	}
}

.slider {
	/*background: white;*/
	box-shadow: 0 10px 20px -5px rgba(139, 20, 20, 0.125);
	height: 100px;
	margin: auto;
	overflow: hidden;
	position: relative;
	width: 760px;

	&::before,
	&::after {
		@include white-gradient;
		content: "";
		height: 100px;
		position: absolute;
		width: 200px;
		z-index: 2;
	}

	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}

	.slide-track {
		animation: scroll 40s linear infinite;
		display: flex;
		width: calc(250px * 14);
	}

	.slide {
		height: 100px;
		width: 250px;
	}
}
</style>
<script>
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n-pico'

export default defineComponent({
    name: "Carrusel",
    props: {
        values: {
            type: Array
        }
    },
    setup() {
        const { t } = useI18n()
        return { t }
    }
});
</script>