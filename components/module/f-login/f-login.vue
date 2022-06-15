<template>
	<view>
        <u-popup :show="popoutShow" mode="bottom" :round="10">
            <view class="f__login">
                <view class="logo">
                    <image class="img" src="/static/logo.png"></image>
                </view>
                <view class="title">欢迎登录~</view>
				<view>行走的思政课</view>
                <view class="loginButton">
					<button class="button marginT" @click="onAuthorization" :style="{background:PrimaryColor}">微信授权登录</button>
					<!-- #ifdef MP-WEIXIN -->
					<navigator target="miniProgram" open-type="exit">
						<button class="button" style="background:#fff;margin-top:24rpx;" :style="{border:'2rpx solid '+PrimaryColor,color:PrimaryColor}">
						    暂不使用
						</button>
					</navigator>
					<!-- #endif -->
				</view>
            </view>
        </u-popup>
	</view>
</template>
<script>
export default {
    name: 'f-login',
	data() {
		return {
            PrimaryColor: '#1fba1a', //主题色
			popoutShow: true,
			jsCode: ""
		};
	},
	methods: {
        //个人信息授权登录
        onAuthorization(e) {
			// #ifdef MP-WEIXIN
				uni.showLoading({
					title: '正在登录...'
				});
				wx.login({
				        success: (res) => { 
				            if (res.code) { 
				                this.jsCode=res.code
								 console.log(res.code)
				                uni.request({
				                    url: 'https://wxapi.weiqh.net/api/wx/decrypt',
				                    method:'POST',  
				                    data: {
				                        code: res.code 
				                    },
				                    success: (cts) => {
										uni.setStorageSync('openid', cts.data.code.openid)
										uni.setStorageSync('session_key', cts.data.code.session_key)
				                    }
				                });
				            } else {
				                console.log('登录失败！' + res.errMsg)  
				            }
				        }
				})
				uni.hideLoading();
				uni.showLoading({
					title: '正在获取用户信息...'
				});
				wx.getUserProfile({
					  // desc: '业务需要',
					  desc: '获取用户信息，初始化', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					  success: res => {
					   console.log(res);
					   uni.setStorageSync('nickName', res.userInfo.nickName)
					   uni.setStorageSync('src', res.userInfo.avatarUrl)
					   this.closeLogin()
					  }
				})
				uni.hideLoading();
			// #endif
			// #ifdef H5
				this.closeLogin()
			// #endif
        },
		closeLogin(){
            console.log('closeLogin')
            this.popoutShow = false;
			wx.showTabBar()
		},
	}
};
</script>

<style lang="scss" scoped>
.f__login {
    padding: 48rpx 32rpx;
    border-radius: 18rpx 18rpx 0 0;
    z-index: 99;
    position: relative;
    .loginLoading {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, .95);
        z-index: 999;
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .logo {
        width: 50%;
        height: 90rpx;
        border-radius: 18rpx;
        overflow: hidden;
        .img {
            width: 100%;
            height: 90rpx;
        }
    }
    .title {
        font-size: 40rpx;
        font-weight: bold;
        margin-top: 24rpx;
    }
    .text {
        font-size: 24rpx;
        color: #666;
        margin-top: 16rpx;
    }
    .loginButton {
        margin-top: 56rpx;
        .button {
            color: #fff;
            width: 100%;
            height: 92rpx;
        }
        .marginT{
            margin-top: 24rpx;
        }
    }
    .tips {
        margin-top: 24rpx;
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .left {
            /* #ifndef APP-NVUE */
            display: flex;
            /* #endif */
            flex-direction: row;
        }
        .goBuy {
            font-size: 24rpx;
            /* margin-left: 16rpx; */
            background: none;
            /* #ifndef APP-NVUE */
            display: flex;
            /* #endif */
            flex-direction: row;
            justify-content: flex-start;
            padding: 0;
            margin: 0;
            color: #1fba1a;
        }
    }
}
.loginPhone{
    .form-row {
        position: relative;
        border-bottom: 1rpx solid #e8e8e8;
        line-height: 1;
        margin-top: 24rpx;
        .input{
            font-size: 34rpx;
            line-height: 102rpx;
            height: 94rpx;
            width: 100%;
            box-sizing: border-box;
            font-size: 30rpx;
            padding: 0;
            font-weight: bold;
        }
        .getvcode {
            font-size: 26rpx;
            height: 80rpx;
            color: #333;
            line-height: 80rpx;
            background: #eee;
            min-width: 188rpx;
            text-align: center;
            border-radius: 8rpx;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            z-index: 11;
            &.forhidden {
                background: #eee;
                color: #cccccc;
            }
        }
    }
    .submit{
        margin-top: 60rpx;
        color: #fff;
        width: 100%;
        border: none;
    }
	.nav{
		-webkit-tap-highlight-color: transparent;
		    background-color: #f8f8f8;
		    border-radius: 5px;
		    box-sizing: border-box;
		    cursor: pointer;
		    display: block;
		    font-size: 18px;
		    line-height: 2.55555556;
		    margin-left: auto;
		    margin-right: auto;
		    overflow: hidden;
		    padding-left: 14px;
		    padding-right: 14px;
		    position: relative;
		    text-align: center;
		    text-decoration: none;
	}
}
</style>
