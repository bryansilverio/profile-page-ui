<template>
	<div class="row justify-content-center py-5 mt-5">
		<div class="col-md-12 heading-section text-center">
			<h1 class="mb-4 title-text-color">{{title}}</h1>
		</div>
		<div class="col-md-10">
			<hr>
		</div>
		<p style="font-size:small;">{{textSection}}</p>
	</div>
</template>
<style>
	hr {
        margin-top: -1rem;
        margin-bottom: 1rem;
        border-top: 3px solid;
        color: #FF474C;
    }
    .title-text-color{
        color: #FF474C;
        font-size: 3vw;
        font-weight: 900;
    }
</style>
<script>
	export default{
		name:'SectionTitle',
		props:{
			title:{
				type: String,
				default:''
			},
			textSection:{
				type: String,
				default: ''
			}
		}
	}
</script>