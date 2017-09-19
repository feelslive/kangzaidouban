<template>
	<div class="mt200">
		<scroller title="影院热映"  type ='scroller' :items='asyncData'></scroller>
		<scroller title="免费在线观影" type ='scroller' :items='freeData'></scroller>
		<scroller title="新片速递" type ='scroller' :items='newMovie'></scroller>		
		<scroller title="发现好电影"  type ='onlyString' :items='movieTags'></scroller>
		<types></types>
	</div>
	
</template>

<script>
import scroller from '../components/scroller'
import types from '../components/Types'
export default{
	data(){
		return {
			asyncData: '',
			freeData:'',
			newMovie:''	,
			movieTags: [
		    {
		      title: '同时入选IMDB250和豆瓣电影250的电影',
		      href: 'https://m.douban.com/doulist/968362/',
		      color: '#FFAC2D'
		    },
		    {
		      title: '带你进入不正常的世界',
		      href: 'https://m.douban.com/doulist/16002',
		      color: '#FF4055'
		    },
		    {
		      title: '用电【影】来祭奠逝去的岁月',
		      href: 'https://m.douban.com/doulist/190343',
		      color: '#4F9DED'
		    },
		    {
		      title: '女孩们的故事【电影】',
		      href: 'https://m.douban.com/doulist/1125971',
		      color: '#FFC46C'
		    },
		    {
		      line: true
		    },
		    {
		      title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
		      href: 'https://m.douban.com/doulist/4253902',
		      color: '#2384E8'
		    },
		    {
		      title: '美国生活面面观',
		      href: 'https://m.douban.com/doulist/121326',
		      color: '#3BA94D'
		    },
		    {
		      title: '2015终极期待',
		      href: 'https://m.douban.com/doulist/37479562',
		      color: '#42BD56'
		    },
		    {
		      title: '经典韩国电影——收集100部',
		      href: 'https://m.douban.com/doulist/458087',
		      color: '#CC3344'
		    }
		  ]
		}
	},
	components:{scroller,types},
	computed:{    	
	},
	created(){		
			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters?count=8'
			).then((response)=>{	
				this.asyncData=eval("("+response.bodyText+")").subjects;
				console.log(this.asyncData);
			});
			
			this.$http.jsonp('https://api.douban.com/v2/movie/coming_soon?count=8'
			).then((response)=>{	
				this.freeData=eval("("+response.bodyText+")").subjects;								
			});
			
			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=8'
			).then((response)=>{	
				this.newMovie=eval("("+response.bodyText+")").subjects;								
			});
	}		
}
</script>

<style lang="less">
	.mt200{margin-top:60px ;}
</style>