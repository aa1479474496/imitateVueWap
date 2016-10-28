<template>
	<div>
		<div class="head">工作表格页面测试<a class="fr" href="javascript:history.go(-1);" style="font-size:12px;"><i class="i1"></i>返回</a></div>
	
		<show-tips v-show="showFlag" :tip-flag.sync="showFlag" v-ref:profile></show-tips>
		<button @click="showModal">点击调用公共组件里的模态</button>
		<br />
		<br />
		<br />
		<br />
		<br />
		<!--另一个子组件调用showTips中的显示方法-->
		<work-add child-show="showModal"></work-add>
		<div>
		    <Display></Display>
		    <Increment></Increment>
		</div>
	</div>
</template>



<script type="text/javascript">
	import showTips from './../common/showTips';
	import workAdd from './workadd';
	import Display from './Display.vue';
	import Increment from './Increment.vue';
	export default {
		components: { //引入组件
			showTips,
			workAdd,
			Display,
			Increment
		},
		ready: function(){
			 var self = this;
            self.child = self.$refs.profile;
		},
		methods: {
			showModal: function(n,msg){
				var self = this;
				self.showFlag = true;
				self.child.changeSign(n,msg);
			}
		},
		data(){
			return {
				showFlag: false
			}
		}
		
	}
</script>