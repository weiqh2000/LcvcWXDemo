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
				url: ""
			}
		},
		onLoad(e) {
			this.url = decodeURIComponent(e.data)
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
