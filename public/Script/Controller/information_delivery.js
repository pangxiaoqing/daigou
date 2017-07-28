;!function(){
	var service = hmd.service;
	var methods = hmd.methods;
	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		 var se= methods.changeLocationSearchToObject(location.search.substring(1))
			//zss分类取参数
		  var goods_name = decodeURIComponent(se.name);
//		  sessionStorage.setItem('goods_name',goods_name);
//		  var choice_name = sessionStorage.getItem('goods_name');
		  $('.z_choice_span').text(goods_name)
		  //zss重新回到分类页面
		$('.z_choice_span').click(function(){
			window.location.href='p_information_release.html'
		})
		//zss跳转页面到城市列表1
		$('#z_add_add1').click(function(){
			 if($('.z_add_country1').find('span').length>=3){
			 	return  false;
			 }
			$('#z_oid').attr('for','1')
			$('#layer_country').show()
			$('.z_infor').hide()
			$('#layer_country').load('h-purchase.html',function(){
		  	
		  	})
		})
		//zss跳转页面到城市列表2
		$('#z_add_add2').click(function(){
			 if($('.z_add_country2').find('span').length>=1){
			 	return  false;
			 }
			$('#z_oid').attr('for','2')
			$('#layer_country').show()
			$('.z_infor').hide()
			$('#layer_country').load('h-purchase.html',function(){
		  	
		  	})
		})
		
		//zss返回按钮
		 $('.z_return').click(function(){
	    	window.history.back();
	   })
		 //zss城市取消
		  $('.z_country_cancel').click(function(){
		  	$(this).parent().hide()
		  })
		  //zss确认发布
		 $('.z_btn_choice').click(function(){
		
		 	var city_arr = [];
//		 	$('#category_id').val(se.id);
			$('#category_id').val(goods_name);
		 	$('#token').val(localStorage.getItem('token'));
		 	$('#userid').val(localStorage.getItem('user_id'));
//		 	$('#good_to').val(localStorage.getItem('z_city_id'));
		 	$('#good_to').val($('.z_add_country2').find('span').text());
		 	$('.z_add_country1').find('span').each(function(index,element){
		 	
		 		city_arr.push($(element).text())
		 	})
		 	var c_arr = city_arr.join(',')
		 	$('#good_from').val(c_arr);
		 	 var data = new FormData($('#z_myform')[0]); 
		 	$.ajax({
				type:'post',
				url:hmd.port+"/addBuyinfo",
				dataType:'text',
		        processData: false,  // 告诉JSLite不要去处理发送的数据
		        contentType: false,
				data:data,
				success:function(data){
					console.log(data)
					window.location.href='publicationRecord.html';
				},
				error : function(e){
					console.log(e)
				}
				
			})
		 })
	});
}();
