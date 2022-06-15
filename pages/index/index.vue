<template>
	<view>
		主页
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
				userdetail: {}
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

<style>
</style>
