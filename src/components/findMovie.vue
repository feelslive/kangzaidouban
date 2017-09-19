<template>
	<div class="findmovie">
		<div class="header">
			<h1>{{title}}</h1>
			<a href="/">更多</a>		
		</div>
		<div class="over-auto">
			<ul>
			<li v-for='item in items'>						   
					<img :src="item.images.large">
					<span>{{item.title}}</span>			
			</li>
		</ul>
		</div>
		
	</div>
</template>

<script>
</script>

<style lang='less'>
	.findmovie{
		width: 90%;
		margin: 0 auto;
		overflow: hidden;
		.header{
			line-height: 30px;
			h1{display: inline-block;float: left;font-weight:normal ;font-size:16px ;}
			a{float: right;line-height: 52px;}
			
		}
		.over-auto{
			ul{
			    overflow-x: auto;
                white-space: nowrap;
                li{
                	display: inline-block;
				    margin: 0 0 0.8rem 1.6rem;
				    font-size: 1.6rem;
				    border: solid 0.1rem;
				    border-radius: 0.4rem;
				    vertical-align: middle;
                }
			}	
		}
	}
</style>