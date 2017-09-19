<template>
  <div id="app">
    <v-head  @showTalion="open"></v-head>
    <tl v-if='talion' @closeTalion="close"></tl>
    <router-view></router-view>     
   
  </div>
</template>
<script>
import vHead from './components/header'
import tl from "./page/TalionView"	
export default {
  name: 'app',
  components:{vHead,tl},
  data(){
  	return{
  		talion:false
  	}
  },
  methods:{
	 	open(){
	 		this.talion=true;
	 	},
	 	close(){
	 		this.talion='';
	 	}
	}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  font-size: 62.5%;
}

#app {
  max-width: 41.2rem;
  margin: 0 auto;
}

.has-header {
  margin-top: 4.8rem;
}

h2 {
  font-size: 1.68rem;
  font-weight: normal;
  color: #111;
}

ul, li, a, h2 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.header-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 998;
  display: flex;
  align-items: center;
  height: 4.8rem;
  padding: 0 1.8rem;
  background: #fff;
  border-bottom: 0.1rem solid #f3f3f3;
}
</style>
