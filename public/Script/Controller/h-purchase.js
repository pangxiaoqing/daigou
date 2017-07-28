
;!function(){
	var service = hmd.service;
	var methods = hmd.methods;
	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		
		//zss城市页面返回键
		$('#z_back2').click(function(){
			$('.z_country_div1').show();
			$('.z_country_div2').hide();
		})
		//zss国家页面返回键
		$('#z_back1').click(function(){
			$('#layer_country').hide();
			$('.z_infor').show();
		})
		//zss初始化调用国家页面
		service.oCountry(0,function(data){
			console.log(data.data)
			var _data = data.data;
			var arr = [];
			for(var i in _data){
				var data_name = _data[i].name,
				    reg_id = _data[i].region_id;
				arr.push({name:data_name,id:reg_id})    
				
			}
			var temp = methods.generateStringByTemplate({
						        id:"z_country",
						        params:{"%i":"id","%c":"name"},//data-val=%v
						        data:arr
						   });
			$("#z_countryList").html(temp);
		})
		//zss点击国家跳转
		$('#z_countryList').click(function(event){
			var target = event.srcElement||event.target;
	    	if($(target).closest('p')[0]){
	    		var country_id = $(target).closest('p').attr('country_id');
				$('.z_country_div1').hide();
				$('.z_country_div2').show();
				//zss城市页面调用
				service.oCountry(country_id,function(data){
					var _data = data.data;
					var arr = [];
					for(var i in _data){
						var data_name = _data[i].name,
						    reg_id = _data[i].region_id;
						arr.push({name:data_name,id:reg_id})    
					}
					var _lists = methods.sortBySpell(_data),
						_py = _lists['py'],
						_segs = _lists['segs'],
						_spell_arr = [],
						spell_script = $('#spell_script'),
						spell_list = $('#spell_list')
					$(_py).each(function(index,element){
						_spell_arr.push({
							name : element,
							data : methods.generateStringByTemplate({
								        id:"spell_list",
								        params:{"%g":"name","%d":"region_id"},
								        data:_segs[index]['data']
								   })
						})
					})
					
					
					var _n = methods.generateStringByTemplate({
					        id:"spell_script",
					        params:{"%s":"name","%l":"data"},
					        data:_spell_arr
					   });
					
					$('#region_list').html(_n)
					
				})
	    	}
		})
		//zss信息发布页面点击城市形成span
		$('#region_list').click(function(event){
			var target = event.srcElement||event.target;
	    	if($(target).closest('p')[0]){
	    		var country_id = $(target).closest('p').attr('country_id');
	    		var country_name = $(target).closest('p').attr('country_name');
				$('#layer_country').hide()
				$('.z_infor').show()
				if($('#z_oid').attr('for')==1){
					var creatSpan = $('<span class="z_country z_country1">'+country_name+'<img class="z_country_cancel" src="../Styles/images/z_cancel.png"/></span>');
					$('.z_add_country1').prepend(creatSpan)
				}
				if($('#z_oid').attr('for')==2){
					var creatSpan = $('<span class="z_country z_country1">'+country_name+'<img class="z_country_cancel" src="../Styles/images/z_cancel.png"/></span>');
					$('.z_add_country2').prepend(creatSpan)
					localStorage.setItem('z_city_id',country_id)
				}
				
				
				$("#p_city").hide();
				$("#p_fight").show();
				if($('#p_fight_input').attr('for')==3){
					$('#p_start').addClass("p_fight_color").text(country_name)
				}
				if($('#p_fight_input').attr('for')==4){
					$('#p_end').addClass("p_fight_color").text(country_name)
				}
				
			}	
		})
		
		
		  
	});
}();
