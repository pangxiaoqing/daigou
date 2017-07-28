;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
  	var methods = hmd.methods;
    hmd.require(url_arr,function(){
    	//zss获取商品列表
    	service.getCategory(0,function(data){
    		var _data = data.data;
    		var arr=[];
    		if(data.code===1){
    			for(var i in _data){
    				var data_title = _data[i].cate_title,
    					data_id = _data[i].category_id;
    				arr.push({data_title:data_title,data_id:data_id})
    			}
    			$("#p_infor_title").prepend(methods.generateStringByTemplate({
			        id:"goods_list1",
			        params:{"%i":"data_id","%c":"data_title"},//data-val=%v
			        data:arr
			    }));
			    $("#p_infor_title li").eq(0).addClass("p_infor_title_cur");
			    //zss初始化页面二级菜单
			    service.getCategory(1,function(data){
							var _data = data.data;
						 	var Oarr = [];
							for(var j in _data){
								var data_title = _data[j].cate_title,
			    					data_id = _data[j].category_id;
			    				Oarr.push({data_title:data_title,data_id:data_id})
			    				
							}
							var temp = methods.generateStringByTemplate({
						        id:"goods_list2",
						        params:{"%i":"data_id","%c":"data_title"},//data-val=%v
						        data:Oarr
						   });
							$("#p_infor_cont").html(temp);
						});
				//zss渲染二级菜单		
			    $(".p_infor_title").click(function(event){
			    	var _arr = [];
					var target = event.srcElement||event.target;
					if($(target).closest('li')[0]){
						$(target).closest('li').addClass('p_infor_title_cur').siblings().removeClass("p_infor_title_cur");
						var good_id = $(target).closest('li').attr('goods_id');
						service.getCategory(good_id,function(data){
							var _data = data.data;
							_arr = [];
							for(var j in _data){
								var data_title = _data[j].cate_title,
			    					data_id = _data[j].category_id;
			    				_arr.push({data_title:data_title,data_id:data_id})
			    				
							}
							var temp = methods.generateStringByTemplate({
						        id:"goods_list2",
						        params:{"%i":"data_id","%c":"data_title"},//data-val=%v
						        data:_arr
						   });
							$("#p_infor_cont").html(temp);
						});
					}
				})
			    //zss页面跳转传递参数
			    $('.p_infor_cont').click(function(event){
			    	var target = event.srcElement||event.target;
			    	if($(target).closest('li')[0]){
			    		var good_id = $(target).closest('li').attr('goods_id');
			    		var goods_name = $(target).closest('li').attr('goods_name');
			    		console.log(goods_name)
			    		window.location.href="information_delivery.html?id="+good_id+'&name='+goods_name;
			    	}
			    })
    		}

    	})
    	
     	$('.p_headerleft').click(function(){
     		window.history.back()
     	})
     
     
    })
}();
