<template>
	<!-- 注册账户 -->
	<div class="register-view">
		<h1 class="title">欢迎加入豆瓣</h1>
		<form>
			<div class="form-alias">
				<label>
					<strong>邮箱</strong>
					<input type="email" name='email' placeholder="邮箱">
				</label>
			</div>
			<div class="form-pwd">
				<label>
					<strong>密码</strong>
					<template v-if="passType === 'password'">
		                <input
		                v-model.trim="pass"
		                type="password"
		                name="pass"
		                placeholder="密码">
	              </template>
	              <template v-if="passType === 'text'">
		                <input
		                v-model.trim="pass"
		                type="text"
		                name="pass"
		                placeholder="密码">
	              </template>
					<span class='show-pwd' :class="{show: isShow}" @click='showpwd()'></span>
				</label>
			</div>
			<div class="form-name">
				<label>
					<strong>用户名</strong>
					<input type="text" name='name' placeholder="用户名">
				</label>
			</div>
			<div class="form-submit">
				<button :disabled="isDisabled" class="submit">立即注册</button>
			</div>
		</form>
		<div class="footer">
			<div class="agreement">
				点击「注册」代表你已阅读并同意用户使用协议
			</div>
			<div class="btns">
				<router-link to="/">下载豆瓣App</router-link>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name:'register',
	data(){
		return{
			isShow: 0,
			pass: '',
			passType:'password',
			isDisabled: false
		}
	},
	methods:{
		showpwd(){
			this.isShow = this.isShow ? 0 : 1
      		this.isShow ? this.passType = 'text' : this.passType = 'password'
		}
	}
}
	
</script>
<style lang='less' scoped>
	.register-view {
		h1 {
			margin: 20% 0 9%;
		    font-size: 4rem;
		    font-weight: 300;
		    color: #42bd56;
		    text-align: center;
		}
		form {
			padding: 2rem 1.5rem;
			.form-pwd {
				position: relative;
				.show-pwd {
				position: absolute;
			    right: 0.2rem;
			    top: 0;
			    display: block;
			    height: 100%;
			    width: 3.2rem;
			    background:url('../../static/img/close.png');
			    background-repeat: no-repeat;
			    background-position: center center;
			    background-size: 2.2rem;
			    z-index: 3;
				}
				.show {
					position: absolute;
				    right: 0.2rem;
				    top: 0;
				    display: block;
				    height: 100%;
				    width: 3.2rem;
        			background:url('../../static/img/open.png');
        			background-repeat: no-repeat;
				    background-position: center center;
				    background-size: 2.2rem;
				    z-index: 3;
     			}

			}
			strong {
				font-size: 1.5rem;
			    color: #222;
			    display: none;
			    margin-bottom: 0.5rem;
			}
			input {
				display: inline-block;
			    width: 100%;
			    height: 4.4rem;
			    padding: 0 0.8rem;
			    box-sizing: border-box;
			    font-size: 1.5rem;
			    background: #fff;
			    border: 0.1rem solid #ccc;
			    border-top-left-radius: 0.3rem;
			    border-top-right-radius: 0.3rem;
			    outline: 0;
			}
			.submit {
				cursor: pointer;
			    width: 100%;
			    padding: 1.2rem 2.6rem;
			    margin-top: 1rem;
			    font-size: 1.7rem;
			    text-align: center;
			    color: #fff;
			    background: #42bd56;
			    border: 0.1rem solid #17AA52;
			    border-radius: 0.3rem;
			}
		}
		.agreement {
			font-size: 1.4rem;
		    color: #aaa;
		    text-align: center;
		}
		.btns {
			margin-top: 4rem;
		    text-align: center;
		    font-size: 1.5rem;
			a{
				color: #42bd56;
    			margin-right:1.5rem;
			}
		}
	}
</style>