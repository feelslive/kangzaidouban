<template>
	<div>
		<subsnav></subsnav>
		<list @isL='isLoding'></list>
		<loading v-if='ishow'> </loading>
	</div>
</template>

<script>
import subsnav from "../components/subsnav"	
import list from "../components/list"
import loading from "../components/loading"	

export default{
	 name:"home",
	 data(){
	 	return{
	 		ishow:false,	 	
	 	}
	 },
	 components:{subsnav,list,loading},
	 methods:{
	 	isLoding(msg){
	 	   this.ishow=msg;
	 	}	 
	 }
}
</script>

<style>
</style>