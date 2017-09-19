<template>
	<div class="subsnav">
		
		<div class="quick-nav">
			<ul>
				<li>
					<router-link to='/'>影院热映</router-link>
				</li>
				<li>
					<router-link to='/'>欧美新跌帮</router-link>
				</li>
				<li>
					<router-link to='/register' target="_blank">注册新账号</router-link>
				</li>
				<li>
					<router-link to='/'>登陆豆瓣</router-link>
				</li>				
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'subsnav',
		data(){
			return{
				
			}
		}		
	}
</script>

<style lang="less">
	.quick-nav{
		width: 94%;
		margin:0 auto;
		margin-top: 68px;		
		ul{
			display:flex;
			justify-content: space-between;
			flex-wrap:wrap;			
			li{
				width: 49%;
				margin-top: 10px;
				border-radius:3px;
				background-color: #F6F6F6;
				color: #000;
				font-size: 15px;
				text-align: center;
				line-height: 50px;
				a {
					background-color: #f6f6f6;
				    color: #494949;
				    display: block;
				    text-align: center;
				    line-height: 20px;
				    padding: 12px 0;
				    border-radius: 2px;
				    max-width: 100%;
				    overflow: hidden;
				    text-overflow: ellipsis;
				    white-space: nowrap;
				    word-wrap: normal;
				}
			}
		}
	}
</style>