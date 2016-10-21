<template>
	<div id="homeApp">
		<a href="#">
			<div class="logo_img"></div>
		</a>
		<div class="region">
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
		<!--自定义指令-->
		<div v-demo:hello2="msg"></div>
		<div v-example a="hi" c="kitty"></div>
		<!--大焦点图切换-->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in focusAd">
					<a href="{{item.adLink}}">
						<img v-bind:src="item.adPic" />
					</a>
				</div>
			</div>
			<div class="swiper-pagination pageState"></div>
		</div>

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
			<p class="uploadMore" v-if="hasNextFlag == 1">
				<i></i>上拉加载更多
			</p>
			<p class="uploadIng" v-if="hasNextFlag == 2">
				<img src="../../assets/images/ajax-loader.gif" width="20" height="20" /> 加载中...
			</p>

			<p class="uploadNone" v-if="hasNextFlag == 3">
				<i></i>没有更多数据
			</p>
			
			<!--回到顶部-->
		</div>
		<div id="totop" @click="gotopAction"></div>
		<div style="position:fixed;top:50%;line-height:40px;background:skyblue;width:100%;font-size:24px;">{{testHeight}}</div>
		
	</div>
</template>

<script>
	require('./../common/filter.js');
	export default {
		components: { //引入组件
		},
		ready: function() {
			var self = this;
			self.getFloorFlashPart();
			self.getStoreList();
			var $windowH = $(window).height();
			var $documentH = $(document).height();
			$(window).on("scroll", function() {
				var scrollTop = $(this).scrollTop();
//				var scrollHeight = $(document).height();
//				var windowHeight = $(this).height();
				if (scrollTop > 100) {
					$("#totop").fadeIn(200);
				} else {
					$("#totop").fadeOut(200);
				}　
//				
//				var $total = scrollHeight - scrollTop - windowHeight;
//				self.total = $total;
//				if ($total < 5) {　
//					if (!self.hasNext) {　
//						return;　
//					}　
//					self.hasNextFlag = 2;　　　　
//					self.getStoreListData.pageNo++;
//					self.getStoreList();　　
//				}
				
				
				//------
				 var totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
				 self.total = totalheight;
				 self.scrollTop = scrollTop;
//				 var testHeight = $(document).height() - totalheight;
//				 self.testHeight = testHeight;
//				 if(testHeight <= 5){
//				 	self.testHeight = $(document).height() - totalheight;
//				 	console.log(testHeight);
//				 	
//				 }
				 
				 if(totalheight>=($(document).height() -10)){
				 	if(self.addMoreFlag){
				 		self.addMoreFlag = false;
				 		if (!self.hasNext) {　
						return;　
						}　
						self.hasNextFlag = 2;　　　　
						self.getStoreListData.pageNo++;
						self.getStoreList();
				 	}
				 	
				setTimeout(function(){
					self.addMoreFlag = true;
				},300)	　
	
	            }
				
				

			});

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
					self.focusAd = result.focusAd;
					//初始化swiper
					self.$nextTick(function() {
						var mySwiper = new Swiper('.swiper-container', {
							autoplay: 1000, //可选选项，自动滑动 
							loop: true,
							pagination: '.swiper-pagination',
							paginationType: 'fraction',
							autoplayDisableOnInteraction: false,
						})
					})
				});
			},
			getStoreList: function() {
				var self = this;
				$.ajax({
					url: 'http://m.putiandi.com/appServer/popup/list/query?',
					data: self.getStoreListData,
					type: 'GET',
					dataType: 'json',
				}).done(function(data) {
					self.hasNext = data.result.hasNext; //判决是否有下一页，返回的是true / false
					if (self.hasNext) {
						self.hasNextFlag = 1;
					} else {
						self.hasNextFlag = 3;
					}
					self.storeList = self.storeList.concat(data.result.result);
				});
			},
			willOpen: function() {
				var self = this;
				self.willOpenFlag = true;
				setTimeout(function() {
					self.willOpenFlag = false;
				}, 1000);
			},
			gotopAction: function() {
				$("html,body").animate({
					scrollTop: 0
				}, 0);
			},
			changeClass: function(index) {
				if (index % 2) {
					return false;
				} else {
					return true;
				}
			}
		},
		data:function() {
			return {
				msg: "hello msg!",
				floorFlashPart: false,
				floorFlashTest: '',
				willOpenFlag: false,
				cityBoxStatus: false,
				rightPrice: null,
				rightArea: null,
				rightPosition: null,
				rightTime: null,
				exhibition: null,
				focusAd: null,
				storeList: [],
				hasNext: null,
				hasNextFlag: null,
				total:null,
				scrollTop:null,
				testHeight:null,
				addMoreFlag:true,
				getStoreListData: {
					cityCode: '310100',
					pageNo: 1,
					pageSize: 10
				},
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