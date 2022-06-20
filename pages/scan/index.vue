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
						console.log(res.result.substring(8,17))
						if(res.result.substring(8,17)=="weiqh.net"){
							_this.toPage()
						}else{
							uni.switchTab({
								url: '/pages/index/index'
							})
							uni.showModal({
								content: '请扫描正确二维码',
								confirmText: '确定'
							});
						}
					},
					fail: (e) => {
						uni.switchTab({
							url: '/pages/index/index'
						})
						uni.showModal({
							content: '请扫描正确二维码',
							confirmText: '确定'
						});
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
