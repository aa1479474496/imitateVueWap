<template>
	<div id="homeApp">
		<a href="#">
			<div class="logo_img"></div>
		</a>
		<div class="region" ng-init="cityBoxStatus=false">
			<div @click="cityBoxStatus=!cityBoxStatus" class="region_on">上海市</div>
			<ul id="cityLiBox" v-show="cityBoxStatus" @click="cityBoxStatus=!cityBoxStatus">
				<li v-for="item in items">
					<a v-if="item.cityStatus">{{item.cityname}}</a>
					<ins v-if="!item.cityStatus" @click="willOpen()">{{item.cityname}}</ins>
				</li>

			</ul>
			<div v-if="willOpenFlag" id="regionCityPop" class="regionCityPop">
				<div class="regionCity">即将开放</div>
			</div>
		</div>
		<a class="loginBtn" v-link="{path: '/login'}">登录</a>
		<br style="clear:both;" />

		<!--左右滚动切换-->
		<!--左右滚动-->
		<!--价尽其用-->
		<div class="newIndexSection">
			<p class="sectionTitlePrice"></p>
		</div>
		<div style="height:0px;padding-top:60%;overflow-y:hidden;position:relative;background:#fff;">
			<ul class="pinxiang-list">
				<li v-for="item in rightPrice">
					<a href="{{item.adLink}}">
						<img v-bind:src="item.adPic" />
					</a>
					<p class="favoriteIntroduce f15 col333">{{item.adName | splitTitle 1}}<span class="f12 col999">{{item.adName | splitTitle }}</span></p>
				</li>
			</ul>
		</div>

		<!--面面俱到-->
		<div class="newIndexSection">
			<p class="sectionTitleFace"></p>
		</div>
		<div style="height:0px;padding-top:60%;overflow-y:hidden;position:relative;background:#fff;">
			<ul class="pinxiang-list">
				<li v-for="item in rightArea">
					<a href="{{item.adLink}}">
						<img v-bind:src="item.adPic" />
					</a>
					<p class="favoriteIntroduce f15 col333">{{item.adName | splitTitle 1}}<span class="f12 col999">{{item.adName | splitTitle }}</span></p>
				</li>
			</ul>
		</div>

		<!--精准定位-->
		<div class="newIndexSection">
			<p class="sectionTitlePosition"></p>
		</div>

		<div style="height:0px;padding-top:60%;overflow-y:hidden;position:relative;background:#fff;">
			<ul class="pinxiang-list">
				<li v-for="item in rightPosition">
					<a href="{{item.adLink}}">
						<img v-bind:src="item.adPic" />
					</a>
					<p class="favoriteIntroduce f15 col333">{{item.adName | splitTitle 1}}<span class="f12 col999">{{item.adName | splitTitle }}</span></p>
				</li>
			</ul>
		</div>

		<!--档逢其时-->
		<div class="newIndexSection">
			<p class="sectionTitleTime"></p>
		</div>
		<div style="height:0px;padding-top:60%;overflow-y:hidden;position:relative;background:#fff;">
			<ul class="pinxiang-list">
				<li v-for="item in rightTime">
					<a href="{{item.adLink}}">
						<img v-bind:src="item.adPic" />
					</a>
					<p class="favoriteIntroduce f15 col333">{{item.adName | splitTitle 1}}<span class="f12 col999">{{item.adName | splitTitle }}</span></p>
				</li>
			</ul>
		</div>

		<!--主题体验-->
		<div class="thematicChannels">
			<div class="themaStart">
				<a href="/exhibition/infoList"><img src="../../assets/images/themeLogo.png" /></a>
			</div>
			<ul class="thematicChannelsList ClearFix">
				<li v-for="item in exhibition">
					<a href={{item.adLink}}>
						<div class="pos-rel">
							<img v-bind:src="item.adPic" />
						</div>
					</a>
					<p class="thematicChannelsTitle ">{{item.adName}}</p>
				</li>
			</ul>
		</div>

		<!--猜你喜欢-->
		<div style="padding: 10px 12px 0px; background: #fff;">
			<div class="guessLike">猜你喜欢</div>
			<ul class="likeShopsList">
				<li v-for="storeInfo in storeList">
					<a class="ClearFix">
						<img class="likeShopPic" v-bind:src="storeInfo.shopPic" alt="" />
						<div class="ml130">
							<p class="f15 col333 overSpace">
								{{storeInfo.buildingzoneName}} {{storeInfo.floorName}} {{storeInfo.shopName}}
								<span class="f12 col666">({{storeInfo.mallName}})</span>
							</p>
							<p class="brandClassify ClearFix">
								<span v-for="businessName in storeInfo.businesstypeList.split(',')">{{businessName}}</span>
							</p>
							<p class="likeShopAdress overSpace">{{storeInfo.mallAddress}}</p>
							<p class="f15 col666 line28">
								{{storeInfo.shopArea}}<span class="f12 col999">m<sup>2</sup></span>
								<span class="f15 colFD4E4E fr mt3">{{storeInfo.dayPrice}}<span
								class="dollarsADay">元/天</span></span>
							</p>
						</div>
					</a>
				</li>
			</ul>

		</div>

	</div>
</template>

<script>
	require('./../common/filter.js');
	export default {
		components: { //引入组件
		},
		ready: function() {
			this.getFloorFlashPart();
			this.getStoreList();
			var $windowH = $(window).height();
			var $documentH = $(document).height();
			
			// $(document).scroll(function(){
			// 	var $scrollTop = $(this).scrollTop();
			// 	var $scrollH = $(this).scrollHeight()
			// 	var $wTop = $(window).scrollTop();
			// 	var isEnd = $documentH - $windowH - $scrollTop;
			// 	console.log($scrollTop,$wTop);
			// })
		},
		methods: {
			getFloorFlashPart: function() {
				var self = this;
				$.ajax({
					url: 'http://m.putiandi.com/appServer/v2/index?cityCode=310100&platform=2',
					data: {},
					type: 'GET',
					dataType: 'json',
				}).done(function(data) {
					var result = data.result;
					self.rightPrice = result.rightPrice;
					self.rightArea = result.rightArea;
					self.rightPosition = result.rightPosition;
					self.rightTime = result.rightTime;
					self.exhibition = result.exhibition;

				});
			},
			getStoreList: function() {
				var self = this;
				$.ajax({
					url:'http://m.putiandi.com/appServer/popup/list/query?',
					data: self.getStoreListData,
					type: 'GET',
					dataType: 'json',
				}).done(function(data){
					self.storeList = data.result.result;
				});
			},
			willOpen: function() {
				var self = this;
				self.willOpenFlag = true;
				setTimeout(function() {
					self.willOpenFlag = false;
				}, 1000);
			},

			changeClass: function(index) {
				if(index % 2) {
					return false;
				} else {
					return true;
				}
			}
		},
		data() {
			return {
				floorFlashPart: false,
				floorFlashTest: '',
				willOpenFlag: false,
				cityBoxStatus: false,
				rightPrice: null,
				rightArea: null,
				rightPosition: null,
				rightTime: null,
				exhibition: null,
				storeList: null,
				getStoreListData:{cityCode:'310100', pageNo:1, pageSize:10},
				items: [{
					cityname: "上海市",
					cityStatus: 1
				}, {
					cityname: "苏州市",
					cityStatus: 1
				}, {
					cityname: "广州市",
					cityStatus: 1
				}, {
					cityname: "北京市",
					cityStatus: 0
				}, {
					cityname: "杭州市",
					cityStatus: 0
				}, {
					cityname: "香港",
					cityStatus: 0
				}]
			}
		},
	}
</script>