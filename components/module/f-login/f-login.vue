<template>
	<view>
        <u-popup :show="popoutShow" mode="bottom" :round="10" @close="closeLogin" zIndex="999998">
            <view class="f__login">
<!--                <view class="loginLoading" v-if="isLoading">
                    <u-loadmore status="loading" loadingText="正在登录..."></u-loadmore>
                </view> -->
                <view class="logo">
                    <image class="img" src="/static/logo.png"></image>
                </view>
                <view class="title">欢迎登录~</view>
                <view class="loginButton"><button class="button marginT" @click="onAuthorization" :style="{background:PrimaryColor}">微信授权登录</button>
                    <button class="button" @click="closeLogin" style="background:#fff;margin-top:24rpx;" :style="{border:'2rpx solid '+PrimaryColor,color:PrimaryColor}">
                        暂不登录
                    </button>
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
            readonly: false,
            codeText: '获取验证码',
            phone: '', //号码
            vCode: '', //验证码
            code: '',  //uni.login获取的code
			popoutShow: true,
		};
	},
	methods: {
        //个人信息授权登录
        onAuthorization(e) {
            getUserInfo(info=>{
                console.log(info,'授权信息')
                let httpData = {
                    code: this.code,
                    nickName: info.nickName || '', //昵称
                    avatarUrl: info.avatarUrl || '', //头像
                    gender: info.gender || '', //性别 0:未知 1:男 2:女
                }
                // uni.$u.http.post('您的接口', httpData).then(res => {
                    let userInfo = {
                        // ...res,
                        token:true,//token用于判断是否登录
                    }
                    // this.setUserInfo(userInfo)
                    // setTimeout(()=>{
                    //     uni.showToast({
                    //     	title: '登录成功',
                    //     	icon: 'none'
                    //     });
                    //     this.closeLogin();
                    // },100)
                // })
            },err=>{
                // this.closeLogin();
            })
        },
        onAuthError(e){
            uni.showToast({
            	title: '您已拒绝授权~',
            	icon: 'none'
            });
        },
		closeLogin(){
            console.log('closeLogin')
            this.popoutShow = false
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
}
</style>
