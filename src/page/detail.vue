<template>
	<div class="detailbox">
		<div class="info">
			<h2>{{items.title}} <span class="badge">{{items.loc_name}}</span></h2>
			<div class="poster">
				<img :src="items.image_hlarge" alt="">
			</div>
			<div class="detail">
				<span>时间: </span>
				<ul>
					<li>{{items.begin_time}}</li>
					<li>{{items.end_time}}</li>
				</ul>
			</div>
			<div class="detail">
				<span>地点: </span>
				<ul>
					<li>{{items.address}}</li>
				</ul>
			</div>
			<div class="detail">
				<span>费用: </span>
				<ul>
					<li>{{items.fee_str}}</li>
				</ul>
			</div>
			<div class="detail">
				<span>类型: </span>
				<ul>
					<li>{{items.category_name}}</li>
				</ul>
			</div>
			<div class="detail">
				<span>起始时间: </span>
				<ul>
					<li>{{name}}</li>
				</ul>
			</div>
			<tags :items="tags | toArray"></tags>
			<!-- <div class="tags">
				<ul>
					<li v-for='(item,index) in items.tags'>
						<a href="#">{{item}}</a>
					</li>
				</ul>
			</div> -->
			<!-- 活动详情 -->
			<div class="describe">
			<h2>活动详情</h2>
			<div class="content">
				<p v-html='items.content'></p>
			</div>
				
			</div>
		</div>
		
	</div>
</template>
<script>
	import tags from '../components/Tags'
	export default {
		name:'detail',
		data () {
			return {
				items:"",
				name:"",
				tags:""
			}
		},
		components:{
			tags
		},
		created(){
			let id = this.$route.params.id;
			this.$http.jsonp('https://api.douban.com/v2/event/'+id).then((response)=>{
            console.log(response)
            this.items = response.body
            this.name = response.body.owner.name
            this.tags = response.body.tags
			},function(err){
				console.log(err)
			})

		},
		filters: {
		  substr: function (value) {
		    let newVal = value.replace(/<.*?>/g, '')
		    return newVal;
		  },
		  toArray (value) {
		      return value.split(',')
		  }
		}
	}
</script>
<style lang='less' scoped>
.detailbox {
	margin-top: 58px;
	.info{
		margin:0 1rem 1rem;
		padding-top: 1rem;
		h2 {
			margin: 2rem 0;
		    font-weight: 700;
		    color: #494949;
		    .badge {
		    	display: inline-block;
			    padding: .1rem .5rem;
			    margin-bottom: .3rem;
			    vertical-align: middle;
			    line-height: 1.8rem;
			    font-size: 1.2rem;
			    color: #fff;
			    background-color: #ff8263;
			    border-radius: .2rem;
		    }
		}
		.poster {
			margin: 2rem auto;
    		text-align: center;
    		img {
    			width: 100%;
			    max-width: 22rem;
			    height: auto;
    		}
		}
		.detail {
			margin-left: 3.3rem;
		    margin-bottom: 1rem;
		    min-height: 1.5em;
		    font-size: 1.4rem;
		    clear: left;
		    span {
		    	float: left;
				margin-left: -3.3rem;
				line-height: 150%;
				color: #666;
		    }
		}
		.tags {
			li {
				display: inline-block;
			    margin: 1rem 1rem 0 0;
			    font-size: 1.5rem;
			    a {
			    	display: block;
				    padding: 0 1.2rem;
				    line-height: 2.8rem;
				    font-size: 1.5rem;
				    border-radius: 2.8rem;
				    text-align: center;
				    color: #494949;
				    background: #f5f5f5;
			    }
			}
		}
		.describe {
			h2 {
				color: #072;
			}

		}
		.content {
			overflow: hidden;
			font-size: 1.4rem;
		}
	}
}

	
</style>