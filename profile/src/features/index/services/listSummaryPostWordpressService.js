export default {
	data(){
		return {
			endpoint:"sites/bryansilverio.wordpress.com/posts",
			posts:[]
		}
	},
	methods: {
		async executeListPostWordpress() {
			const response = await fetch(process.env.VUE_APP_ROOT_WORDPRESS_API+this.endpoint);
			const records = await response.json();
			this.posts=records.posts.slice(0,3);
		}
	}
};