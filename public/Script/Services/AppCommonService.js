hmd.extend(hmd.service,{
	register : function(callback){
		var obj = {
	        url:hmd.port+"/register",
			type:'POST',
			data:{
				email:$.trim($('#register_email').val()),
				nickname:$.trim($('#register_nickname').val()),
				password:$.trim($('#register_password').val())
			},
			dataType:'json'
		}
		hmd.send(obj,callback);
	},
	login : function(callback){
		var obj = {
            url:hmd.port+"/login",
			type:'POST',
			data:{
				email:$.trim($('#login_email').val()),
				password:$.trim($('#login_password').val())
			},
			dataType:'json'
		}
		hmd.send(obj,callback);
	},
	/*
	 
	 * 获取商品列表接口
	 * pxq 2017-07-24
	 * */
	getCategory : function (num,callback){
		var obj = {
			url:hmd.port+"/getCategory",
			type:"POST",
			data:{
				parent_id:num
			},
			dataType:"json"
		}
		hmd.send(obj,callback);
	},
	/*
	 
	 * 忘记密码-更改密码接口
	 * pxq 2017-07-26
	 * */
	resetPassword : function(callback){
		var obj = {
			url:hmd.port+"/resetPassword",
			type:"POST",
			data:{
				email:$("#reset_email").val(),
				password:$("#reset_password").val()
			},
			dataType:"json"
		}
		hmd.send(obj,callback);
	},
	//zss获取地区接口
	oCountry : function(num,callback){
		var obj = {
			url:hmd.port+"/getAddr",
			type:"POST",
			data:{
				parent_id:num
			},
			dataType:"json"
		}
		hmd.send(obj,callback);
	},
	/*
	 
	 * 发布航班接口
	 * pxq 2017-07-27
	 * */
	addSchedule : function(callback){
		var obj = {
			url:hmd.port+"/addSchedule",
			type:"POST",
			data:{
				token:localStorage.getItem("token"),
				user_id:localStorage.getItem("user_id"),
				from_city:$("#p_start").text(),
				to_city:$("#p_end").text(),
				arrival_time:$("#USER_AGE").val()
			},
			dataType:"json"
		}
		hmd.send(obj,callback);
	},
	/*
	 
	 * 求购列表
	 * pxq 2017-07-27
	 * */
	compareBuyinfo : function(callback){
		var obj = {
			url:hmd.port+"/compareBuyinfo",
			type:"POST",
			data:{
				token:localStorage.getItem("token"),
				from_city:sessionStorage.getItem("p_start_txt"),
				to_city:sessionStorage.getItem("p_end_txt")
			},
			dataType:"json"
		}
		hmd.send(obj,callback);
	}

	
});
