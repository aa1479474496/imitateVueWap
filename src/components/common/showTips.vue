<template>
	<div id="showTips">
		<div class="tipsInfo">
			<p v-if="tipsSign == 1">提示信息1,{{getMsg}}</p>
			<p v-if="tipsSign == 2">提示信息2,{{getMsg}}</p>
			<p v-if="tipsSign == 3">提示信息3,{{getMsg}}</p>
			<p v-if="tipsSign == 4">提示信息4,{{getMsg}}</p>
			<div class="btnWrap">
				<div class="sureBtn defaultBtn" @click="tipFlag = false">
					确定
				</div>
				<div class="escBtn defaultBtn">
					取消
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css">
	#showTips {
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgba(0, 0, 0, .3);
		z-index: 9;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.tipsInfo {
		width: 80%;
		background: skyblue;
		
		text-align: center;
		border-radius: 6px;
		box-shadow: 0 0 5px yellowgreen;
	}
	.tipsInfo p{
		line-height: 24px;
		font-size: 16px;
		margin-bottom:20px;
	}
	.btnWrap{
		display: flex;
		/*align-items: normal;*/
		/*justify-content: normal;*/	
	}
	.defaultBtn{
		-webkit-box-flex: 1;
    	-webkit-flex: 1;
    	line-height:40px;
    	font-size:20px;
    	text-align:center;
	}
	.sureBtn{
		background:#FF4400;
		color:#fff;
	}
	
</style>
<script type="text/javascript">
	export default {
		components: { //引入组件

		},
		props: {
			tipFlag: ''
		},
		ready: function() {

		},
		methods: {
			changeFlag:function(){
				this.tipFlag = false;
			},
			changeSign: function(sign,msg) {
				var self = this;
				self.getMsg = msg;
				switch(sign) {
					case 1:
						self.tipsSign = 1;
						break;
					case 2:
						self.tipsSign = 2;
						break;
					case 3:
						self.tipsSign = 3;
						break;
					case 4:
						self.tipsSign = 4;
						break;
					default:
						self.tipsSign = 1;
						break;
				}
			}
		},
		data() {
			return {
				tipsSign: 0,
				getMsg: null
			}
		}
	}
</script>