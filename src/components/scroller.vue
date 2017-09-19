<template>
	<div class="scoller">
		<div class="header">
			<h1>{{title}}</h1>
			<a href="/">更多</a>		
		</div>
		<div class="over-auto">
			<ul class="movie" v-if="type === 'scroller'">				
			<router-link  tag='li' :to="'subject/' + item.id"  v-for='item in items' key=item.id>						   
					<img v-if='item.images' :src="item.images.large">
					<span v-if='item.images'>{{item.title}}</span>	
					<!-- <a  v-if='item.href' href="item.href">{{item.title}}</a> -->
					<rating v-if='item.rating' :rating="item.rating"></rating>
			</router-link>
		</ul>
		
		<ul class="onlyString" v-if="type === 'onlyString'">
        <li v-for="item in items" style="border-color: #FFAC2D;">
          <a :href="item.href" v-if="!item.line" :style="{color: item.color}">{{item.title}}</a>
        </li>
      </ul>
		</div>
	</div>
</template>

<script>
import rating from './rating'
	export default {
		name: 'scoller',
		props: ['title','type','items'],
		data() {
			return {

			}
		},
		components:{
			rating
		}
	}
</script>

<style lang='less' scoped>
	.scoller {
		margin: 0 auto;
		overflow: hidden;
		.header{
			line-height: 30px;
			h1{display: inline-block;float: left;font-weight:normal ;font-size:16px ;}
			a{float: right;line-height: 52px;}
			
		}
		.over-auto{
			width: 100%;
			overflow-x: auto;				
			.movie{
				width: 280%;
				display: block;
				overflow: auto;
				white-space: nowrap;
				text-align: center;
				li{
					width: 11.6%;
					float: left;
					display: block;
					margin-left: 5px;
					overflow: hidden;
					img{
						width: 100%;
						height:15rem;
						display: block;
						
					}	
					a{
						
					}				
					span{
						display: inline-block;
					    max-width: 100%;
					    margin-top: 1rem;
					    line-height: 1.6rem;
					    font-size: 1.6rem;
					    color: #111;
					    overflow: hidden;
					    text-overflow: ellipsis;
					    white-space: nowrap;
					    word-wrap: normal;
					}
				}
			}
			
				.onlyString{
				 	    overflow-x: auto;
              white-space: nowrap;
						 	li{
						 		 padding: 0.5rem 5rem;
							 		display: inline-block;
							    margin: 0 0 0.8rem 1.6rem;
							    font-size: 1.6rem;
							    border: solid 0.1px #ddd;
							    border-radius: 0.4rem;
							    vertical-align: middle;
							    a{
							    height: 5rem;
							    line-height: 5rem;
							    padding: 0 2.4rem;
							    letter-spacing: 0.16rem;
							    overflow: auto;
							    display: block;
							    text-align: center;
							  }
				 	}
				 	 li:empty {
					    width: 100%;
					    display: block;
					    height: 0.1rem;
					    border: 0;
					    margin: 0;
					  }
				 }			
		}
}
</style>