import{http} from '../util/http.js'

export default{
	// 登录
	__api__login:function(params){
		return new http({
			url:'login',  //请求地址
			method:'post', //请求方式
			data:params    //请求参数
		})
	},
	//注册
	__api__register:function(params){
		return new http({
			url:'user',  //请求地址
			method:'post', //请求方式
			data:params    //请求参数
		})
	},
	// 获取用户信息
	__api__getUser:function(params){
		return new http({
			url:'user',
			method:'get',
			data:params
		});
	},
	//更新用户信息
	__api__updateUser:function(params){
		return new http({
			url:'user',  //请求地址
			method:'put', //请求方式
			data:params    //请求参数
		})
	},
	
	
	//获取全部的todo
	__api__getToDoList:function(params){
		return new http({
			url:'todolist/all',
			method:'post',
			data:params
			
		})
	},
	
	//添加todo
	__api__addToDo:function(params){
		return new http({
			url:'todolist',
			method:'post',
			data:params
			
		})
		
	},
	
	
	
}