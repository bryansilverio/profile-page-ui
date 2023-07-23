export default {
	data(){
		return {
			endpoint:"sites/bryansilverio.wordpress.com/posts",
			posts:[],
			postDetail:{
				title:"",
				content:"",
				date:"",
				thumbnails:{
					thumbnail:"",
					medium:"",
					large:""
				}
			}
		}
	},
	methods: {
		async executeFindPostWordpress() {
			const response = await fetch(process.env.VUE_APP_ROOT_WORDPRESS_API+this.endpoint);
			const records = await response.json();
			this.posts=records.posts;
		}
	}
};