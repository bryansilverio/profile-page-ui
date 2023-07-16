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
		listPostsServices() {
			fetch(process.env.VUE_APP_ROOT_WORDPRESS_API+this.endpoint)
			.then(response=>response.json())
			.then(json=>this.posts=json.posts)
			.catch(error=>alert(error));
		},
		findPostsServicesById(id = 0) {
			fetch(process.env.VUE_APP_ROOT_WORDPRESS_API+this.endpoint+"/"+id)
			.then(response=>response.json())
			.then(json=>{
				this.postDetail.title=json.title;
				this.postDetail.content=json.content;
				this.postDetail.date=json.date;
			})
			.catch(error=>alert(error));
		}
	}
};