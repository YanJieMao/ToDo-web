<template>
	<view class="content">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params:{
					UID:1
				}
			}
		},
		onLoad() {
			this.init();

		},
		methods: {
			init:function(){//初始化页面
				this.$api.__api__getToDoList(this.params)
					.then((res)=>{
						console.log(res);
						console.log("啦啦啦啦啦");
					});
		}
	},
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
