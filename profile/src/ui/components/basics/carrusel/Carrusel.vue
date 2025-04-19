<script src="./carrusel.js"></script>
<style src="./carrusel.css"></style>
<template>
	<div class="slider">
		<div class="slide-track">
			<div class="slide" v-for="(v,i) in values" :key="i">
				<img :src="v.icon" height="100" width="100" alt="" />
			</div>
		</div>
	</div>
</template>