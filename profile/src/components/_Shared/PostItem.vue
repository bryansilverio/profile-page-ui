<template>
	<div class="mb-5 resume-wrap col-md-4">
        <div class="row">
            <div class="col-md-10">
                <h5 
                    class="fw-bold" 
                    style="
                        text-align: left;
                        font-size:20px;
                        word-wrap: break-word;
                        white-space: normal;" v-html="item.title">
                </h5>
                <small style="font-weight: 500;">{{new Date(item.modified).toLocaleString()}}</small>
                <p class="mt-2" style="font-size: small;" v-html="item.excerpt"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <button 
                    @click="goToPostDetail(item.ID)" 
                    style="cursor: pointer;"
                    class="btn btn-white btn-outline-white btn-block">
                    Ver post
                </button>
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
	},
	methods:{
		goToPostDetail(id = 0){
            this.$router.push('/posts/'+id).catch(error => {
                if (
                    error.name !== 'NavigationDuplicated' &&
                    !error.message.includes('Avoided redundant navigation to current location')
                ) {
                    /* eslint-disable no-console */
                    console.log(error)
                    /* eslint-enable no-console */
                }
            });
        }
	}
}
</script>