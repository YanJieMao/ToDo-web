<template>
	<view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">待办：</view>
				
				<input name="List" v-model="List"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">deadline：</view>
				<input placeholder="" name="Deadline" v-model="Deadline"></input>
			</view>
			
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green lg" @click="submit()">添加todo</button>
				
			</view>
			
			
			
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				List:"",
				Deadline:"",
				UID:""
				
			}
		},
		onLoad() {
			//this.getUserID();
		
		},
		methods: {
			
			getUserID:function(){
				
				
				var uid
				uni.getStorage({
					key: 'user_id',
					success: function(res) {
						uid = res.data
						console.log(uid)
						console.log("缓存中获取user_id：" + res.data);
					}
				
				});
				
				
				
			},
			submit:function(){
				var uid
				uni.getStorage({
					key: 'user_id',
					success: function(res) {
						UID = this.UID.concat(res.data)
						console.log(UID)
						console.log("缓存中获取user_id：" + res.data);
					}
				
				});
				
				
				this.$api.__api__addToDo({
					UID:1,
					List:this.List,
					Deadline:this.Deadline,
					
					
				}).then((res)=>{
					console.log("addtodo")
					console.log(res)
					uni.showToast({
						title:"添加成功",
						duration:3000
						})
						
						setTimeout(function(){
						uni.navigateTo({
							url:"./index"
							
						})
											
					},3000);
				})
				
			}
			
		
	}
	
 }
</script>

<style>

</style>
