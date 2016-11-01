<template>
	<div>
		<div class="head">悦租账户登录<a class="fr" v-link="{path: '/home'}" style="font-size:12px;"><i class="i1"></i>返回</a></div>
		<form action="#"  method="get" id="loginForm" name="loginForm" @submit.prevent="checkUser">
			<div class="field autoClear">
				<div class="label">账户</div>
				<div class="field-control">
					<input type="text" v-model="passwordLogin.mobile" class="input-required" name="TPL_username" placeholder="手机号/邮箱/会员名" id="username">
				</div>
				<div v-show="passwordLogin.mobile.trim()" class="icon-clear"><i class="iconfont" @click="passwordLogin.mobile = ''">X</i></div>
			</div>
			<div class="field autoClear">
				<div class="label">登录密码</div>
				<div class="field-control">
					<input type="text" v-model="passwordLogin.password" class="input-required" name="TPL_username" placeholder="请输入密码" id="username">
				</div>
				<div v-show="passwordLogin.password.trim()" class="icon-clear"><i class="iconfont" @click="passwordLogin.password = ''">X</i></div>
			</div>
			<div class="submitDiv">
				<button type="submit" class="button" id="submit-btn" disabled="disabled">登 录</button>
			</div>
			<!--测试路由-->
			<p>当前路径：{{$route.path}}</p>
		    <p>当前参数：{{$route.params | json}}</p>
		    <p>路由名称：{{$route.name}}</p>
		    <p>路由查询参数：{{$route.query | json}}</p>
		    <p>路由匹配项：{{$route.matched | json}}</p>
			
			<div class="other-link">
				<a v-link="{path: '/register'}" class="fl">免费注册</a>
				<a id="forget" class="fr" v-link="{path: '/forgetPassword'}">忘记密码</a>
			</div>
		</form>
		<a v-link="{path: '/worklist'}" class="fl">去工作列表页面</a>
	</div>


</template>

<script>
	//	require('./../../assets/css/bootstrap.min.css');
	export default {
		ready: function() {
			
		},
		data() {
			return {
				passwordLogin:{//密码登陆
					mobile: '',//手机号
					email: '',
					account: '',//账号
					password:'' 
				}
			}
		},
		watch:{
			'passwordLogin.mobile':'checkData',
			'passwordLogin.password':'checkData',
		},
		methods: {
			checkData:function(newval,oldval){
				var self = this;
				if(self.passwordLogin.mobile&&self.passwordLogin.password){
					$("#submit-btn").removeAttr('disabled');
				}
				else{
					$("#submit-btn").attr('disabled','disabled');
				}
			},
			checkUser:function(){
				var self = this;
				if(!self.passwordLogin.mobile || !self.passwordLogin.password){
					console.log(1);
					return false;
				}
			}
		}
	}
</script>