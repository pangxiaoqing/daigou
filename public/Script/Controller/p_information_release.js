;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
    hmd.require(url_arr,function(){
    	/*
    	 * 获取商品列表接口
    	 * pxq 2017-07-24
    	 * */
    	service.oList(0,function(data){
    		console.log(data);
    		var _data = data.data;
    		if(data.code === 1){
    			for(var key in _data){
    				//console.log(_data[key].cate_title);
    				//console.log(_data[key].category_id);
    				$("#p_infor_title").append("<li num = '"+_data[key].category_id+"'>"+_data[key].cate_title+"</li>");	
    			}
    			$("#p_infor_title li").eq(0).addClass("p_infor_title_cur");
    			var n = $("#p_infor_title li").eq(0).attr("num");
    			service.oList(n,function(data){
					var _data = data.data;
					for(var key in _data){
						$("#p_infor_cont").append("<li>"+_data[key].cate_title+"</li>");
					}
				});
	    		$("#p_infor_title").on("click","li",function(){
	    			var num = $(this).attr("num");
					$(this).addClass("p_infor_title_cur");
					$(this).siblings().removeClass("p_infor_title_cur");
					$("#p_infor_cont").empty();
					service.oList(num,function(data){
						console.log(data);
						var _data = data.data;
						for(var key in _data){
							$("#p_infor_cont").append("<li>"+_data[key].cate_title+"</li>");
						}
					})
				});	
			}
    	})
    	
     	$('.p_headerleft').click(function(){
     		window.history.back()
     	})
     
     
    })
}();
