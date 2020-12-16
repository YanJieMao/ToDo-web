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
	// 获取用户信息
	/* __api__getUserInfo:function(params){
		return new http({
			url:'customer/'+params.id,
		});
	}, */
	
	__api__getToDoList:function(params){
		return new http({
			url:'todolist/all',
			method:'post',
			data:params
			
		})
	}
	
	
}