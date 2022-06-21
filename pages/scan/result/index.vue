<template>
	<view>
		<view id="videoMain">
			<video class="ship" :src="url"></video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: "",
				data1: "",
				data2: "",
				number: ""
			}
		},
		onLoad(e) {
			// #ifdef MP-WEIXIN
			let data = JSON.parse(decodeURIComponent(e.data))
			this.url = data.data
			this.number = data.type
			// #endif
			this.data1 = new Date().getTime()
		},
		mounted(){
			
		},
		onUnload(){
			this.data2 = new Date().getTime()
			let time = this.data2 - this.data1
			uni.request({
				url: 'https://wxapi.weiqh.net/api/wx/useTime?number='+this.type+'&time='+time,
				method: "GET",
				success(res) {
					
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>
	#videoMain{
		width: 100%;
		height: 94vh;
		background: #010101;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.ship{
		width: 100%;
		height: 50%;
	}
</style>
