<template>
	<view>
		
		<view v-for="(item,index) in todolist" :key="index" >
		<view class="cu-card dynamic" :class="isCard?'no-card':''">
			<view class="cu-item shadow">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image: url(../../static/pic/todo-logo.png);"></view>
						<view class="content flex-sub">
							<view>待办</view>
							<view class="text-gray text-sm flex justify-between">
								啦啦啦啦
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					
					
						<view class=" text-red">{{item}}</view>
						
					
				</view>
			
				<view class="text-gray text-sm text-right padding">
					<text class="cuIcon-attentionfill margin-lr-l"></text> 10
					<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
					<text class="cuIcon-messagefill margin-lr-xs"></text> 30
				</view>
		
				
			</view>
		</view>
		</view>
		
		
		
		
		<!-- <view class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in todolist" :key="index"
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				
				<view class="content">
					<view class="text-grey">待办</view>
					<view class="text-gray text-sm">
						<text class=" text-red  margin-right-xs"></text> {{item}}</view>
				</view>
				
				<view class="move">
					<view class="bg-grey">置顶</view>
					<view class="bg-red">删除</view>
				</view>
			</view>
		</view> -->
	
		
		<!-- <view class="grid  margin-bottom text-center">
			<view v-for="(item,index) in todolist" :key="index" class="bg-white padding">
			
				<view class=" text-red">{{item}}</view>
				
			</view>
			
		</view> -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				todolist:[],
			}
		},
		onLoad() {
			this.init();

		},
		methods: {
			init:function(){//初始化页面
				var params
				uni.getStorage({
					key: 'user_id',
					    success: function (res) {
							params = {UID:res.data}
							console.log(params)
					        console.log("缓存中获取user_id："+res.data);	
					    }
					
				});
				this.$api.__api__getToDoList(params)
					.then((res)=>{
						console.log("getToDoList ");
						console.log(res);
						this.todolist = this.todolist.concat(res);
						console.log(this.todolist);
					})
					
					
								
		},
		getData:function() {
		                uni.request({
		                    url: 'http://172.27.139.125:8080/v1/todolist/all', //仅为示例，并非真实接口地址。
							method:'POST',
							data: {
								"UID":2,
								"List":"一二三四五"
							
							},
							header:{
							},
		                    success: (res) => {
		                        console.log('get成功');
		                        console.log(res);
		                    },
		                    fail:(res)=>{
		                        console.log('get失败');
		                        console.log(res.data);
		                    }
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
