<template>
	<view>
		<view class="details">
			<image class="ite_mimg" :src="src" mode="aspectFit"></image>
			<h4 class="names">{{nickName}}</h4>
			<text class="major">{{specialized}}&nbsp;&nbsp;{{inClass}}</text>
		</view>
			<!-- <view v-for="(item,index) in data" :key="index" class="record">
				<image class="icon_mimg" :src="item.url" mode="aspectFit"></image>
				<text class="major">{{item.name}}</text>
			</view> -->
			<view  class="record">
				<image class="icon_mimg" src="/static/image/Avatar12@2x.png" mode="aspectFit"></image>
				<text class="major">个人扫码记录</text>
			</view>
			<view  class="record">
				<image class="icon_mimg" src="/static/image/paiming-22@2x.png" mode="aspectFit"></image>
				<text class="major">排名记录</text>
				<text class="res">{{top}}名</text>
			</view>
			<view  class="record">
				<image class="icon_mimg" src="/static/image/bushu222@2x.png" mode="aspectFit"></image>
				<text class="major">总步数</text>
				<text class="res">{{sumBu}}步</text>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[
					{
						name:'个人扫码记录',
						url:"/static/image/Avatar12@2x.png",
					},
					{
						name:'排名记录',
						url:"/static/image/paiming-22@2x.png",
					},
					{
						name:'总步数',
						url:"/static/image/bushu222@2x.png",
					},
				],
				nickName: "",
				src: "",
				sumBu: "",
				inClass: "",
				specialized: "",
				top: ""
			}
		},
		onTabItemTap() {
			this.getInfo()
			this.getTop()
		},
		mounted() {
			
		},
		methods: {
			getTop(){
				uni.request({
					url: 'https://wxapi.weiqh.net/api/wx/getMyTop?nickName=' + this.nickName,
					method: 'GET',
					success: (res) => {
						console.log('Top')
						console.log(res.data)
						this.top = res.data
					}
				})
			},
			getInfo(){
				this.nickName = uni.getStorageSync('nickName')
				this.src = uni.getStorageSync("src")
				this.sumBu = uni.getStorageSync('sumBu')
				uni.request({
					url: 'https://wxapi.weiqh.net/api/wx/getuser?nickName=' + this.nickName,
					method:'GET',
					success: (res) => {
						console.log(res.data)
						this.inClass = res.data.inClass
						this.specialized = res.data.specialized
						this.sumBu =res.data.sumBu
						uni.setStorageSync('sumBu', res.data.sumBu)
						uni.setStorageSync('inClass', res.data.inClass)
						uni.setStorageSync('specialized', res.data.specialized)
						if(this.inClass==""||this.inClass=="null"||this.inClass==null){
							uni.redirectTo({
								url: "/pages/settings/info/index"
							})
						}
					}
				})
				// this.inClass = uni.getStorageSync('inClass')
				// this.specialized = uni.getStorageSync("specialized")
				// if(this.inClass==""||this.inClass==null){
				// 				uni.redirectTo({
				// 					url: "/pages/settings/info/index"
				// 				})
				// 			}
				// getuser
				
			},
		}
	}
</script>

<style lang="less">
	   .details{
		   display:flex;flex-direction:column;
		   margin-top: 30rpx;
		   margin-bottom: 60rpx;
		   .ite_mimg{
			   align-self:center;
			   width: 150rpx;
			   height:150rpx;
			   border-radius: 50%;
		   }
		   .names{
			   margin-top: 20rpx;
			   margin-bottom: 20rpx;
			   font-size: 46rpx;
			   align-self:center;
		   }
		   .major{
			    align-self:center;
		   }
	   }
	   .record{
		   display: flex;
		   height: 80rpx;
		   align-items: center;
		   border-bottom:1px solid #cccccc;
		   .icon_mimg{
			   margin: 0 20rpx;
			   width: 50rpx;
			   height:50rpx;
		   }
		   .res{
				margin-left: auto;
				padding-right: 20rpx;
		   }
	   }
	   
</style>
