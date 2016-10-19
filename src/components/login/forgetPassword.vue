<template>
	<div>
		<div class="head">忘记密码<a class="fr" href="javascript:history.go(-1);" style="font-size:12px;"><i class="i1"></i>返回</a></div>
		<div @click="goTo" style="line-height:40px;font-size:24px">
			test刷新跳转首页
		</div>

	</div>


</template>

<script>
	//	require('./../../assets/css/bootstrap.min.css');
	export default {
		ready: function() {

		},
		data() {
			return {}
		},
		methods: {
			goTo: function(){
				window.location.href = '/home';
			}
		}
	}
</script>