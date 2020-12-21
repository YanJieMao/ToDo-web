<template>
	<view>

		<view v-for="(item,index) in todolist" :key="index">
			<view class="cu-card dynamic ">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image: url(../../static/pic/todo-logo.png);"></view>


							<view class="text-content flex-sub">
								<view class="text-center text-xl text-black">{{item.List}}</view>
							</view>

						</view>

						<view class="cu-capsule round padding">
							<view class='cu-tag bg-blue '>
								结束时间
							</view>
							<view class="cu-tag line-blue">
								<uni-dateformat date=""></uni-dateformat>

								{{item.DeadLine}}
								
								

							</view>
							<view class="cu-tag bg-blue">
								{{item.IsDone}}

							</view>

						</view>



					</view>





				</view>
			</view>
		</view>
		
		<!-- 新增todo按钮 -->
		<view>
			<button class="cu-btn round lg icon add addc bg-gradual-green " @click="addtodo()" :style="{}">
				<text class="cuIcon-add text-lg"></text>
			</button>
		
		</view>

		<!-- 返回顶部按钮 -->
		<view>
			<button class="cu-btn round lg icon top topc " @click="top" :style="{'display':(flag===true? 'block':'none')}">
				<text class="cuIcon-top "></text>
			</button>

		</view>





	</view>
</template>

<script>
	export default {
		data() {
			return {
				todolist: [],
				flag:false
				
			}
		},
		onLoad() {
			this.init();

		},
		methods: {
			
			addtodo:function(){
				uni.navigateTo({
					url:"./addtodo"
					
				})
			},
			filters:function(){
						//过滤器 用于格式化时间
						/* formatData(data){
							const nDate=new Date(data)
							const year= nDate.getFullYear()
							const month=nDate.getMonth().toString().padStart(2,0)
							const day=nDate.getDay().toString().padStart(2,0)
							return year+'-'+month+'-'+day
						} */
					},
			init: function() { //初始化页面
				var params
				uni.getStorage({
					key: 'user_id',
					success: function(res) {
						params = {
							UID: res.data
						}
						console.log(params)
						console.log("缓存中获取user_id：" + res.data);
					}

				});
				this.$api.__api__getToDoList(params)
					.then((res) => {
						console.log("getToDoList ");
						console.log(res);
						this.todolist = this.todolist.concat(res);
						console.log(this.todolist);
					})



			},
	// 		getData: function() {
	// 			uni.request({
	// 				url: 'http://172.27.139.125:8080/v1/todolist/all', //仅为示例，并非真实接口地址。
	// 				method: 'POST',
	// 				data: {
	// 					"UID": 2,
	// 					"List": "一二三四五"

	// 				},
	// 				header: {},
	// 				success: (res) => {
	// 					console.log('get成功');
	// 					console.log(res);
	// 				},
	// 				fail: (res) => {
	// 					console.log('get失败');
	// 					console.log(res.data);
	// 				}
	// 			});
	// 		}

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
	
	/* 回到顶部 */
	.top {
		position: relative;
		display: none;
	}
	
	.topc {
		position: fixed;
		right: 0;
		background: #ff5c7c;
		top: 80%;
		height: 50px;
		line-height: 50px;
	}
	.add {
		position: relative;
		
	}
	.addc {
		position: fixed;
		right: 0;
		background: #8F8F94;
		top: 80%;
		height: 50px;
		line-height: 50px;
	}
</style>
