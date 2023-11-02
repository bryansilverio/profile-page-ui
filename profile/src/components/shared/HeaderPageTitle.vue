<template>
	<div class="row">
		<div class="col-lg-12" style="margin-top: 100px;">
			<h3 class="mb-4 mt-3">
				<span
					class="title-text-color"
					style="font-size:3rem" 
                    data-aos="fade-left">
                    {{ title }}
                </span>
            </h3>
        </div>
        <div class="col-md-10">
            <hr>
        </div>
        <p data-aos="fade-left">{{description}}</p>
    </div>
</template>
<script type="text/javascript">
	export default{
    name:'HeaderPageTitle',
    props:{
        title:{
            type: String
        },
        imageBackground:{
            type: String
        },
        description:{
            type: String
        }
    },
    methods:{
        setImageBackground(image){
            return "background-image: url("+image+");";
        }
    }
}
</script>