<template>
	<div>
		<div class="head">忘记密码<a class="fr" href="javascript:history.go(-1);" style="font-size:12px;"><i class="i1"></i>返回</a></div>
		<div @click="goTo" style="line-height:40px;font-size:24px">
			test刷新跳转首页
		</div>
		<div style="line-height:40px;margin-top:20px;font-size:24px;text-align:center">
			<a v-link="{path: '/home'}">回到首页</a>
		</div>
		<h3  v-bind:class="{ 'redColor': changeColor}">Count is {{ counterValue }}</h3>
		

	</div>


</template>

<script>
	//	require('./../../assets/css/bootstrap.min.css');
	import { getCount } from '../../../vuex/getters'
	import { changeColor } from '../../../vuex/getters'
	export default {
		ready: function() {

		},
		vuex: {
		    getters: {
		      // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
		      counterValue: getCount,
		      changeColor: changeColor
		    }
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