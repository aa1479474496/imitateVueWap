<template>
	<div>
		<h1 style="line-height:30px;font-size:24px;text-align:center;">
			我来自workadd.vue
		</h1>
		<button @click="getParent">点击我调用父组件引用公共组件showTips</button>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			childShow: null
		},
		ready: function(){
			
		},
		methods: {
			getParent: function(){
				 this.$parent[this.childShow](4,'啦啦啦');
			}
		},
		data() {
			return{
				
			}
		}
	}
</script>

