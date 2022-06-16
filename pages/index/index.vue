<template>
	<view>
		<view>
			<view class="searchbox">
				<image class="searchbox_image" src="/static/image/yy-search-O.png"></image>
				<input placeholder="Search"/>
			</view>
		</view>
		<view class="rotationchart">
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :autoplay="true"  :interval="3000"  :duration="800" next-margin="140rpx" >
					<swiper-item class="swiper-item">
						<image src="/static/image/Slide2@2x.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-item">
						<image src="/static/image/Slide2@2x.png" mode=""></image>
					</swiper-item>
					<swiper-item class="swiper-item">
						<image src="/static/image/Slide2@2x.png" mode=""></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="ranking">
				<view class="title">
					<view class="other">
						<h4>目前总排名</h4>
					</view>
					<view class="times">
						<text>2022-09-09 12:12</text>
					</view>
				</view>
				<view class="ranking_personal" v-for="(item,index) in data" :key="index">
					<view class="left">
						<image class="portrait" src="/static/image/Placeholder@2x.png" ></image>
						<text style="margin-left: 10rpx;">{{item.name}}</text>
					</view>
					<view class="right">
						<text>第一名</text>
					</view>
				</view>
		</view>
		<view class="content_bottom">
				<view class="other">
					<h4>思政课程</h4>
				</view>
				<view class="menu">
					<view class="single" >
						<image class="ite_mimg" src="/static/image/Image@2x.png" mode="aspectFit"></image>
					</view>
					<view class="single">
						<image class="ite_mimg" src="/static/image/ImageCopy@2x.png" mode="aspectFit"></image>
					</view>
					<view class="single">
						<image class="ite_mimg" src="/static/image/ImageCopy2@2x.png" mode="aspectFit"></image>
					</view>
					<view class="single">
						<image class="ite_mimg" src="/static/image/ImageCopy@2x.png" mode="aspectFit"></image>
					</view>
					<view class="single">
						<image class="ite_mimg" src="/static/image/ImageCopy2@2x.png" mode="aspectFit"></image>
					</view>
					<view class="single">
						<image class="ite_mimg" src="/static/image/ImageCopy2@2x.png" mode="aspectFit"></image>
					</view>
					<view class="single"style="margin-right: 60rpx;">
						<image class="ite_mimg" src="/static/image/ImageCopy2@2x.png" mode="aspectFit"></image>
					</view>
				</view>
				
			</view>
		
		<!-- <button open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">唤起授权</button> -->
		<!-- <button open-type="getUserInfo" withCredentials="true" lang="zh_CN" @getuserinfo="getUserInfo">授权登录</button> -->
		<f-login></f-login>
	</view>
</template>

<script>
	import fLogin  from "@/components/module/f-login/f-login.vue"
	export default {
		components:{
			fLogin
		},
		data() {
			return {
				userdetail: {},
				data:[
					{name:'Title'},
					{name:'Title'},
					{name:'Title'},
				]
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN
				wx.hideTabBar()
			// #endif
		},
		methods: {
			// getUserInfo(res) {
			// 			this.userdetail = res.detail; //将用户信息存起来，下次使用
			// 			this.login();
			// 		},
			// 		login() {
			// 			uni.login({
			// 			provider: 'weixin',
			// 				success: res => {
			// 				 console.log(res)
			// 				},
			// 				fail: err => {
			// 				console.log('err', err);
			// 				}
			// 			});
			// 		},
		}
	}
</script>

<style lang="less">
	.searchbox {
		display: flex;
		height: 70rpx;
		width: 90%;
		background-color: #F6F6F6;
		margin-top: 20rpx;
		margin-left: 5%;
		margin-right: 5%;
		margin-bottom: 20rpx;
		border-radius: 35rpx;
		// box-shadow: 7rpx 7rpx 3rpx #c5c6c9;
		.searchbox_image {
			margin-top: 15rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;
			padding: 0rpx;
			width: 40rpx;
			height: 40rpx;
		}
		input {
			margin-left: 90rpx;
			position: absolute;
			margin-top: 15rpx;
			padding: 0rpx;
			font-size: 28rpx;
			color: #666666;
		
		}
	
	}
	.swiper {
		width: 750rpx;
		height: 270rpx;
		margin-bottom: 20rpx;
	}
	
	.swiper-item {
		margin-left: 20rpx;
		width: 550rpx;
		height: 270rpx;
	}
	
	.swiper-item image {
		margin-left: 20rpx;
		border-radius: 10px;
		height: 100%;
		width: 93%;
	}
	
	
	.ranking{
		width: 100%;
		margin-bottom: 8%;
		.title{
			width: 100%;
			display: flex;
			//其他功能样式
			.other {
				width: 50%;
				margin: 15rpx 5% 20rpx 5%;
				display: flex;
				border-left: 3px solid #c22030;
				h4 {
					padding: 2rpx 0rpx 2rpx 20rpx;
					color: #333;
					border-radius: 10px;
				}
			}
			.times{
				width: 40%;
				margin: 15rpx 3% 20rpx 5%;
			}
		}
		.ranking_personal{
			width: 100%;
			display: flex;
			align-items: center;
			margin: 2% 0 0 5%;
			.left{
				display: flex;
				align-items: center;
				width: 75%;
				.portrait{
					border-radius: 50%;
					width: 90rpx;
					height: 90rpx;
					
				}
			}
			.right{
				// width: 60%;
				color: red;
			}
		}
	}
	.content_bottom{
		width: 100%;
		margin-bottom: 8%;
		//其他功能样式
		.other {
			width: 90%;
			margin: 15rpx 5% 20rpx 5%;
			display: flex;
			border-left: 3px solid #c22030;
			h4 {
				padding: 2rpx 0rpx 2rpx 20rpx;
				color: #333;
				border-radius: 10px;
			}
		}
	}
	
	.menu{
		scroll-snap-type: x mandatory;
		width: 100%;
		height: 400rpx;
		white-space: nowrap;
		overflow: hidden;
		overflow-x: scroll;
		-webkit-backface-visibility: hidden;
		-webkit-perspective: 1000;
		-webkit-overflow-scrolling: touch;
		padding: 0rpx 0rpx 0rpx 30rpx;
		scrollbar-width: none;
	}
	.menu::-webkit-scrollbar {  //隐藏滚动条
		display: none;
		width: 0;
	}
	.main_chart_right::-webkit-scrollbar {
		display: none;
		width: 0;
	}
	::-webkit-scrollbar {
		display: none;
		width: 0;
	}
	.single {
		width: 28%;
		background: #FFFFFF;
		border-radius: 25rpx;
		display: inline-block;
		line-height: 100%;
		margin: 0rpx 0rpx 0rpx 10rpx;
		// 滚动贴合 贴合方式为每个元素的left-end
		scroll-snap-align: end;
		.ite_mimg {
			width: 100%;
			height: 300rpx;
		}
	}
</style>
