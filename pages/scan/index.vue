<template>
	<view>
		<view>
			<view @click="scan()">
				扫码测试
			</view>
			<view @click="toPage()">
				跳转测试
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: ""
			}
		},
		onLoad() {

		},
		methods: {
			scan(){
				var _this = this;
				uni.scanCode({
					success: function (res) {
						_this.url = res.result
					},
					complete: function (){
						_this.toPage()
					}
				})
			},
			toPage(){
				let item = encodeURIComponent(this.url);
				uni.navigateTo({
					url: '/pages/scan/result/index?data=' + item
				})
			}
		}
	}
</script>

<style>
</style>
