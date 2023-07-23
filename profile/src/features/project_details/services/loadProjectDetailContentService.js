import showdown from "showdown"

export default {
	data(){
		return{
			htmlContent:null
		}
	},
	methods: {
		getHtmlContent(url) {
			let path=process.env.VUE_APP_BASE_URL+url;
			fetch(path)
			.then((response)=> response.text())
			.then(text=>{
				const converter=new showdown.Converter();
				this.htmlContent=converter.makeHtml(text);
			});
		}
	}
};