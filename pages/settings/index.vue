<template>
	<view>
		<view class="details">
			<image class="ite_mimg" src="/static/image/Avatar@2x.png" mode="aspectFit"></image>
			<h4 class="names">李立三</h4>
			<text class="major">经管系&nbsp;&nbsp;20级会计</text>
		</view>
			<view v-for="(item,index) in data" :key="index" class="record">
				<image class="icon_mimg" :src="item.url" mode="aspectFit"></image>
				<text class="major">{{item.name}}</text>
			</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data:[
					{
						name:'个人扫码记录',
						url:"/static/image/Avatar12@2x.png",
					},
					{
						name:'排名记录',
						url:"/static/image/paiming-22@2x.png",
					},
					{
						name:'总步数',
						url:"/static/image/bushu222@2x.png",
					},
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	   .details{
		   display:flex;flex-direction:column;
		   margin-top: 30rpx;
		   margin-bottom: 60rpx;
		   .ite_mimg{
			   align-self:center;
			   width: 150rpx;
			   height:150rpx;
			   border-radius: 50%;
		   }
		   .names{
			   font-size: 46rpx;
			   align-self:center;
		   }
		   .major{
			    align-self:center;
		   }
	   }
	   .record{
		   display: flex;
		   height: 80rpx;
		   align-items: center;
		   border-bottom:1px solid #cccccc;
		   .icon_mimg{
			   margin: 0 20rpx;
			   width: 50rpx;
			   height:50rpx;
		   }
	   }
</style>
