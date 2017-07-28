;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
  	var flag = false;
    hmd.require(url_arr,function(){
    	/*
    	 * 登录注册页面tab切换
    	 * pxq 2017-07-20
    	 * */
     $("#p_log_reg").click(function(e){
     	var _target = e.target;
     	if(_target.id === "p_login_page"){
     		$(".p_logcont").show();
     		$(".p_triangle_log").show();
     		$(".p_triangle_reg").hide();
     		$(".p_regcont").hide();
     	}
     	if(_target.id === "p_reg_page"){
     		$(".p_logcont").hide();
     		$(".p_triangle_log").hide();
     		$(".p_triangle_reg").show();
     		$(".p_regcont").show();
     	}
     });
     /*
      
      * 注册弹框点击叉关闭弹框
      * pxq 2017-07-20
      * */
     $(".p_reg_mask").click(function(e){
     	var _target = e.target;
     	if(_target.nodeName == "SPAN"){
     		hmd.methods.maskLayerObj.close();
     	}
     })
     /*
      
      * 注册接口
      * pxq 2017-07-21
      * */
		$("#p_reg_btn").click(function(){
			if(flag){
	 		service.register(function(data){
	 			console.log(data);
	     if(data.code == 1){
	      	hmd.methods.operateLayer({$obj:$('#p_reg_mask')},function(){});
	     }else if(data.code == 0&&data.msg ==="该用户已注册"){
					$('#p_reg_maskerror').html('<span id="p_close" class="p_close"></span>'
							+'<div class="p_mail"><img src="../Styles/images/mail_error.png" /></div>'
							+'<h4>您已经注册</h4>'
							+'<div class="p_goemil" id="p_goemil"><a href="register.html?id=1">请去登陆吧</a></div>');
	      	hmd.methods.operateLayer({$obj:$('#p_reg_maskerror')},function(){});
	     }else{
	      	$('#p_reg_maskerror').html('<span id="p_close" class="p_close"></span>'
								+'<div class="p_mail"><img src="../Styles/images/mail_error.png" /></div>'
								+'<h4>注册失败</h4>'
								+'<p>'+data.msg+'</p>'
								+'<div class="p_goemil" id="p_goemil"><a href="register.html?id=2">请重新注册！</a></div>');
	      	hmd.methods.operateLayer({$obj:$('#p_reg_maskerror')},function(){});
	      }
	    })
			}
     })
     /*
      
      * 去邮箱激活
      * pxq 2017-07-21
      * */
     $("#p_goemil").click(function(){
     	var emil = $('#register_email').val();
     	var emil_sub = emil.substring(emil.indexOf("@")+1);
     	window.location.href="https://mail."+emil_sub;
     })
     
     // zss根据页面是登录还是注册来显示不同模块
     if(hmd.getQueryString('id')==1){
     	$('.p_logcont').show().siblings().hide()
// 		$('.p_regcont').hide()
   		$(".p_triangle_log").show();
     }
     if(hmd.getQueryString('id')==2){
     	$('.p_regcont').show().siblings().hide()
     	$(".p_triangle_reg").show();
     }
     /*
      
      * 注册前台验证
      * pxq 2017-07-24
      * */
     
     function checkreg(){
     	$("#register_email").blur(function(){
     		var temp = $("#register_email").val();
			//对电子邮件的验证
			var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if(!myreg.test(temp)){
				$("#register_email").next().html("请输入有效的Email地址!");
				//$("#register_email").focus();
				flag = false;
				return false;
			}else{
	      	$("#register_email").next().html('');
	      	flag = true;
	     }
     	});
     	$("#register_password").blur(function(){
     		if($("#register_password").val() == ''){
	     		$("#register_password").next().html("密码不能为空，请重新输入！");
	     		flag = false;
	     		return false;
	     	}else if($("#register_password").val().length<8 || $("#register_password").val().length>16){
	     		$("#register_password").next().html("请输入8-16位的密码！");
	     		flag = false;
	     		return false;
	     	}
	     	else{
	     		$("#register_password").next().html('');
	     		flag = true;
	     	}
     	});
     	$("#register_password2").blur(function(){
     		if($("#register_password").val() != $("#register_password2").val()){
	     		$("#register_password2").next().html("密码和确认密码不一样,请重新输入！");
	     		flag = false;
	     		return false;
	     	}
	     	else{
	     		$("#register_password2").next().html('');
	     		flag = true;
	     	}
     	});
     	$("#register_nickname").blur(function(){
     		if($("#register_nickname").val() == ''){
	     		$("#register_nickname").next().html("昵称不能为空，请输入昵称！");
	     		flag = false;
	     		return false;
	     	}else if($("#register_nickname").val().length>10){
	     		$("#register_nickname").next().html('请输入昵称，支持英文和汉字，不超过10位哦！');
	     		flag = false;
	     		return false;
	     	}
     		else{
     			$("#register_nickname").next().html('');
     			flag = true;
     		}
     	})
     }
     checkreg();
    /*
     
     * 登录接口
     * pxq 2017-07-25
     * */
    $("#p_log_btn").click(function(){
    	if(flag){
     	service.login(function(data){
     		console.log("1111")
     		console.log(data);
     		var _data = data.data;
     		if(data.code == 1){
     			localStorage.setItem("token",data.token);
     			localStorage.setItem("user_id",_data[0].user_id);
     			/*$.cookie("token",data.token);
     			$.cookie("user_id",_data[0].user_id);*/
     			window.location.href="../../index.html";
     		}else{
		      	$('#p_reg_maskerror').html('<span id="p_close" class="p_close"></span>'
								+'<div class="p_mail"><img src="../Styles/images/mail_error.png" /></div>'
								+'<h4>登录失败</h4>'
								+'<p>'+data.msg+'</p>'
								+'<div class="p_goemil" id="p_goemil"><a href="register.html?id=1">请重新输入！</a></div>');
	      	hmd.methods.operateLayer({$obj:$('#p_reg_maskerror')},function(){});
     		}
     	})
     	}
     });
     /*
      
      * 登录前台验证
      * pxq 2017-07-25
      * */
     function checklog(){
     	$("#login_email").blur(function(){
     		var temp = $("#login_email").val();
			//对电子邮件的验证
			var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if(!myreg.test(temp)){
				$("#login_email").next().html("请输入您的有效的Email地址!");
				//$("#register_email").focus();
				flag = false;
				return false;
			}else{
	      	$("#login_email").next().html('');
	      	flag = true;
	     }
     });
     $("#login_password").blur(function(){
     	if($("#login_password").val() == ''){
	     		$("#login_password").next().html("密码不能为空，请重新输入！");
	     		flag = false;
	     		return false;
	     	}else if($("#login_password").val().length<8 || $("#login_password").val().length>16){
	     		$("#login_password").next().html("请输入8-16位的密码！");
	     		flag = false;
	     		return false;
	     	}
	     	else{
	     		$("#login_password").next().html('');
	     		flag = true;
	     	}
     })
     }
     checklog();
   
     
     /*
      
      * 点击登录页面的忘记密码
      * pxq 2017-07-25
      * */
     $("#p_forget_password").click(function(){
     	window.location.href = "../../Views/p_forget_password.html";
     });
     
     
     
    })
}();
