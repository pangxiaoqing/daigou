hmd.extend(hmd.service,{
	getJson : function(callback){
		hmd.getJSON('./Script/JSON/default.json',callback);
	},
	// getLineData : function(callback){
	// 	hmd.ws('ws://139.162.32.175:8000/world',callback);
	// },
	// getMapData : function(callback){
	// 	hmd.ws('ws://139.162.32.175:8000/world',callback);
	// },
	// getCircleData : function(callback){
	// 	hmd.ws('ws://139.162.32.175:8000/ratio',callback);
	// }



	oRegister : function(callback){
		var obj = {
	        url:hmd.port+"/register",
			type:'POST',
			data:{
				email:$('#register_email').val(),
				nickname:$('#register_nickname').val(),
				password:$('#register_password').val()
			},
			dataType:'json'
		}
		hmd.send(obj,callback);
	},
	oLogin : function(callback){
		var obj = {
            url:hmd.port+"/login",
			type:'POST',
			data:{
				email:$('#login_email').val(),
				password:$('#login_password').val()
			},
			dataType:'json'
		}
		hmd.send(obj,callback);
	},
	/*
	 
	 * 获取商品列表接口
	 * pxq 2017-07-24
	 * */
	oList : function (num,callback){
		var obj = {
			url:hmd.port+"/getCategory",
			type:"POST",
			data:{
				parent_id:num
			},
			dataType:"json"
		}
		hmd.send(obj,callback);
	}
});
