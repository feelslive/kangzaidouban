<template>
	<div class="list">
		<ul>
			<router-link tag='li' :to="'detail/' + item.id" v-for="(item,index) in items" key='index'>
				<div class="clearfix">
					<div class="fl list-text">
						<h4>{{item.title}}</h4>
						<p>{{item.content | subStr}}</p>
						
					</div>
					<div class="fr list-img">
						<img :src="item.image_hlarge" alt="cover">
					</div>
				</div>
				<div class="list-tag">
					<span class="fl">{{item.subcategory_name}}</span>
					<span class="fr">{{item.tags}}</span>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{		
		data(){
			return{
				items:[],
				isShow:false
			}
		},
		mounted(){
			var _this=this;
			let i=3;
			window.addEventListener('scroll',function(){ 
				i+=3;
				
                if(document.body.scrollTop + window.innerHeight >= document.body.offsetHeight) {
                	_this.isShow=true;
			       _this.$emit('isL',_this.isShow);
                	_this.$http.jsonp('https://api.douban.com/v2/event/list?loc=108288',{params:{
                		start:i,
                		count:3
                	}                		               	
					}).then((response)=>{
						 JSON.parse(response.bodyText).events.forEach(function(val,index){  
                                    _this.items.push(val); 
                                   
                        });  
                      _this.isShow=false;
                      _this.$emit('isL');
					},function(error){
						console.log(error);
					});
                }
            })    
		},
		created(){		
			var that=this;
			this.$http.jsonp('https://api.douban.com/v2/event/list?loc=108288&start=1&count=3',
			).then((response)=>{
				var data=eval("(" + response.bodyText + ")");
				console.log(data.events);
				that.items=data.events;				
			},function(error){
				console.log(error);
			});
			
		},
		filters: {
		  subStr: function (value) {
		    let newVal = value.replace(/<.*?>/g, '')
		    return newVal.slice(0, 30)
		  }
		},
	    methods:{
	    	
	    }
	}
</script>

<style lang='less'>
	.clearfix:after{content:".";display:block;height:0;clear:both;visibility:hidden;overflow: auto;}
  
	.fl{float: left;}
	.fr{float: right;}
	.list{
		width: 90%;
		margin: 20px auto;
		
		ul{
			li{
				border-bottom: 1px solid #ddd;
				margin-bottom: 20px;
				height: 170px;
				.list-tag{
					margin-top: 20px;
					color: #aaa;
				}
				.list-text{
					width: 70%;
					margin-right: 3%;
					h4{
						    margin-top: 0;
						    margin-bottom: 0.6rem;
						    line-height: 1.41;
						    text-align: justify;
						    font-size: 1.7rem;
						    font-weight: 500;
						    color: #494949;
					}
					p{
						    line-height: 1.5;
						    text-align: justify;
						    color: #aaa;
						    font-size: 1.2rem;
						    overflow: hidden;
					}
				}
				.list-img{
					width: 25%;
					img{width: 100%;display: block;height: 100px;}
					
				}
			}
		}
	}
</style>