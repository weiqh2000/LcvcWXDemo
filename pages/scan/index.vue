<template>
	<view >
		<view class="main">
			<!-- <image src="https://weiqh.net/img/Monument.jpg"></image> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scanURL: ""
			}
		},
		onTabItemTap() {
			// #ifdef MP-WEIXIN
			this.scan()
			// #endif
		},
		methods: {
			scan(){
				var _this = this;
				uni.scanCode({
					success: function (res) {
						_this.scanURL = res.result;
						_this.toPage()
					},
					fail: (e) => {
						uni.redirectTo({
							url: '/pages/index/index'
						})
					},
					complete: function (){
						
					}
				})
			},
			toPage(){
				let item = encodeURIComponent(this.scanURL);
				uni.redirectTo({
					url: '/pages/scan/result/index?data=' + item
				})
			}
		}
	}
</script>

<style>
	page{
		background-image: url("https://weiqh.net/img/Monument.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-color: #CCCCCC;
	}
</style>
