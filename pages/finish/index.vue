<template>
	<view>
		<view>任务成功</view>
		<!-- <view>恭喜你！获得第{{top}}名</view>
		<view>总共走了{{bu}}步数</view>
		<view>消耗了{{joule}}焦</view> -->
		<view>恭喜你！获得第1名</view>
		<view>总共走了324步数</view>
		<view>消耗了3443焦</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
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
		methods:{
			stopClass(){
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
			}
		}
	}
</script>

<style>
</style>