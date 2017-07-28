
;!function(){
	var service = hmd.service;
	var methods = hmd.methods;
	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		$('.w_backIcon').click(function(){
		  	window.history.back();
		  })
		$('.w_wantedlist').click(function(){
			window.location.href='wantbuy_details.html'
		})
		/*
		 
		 * 求购列表接口
		 * pxq 2017-07-28
		 * */
		service.compareBuyinfo(function(data){
		console.log(data);
		console.log(data.data);
			var _data = data.data;
			var arr = [];
			if(data.code == 1){
				for(var key in _data){
					var good_from = _data[key].good_from,
						info_title = _data[key].info_title,
						info_desc = _data[key].info_desc,
						service_fee = _data[key].service_fee,
						createdate = _data[key].createdate,
						img1 = hmd.port+"/getImages/"+_data[key].img1;
						
						
						var aa = good_from.split(",");
						console.log(123,aa);
						var html = "";
						for(var i in aa){
							console.log(0,aa[i]);
							html = html+'<var>'+aa[i]+'</var>';
						}
					
					arr.push({good_from:good_from,info_title:info_title,info_desc:info_desc,service_fee:service_fee,createdate:createdate,img1:img1,html:html});
					
					
					
				}
			}
			console.log(111,arr);
			console.log(1,img1);
			
			$("#p_buy_list").prepend(methods.generateStringByTemplate({
		        id:"p_buy_list1",
		        				params:{"%s":"info_title","%m":"info_desc","%n":"service_fee","%t":"createdate","%r":"img1","%d":"html"},//data-val=%v
		        data:arr
		    }));
			
			
		});
		/*
		 
		 * 求购列表模版
		 * pxq 2017-07-28
		 * */
		
		
	});
}();
