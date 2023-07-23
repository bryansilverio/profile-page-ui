<template>
	<div class="mb-5 resume-wrap col-md-4">
        <div class="row">
            <div class="col-md-12">
                <h5 
                    class="fw-bold" 
                    style="
                        text-align: left;
                        font-size:20px;
                        word-wrap: break-word;
                        white-space: normal;" v-html="item.title">
                </h5>
                <small style="font-weight: 500;">{{new Date(item.date).toLocaleString()}}</small>
                <p class="mt-2" style="font-size: small;" v-html="item.excerpt"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <a 
                    :href="item.URL"
                    target="_blank" 
                    style="cursor: pointer;"
                    class="btn btn-white btn-outline-white btn-block">
                    Ver post
                </a>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default{
	name:"PostItem",
	props:{
		item:{
			type: Object
		}
	}
}
</script>