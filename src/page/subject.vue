<template>
	<div class="movie-detail">
		 <h2 class="title">{{item.title}}</h2>
		 <div class="conetnt">
		 	   <div class="left">
		 	   	<h6>{{item.ratings_count}}</h6>
		 	   	<p>{{name}}</p>
		 	   	<a href="">用app查看影人资料</a>
		 	   </div>
		 	   <div class="right">
		 	   	 <img :src="item.images.large">
		 	   </div>
		 </div>
		 <div class="look">
		 	<a class="yes-look">想看</a>
		 	<a class="no-look">看过</a>
		 </div>
		 <div class="intruduce">
		 	<h2>{{item.title}}的简介</h2>
		 	<p>{{aaa?item.summary:summay}}<a v-if="zks" @click="zhankai">展开</a></p>
		 </div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			item:"",
			name:'',
			summay:'',
			aaa:false,
			zks:true
		}
	},
	created(){
		var id = this.$route.params.id;
		this.$http.jsonp('https://api.douban.com/v2/movie/subject/'+id,
			).then((response)=>{
				var data=eval("(" + response.bodyText + ")");
				console.log(data.title);
				this.item=data;	
				this.name=data.year+"/"+data.countries+"/"+data.genres+"/";
				var _this=this;
				console.log(data.casts[0].name);
				for(let i=0;i<data.casts.length;i++){
					this.name+=data.casts[i].name+    ' / '    ;
				}				
				let newVal = data.summary.replace(/<.*?>/g, '');
		        this.summay=newVal.slice(0, 100);		        
			},function(error){
				console.log(error);
		});
		
		
	},
	methods:{	
		zhankai(){
			this.aaa?this.aaa=false:this.aaa=true;
			this.zks=false;
		}
	},
    filters: {
		   
	}
}
</script>

<style lang='less'>
	*{margin: 0;padding: 0;}
	.movie-detail{		
		width: 95%;
		margin: 0 auto;
		margin-top: 60px;
        overflow: auto;
		text-align: left;
		.title{
			text-align: left;
			margin-top: 20px;
			font-weight:bold ;
		}
		.conetnt{
			 display: flex;
			.left{
				width:65%;
				h6{line-height: 30px;font-size:14px ;font-weight: normal;}
				p{letter-spacing:4px;font-size:16px ;line-height: 30px;}
				a{color: #42bd56;font-size:16px;margin-top: 30px;display: block;}
			}
			.right{
				width: 35%;
				img{display: block;width: 100%;}
			}
		}
		.look{
			margin: 30px 0;
			display: flex;
			justify-content: space-between;
			a{width: 46%;display: block;border: 1px solid #ffb712;color: #ffb712;text-align: center;line-height: 36px;border-radius:3px;}			
		}
		.intruduce{
			h2{margin: 0 0 1.5rem; font-size: 1.5rem;color: #aaa;}
			p{    font-size: 1.5rem; color: #494949;
			a{
				color: #42bd56;
			}
			}
   
		}
	}
</style>