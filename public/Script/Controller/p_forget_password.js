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
    	 
    	 * 点击返回按钮，返回上一页
    	 * pxq 2017-07-25
    	 * */
     	$('.p_headerleft').click(function(){
     		window.history.back();
     	});
     	/*
     	 
     	 * 忘记密码-找回密码接口
     	 * pxq 2017-07-26
     	 * */
     	$("#p_resetpassword_btn").click(function(){
     	if(flag){
     		service.resetPassword(function(data){
     			//console.log(data);
     			if(data.code == 1){
     				hmd.methods.operateLayer({$obj:$('#p_forgetpw_mask')},function(){});
     			}else{
     				
     				$('#p_forgetpw_maskerror').html('<span id="p_close" class="p_close"></span>'
								+'<div class="p_mail"><img src="../Styles/images/mail_error.png" /></div>'
								+'<h4>密码无法修改</h4>'
								+'<p>'+data.msg+'</p>'
								+'<div class="p_goemil"><a href="register.html?id=2">请先去注册！</a></div>');
	      			hmd.methods.operateLayer({$obj:$('#p_forgetpw_maskerror')},function(){});
     			}
     		})
     		}
     	});
     	/*
      
      * 去邮箱激活
      * pxq 2017-07-21
      * */
     $("#p_goemil").click(function(){
     	var emil = $('#reset_email').val();
     	var emil_sub = emil.substring(emil.indexOf("@")+1);
     	window.location.href="https://mail."+emil_sub;
     })
     	/*
      
	      * 找回密码成功弹框点击叉关闭弹框
	      * pxq 2017-07-26
	      * */
	     $(".p_reg_mask").click(function(e){
	     	var _target = e.target;
	     	if(_target.nodeName == "SPAN"){
	     		hmd.methods.maskLayerObj.close();
	     	}
	     });
	     /*
	      
	      * 忘记密码-找回密码--前台验证
	      * pxq 2017-07-26
	      * */
	     function resetPassword(){
	     	$("#reset_email").blur(function(){
     		var temp = $("#reset_email").val();
				//对电子邮件的验证
				var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				if(!myreg.test(temp)){
					$("#reset_email").next().html("请输入有效的Email地址!");
					flag = false;
					return false;
				}else{
		      	$("#reset_email").next().html('');
		      	flag = true;
		     }
	     	});
	     	$("#reset_password").blur(function(){
	     		if($("#reset_password").val() == ''){
		     		$("#reset_password").next().html("密码不能为空，请重新输入！");
		     		flag = false;
		     		return false;
		     	}else if($("#reset_password").val().length<8 || $("#reset_password").val().length>16){
		     		$("#reset_password").next().html("请输入8-16位的密码！");
		     		flag = false;
		     		return false;
		     	}
		     	else{
		     		$("#reset_password").next().html('');
		     		flag = true;
		     	}
	     	});
	     	$("#reset_password2").blur(function(){
			 		if($("#reset_password2").val() != $("#reset_password").val()){
			     		$("#reset_password2").next().html("密码和确认密码不一样,请重新输入！");
			     		flag = false;
			     		return false;
			     	}
			     	else{
			     		$("#reset_password2").next().html('');
			     		flag = true;
			     	}
			 	});
	     }
	     resetPassword();
     
     
    })
}();
