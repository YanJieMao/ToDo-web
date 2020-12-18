<template>
	<view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户名：</view>
				<input placeholder="" name="username" v-model="username"></input>
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
				<view class="title">兴趣爱好</view>
				<input placeholder="" name="gender" v-model="gender"></input>	
			</view>
			<view class="padding flex flex-direction">
				<button class="cu-btn bg-green lg" @click="submit()">提交</button>
				
			</view>
			
			
			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:"",
				passwd:"",
				age:"",
				gender:""
				
			}
		},
		methods: {
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
						title:"注册成功",
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
