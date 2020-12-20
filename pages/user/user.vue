<template>
	<view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户名：</view>
				
				<input name="username" v-model="username"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">密码：</view>
				<input placeholder="" name="passwd" v-model="passwd"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">年龄</view>
				<input placeholder="" name="age" v-model="age"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">性别</view>
				<input placeholder="" name="gender" v-model="gender"></input>	
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green lg" @click="submit()">修改</button>
				
			</view>
			
			
			
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user :[],
				username:"",
				passwd:"",
				age:"",
				gender:"",
				
				
			}
		},
		onLoad() {
			this.getUser();
		
		},
		methods: {
			
			getUser:function(){
				this.$api.__api__getUser()
				
				var params
				uni.getStorage({
					key: 'user_id',
					success: function(res) {
						params = {
							ID: res.data
						}
						console.log(params)
						console.log("缓存中获取user_id：" + res.data);
					}
				
				});
				this.$api.__api__getUser(params)
					.then((res) => {
						console.log("getUser");
						console.log(res);
						console.log(res[0].id);
						
						this.username = res[0].username;
						this.passwd = res[0].passwd;
						this.age = res[0].age;
						this.gender = res[0].gender
						console.log(this.username);
					})
				
				
			},
			submit:function(){
				this.$api.__api__register({
					username:this.username,
					passwd:this.passwd,
					age:this.age,
					gender:this.gender
				}).then((res)=>{
					console.log("register")
					console.log(res)
					uni.showToast({
						title:"修改成功",
						duration:3000
						})
						
						setTimeout(function(){
						uni.navigateTo({
							url:"../login/login"
							
						})
											
					},3000);
				})
				
			}
			
		
	}
	
 }
</script>

<style>

</style>
