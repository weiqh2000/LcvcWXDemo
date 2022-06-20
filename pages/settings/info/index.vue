<template>
	<view>
		<view class="info_body">
			<view class="info_img">
				<image  src="../../../static/logo.png"></image>
			</view>
			<view class="my_font">行走的思政课</view>
			<input v-model="data.inClass" placeholder="请输入班级" class="info_input" />
			<input v-model="data.specialized" placeholder="请输入系部" class="info_input" />
			<input v-model="data.name" placeholder="请输入姓名" class="info_input" />
			<u-button @click="myPost()" style="margin-top: 50rpx;width: 70%;" type="primary" text="确定"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					nickName: "",
					name: "",
					inClass: "",
					specialized: ""
				}
			}
		},
		created() {
			this.data.nickName = uni.getStorageSync('nickName')
		},
		mounted() {
			
		},
		methods:{
			myPost(){
				// for(var key in this.data) {
				// 	console.log("----------")
				// return false;
				// }
				// console.log()
				// for(var key in Object.values(this.data)){
				// 	if(){
						
				// 	}
				// }
				// console.log(this.data)
				uni.showLoading({
					title: '正在添加...'
				});
				uni.request({
					url: 'https://wxapi.weiqh.net/api/wx/updateUser',
					method:'POST',
					data: this.data,
					success: (res) => {
						uni.setStorageSync("inClass",res.data.inClass);
						uni.setStorageSync("specialized",res.data.specialized);
						uni.switchTab({
							url: '/pages/index/index'
						})
					},
					fail() {
						uni.showModal({
							content: '添加错误',
							confirmText: '确定'
						});
					}
				})
				uni.hideLoading();
			}
		}
	}
</script>

<style lang="less">
	.info_body{
		margin: auto;
		width: 90%;
		height: 90vh;
	}
	.info_img{
		margin: auto;
		width: 80%;
		height: 100rpx;
		image{
			margin: 30rpx 0rpx;
			width: 100%;
			height: 100%;
		}
	}
	.my_font{
		width: 55%;
		margin: 100rpx auto 50rpx;
		color: #2967ff;
		font-weight: bold;
		font-size: 60rpx;
	}
	.info_input{
		border-radius: 8px;
		height: 80%;
		height: 80rpx;
		padding: 0rpx 0rpx 0rpx 30rpx;
		background-color: #f6f6f6;
		margin: 30rpx;
	}
</style>