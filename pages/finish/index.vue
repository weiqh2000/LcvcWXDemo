<template>
	<view>
		<view class="subject">
			<!-- <view class="step">
				<uni-steps active-color="#FFF100" :options="[{title: '事件一'}, {title: '事件二'}, {title: '事件三'}, {title: '事件四'}]" :active="1"></uni-steps>
			</view> -->
			<view class="task">任务成功</view>
			<!-- <view>恭喜你！获得第{{top}}名</view>
			<view>总共走了{{bu}}步数</view>
			<view>消耗了{{joule}}焦</view> -->
			<view class="centers">
				<image class="images" src="/static/image/paiming-2@2x.png" mode="aspectFit"></image>
				<view style="width: 280rpx;">恭喜你！获得第<span style="color: #ff0000 ;">{{top}}</span>名</view>
			</view>
			<view class="centers">
				<image class="images" src="/static/image/bushu@2x.png" mode="aspectFit"></image>
				<view style="width: 280rpx;">总共走了<span style="color: #00ff00 ;">{{bu}}</span>步数</view>
			</view>
			<view class="centers">
				<image class="images" src="/static/image/fanshe@2x.png" mode="aspectFit"></image>
				<view style="width: 280rpx;">消耗了{{joule}}焦</view>
			</view>
			<view class="returns">
				<view class="returnss" @click="toHome()">返回首页</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickName: "",
				joule: "",
				bu: "",
				top: ""
			}
		},
		created() {
			this.stopClass()
			this.getTop()
		},
		methods: {
			stopClass() {
				this.nickName = uni.getStorageSync('nickName')
				uni.request({
					url: 'https://wxapi.weiqh.net/api/wx/stop?nickName=' + this.nickName,
					method: 'GET',
					success: (res) => {
						this.joule = res.data.joule
						this.bu = res.data.bu
					}
				})
			},
			getTop() {
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
			toHome(){
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="less">
	.subject {
		.step{
			margin:30rpx 0;
		}
		.task {
			display: flex;
			justify-content: center;
			width: 100%;
			color: #ff0000;
			font-size: 50rpx;
			margin: 40rpx 0;
		}

		.centers {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: left;
			margin-bottom: 20rpx;
		}
		.returns{
			display: flex;
			justify-content: center;
			width: 100%;
			// background-color: #ff0000;
			color: aliceblue;
			.returnss{
				margin-top: 80rpx;
				width: 90%;
				height: 70rpx;
				background-color: #ff0000;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
	

	.images {
		width: 60rpx;
		height: 60rpx;
		margin-right: 20rpx;
	}
</style>
