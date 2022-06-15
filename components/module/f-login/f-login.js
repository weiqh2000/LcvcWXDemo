// 微信/支付宝小程序---手机号授权登录时使用
function getPhoneInfo(info, successCallback, errCallback) {
    let httpData = {}
    // #ifdef MP-WEIXIN
    httpData = {
    	code: info.code, //小程序code
    	iv: info.iv, //小程序加密算法的初始向量
    	encryptedData: info.encryptedData, //包括敏感数据在内的完整用户信息的加密数据
    };
    // #endif
    
    // 此时需要您的接口返回个人信息
	// uni.$u.http.post('您的接口', httpData).then(res => {
        // var loginInfo = {
        //     userId: res.id,
        //     sessionId: res.sessionId,
        //     isRegister: res.isRegister,
        //     userName: res.userName,
        //     userType: res.userType,
        //     openId: res.openId,
        // };
        successCallback && successCallback()
    // }, err => {
    //     errCallback && errCallback(err)
    // });
}

// 微信/支付宝小程序---通用授权个人信息登录
function getUserInfo(successCallback,errorCallback) {
    uni.showLoading({
        title: '正在申请授权',
    });
    // #ifdef MP-WEIXIN
    uni.getUserProfile({
        desc: '用于完善会员资料',
        success: function(res) {
            uni.hideLoading()
            var offUserInfo = res.userInfo
            successCallback && successCallback(offUserInfo)
        },fail: (res) => {
            uni.hideLoading()
            errorCallback && errorCallback(res)
        }
    })
    // #endif
}

export {
    getPhoneInfo, //小程序手机号授权
    getUserInfo,  //小程序个人信息授权
}