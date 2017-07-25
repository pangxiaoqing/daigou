;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
  	var methods = hmd.methods;
    hmd.require(url_arr,function(){
		$('.z_btn_choice').click(function(){
			if($(this).text()=='选择代购'){
				$(this).text('确认代购');
				$('#z_runfor_list').hide();
				$('#z_runfor_list1').show();
			}

			if($('.z_input_check')[0].checked && $(this).text()=='确认代购'){
//				methods.maskLayerObj.maskLayer("div");
//				$('.z_div_black').show()
				methods.operateLayer({$obj:$('.z_div_black')},function(){

				})
			}
//			console.log($('.z_input_check')[0].checked)
//			if($('.z_input_check')[0].checked){
//				$('.weixuan').hide();
//				$('.xuanzhong').show();
//			}
			
		})
		$('.z_input_check').click(function(){
			console.log($('.z_input_check')[0].checked)
			if($('.z_input_check')[0].checked){
				console.log(222)
				$('.z_weixuan').hide();
				$('.z_xuanzhong').show();
			}else{
				$('.z_weixuan').show();
				$('.z_xuanzhong').hide();
			}
		})
		
		$('.z_yes').click(function(){
			methods.maskLayerObj.close();
		})
  	$('.z_no').click(function(){
			methods.maskLayerObj.close();
		})
  	$('.z_yes_1').click(function(){
			methods.maskLayerObj.close();
		})
  	$('.z_no_1').click(function(){
			methods.maskLayerObj.close();
		})
  	$('.z_close_demand').click(function(){
  		methods.operateLayer({$obj:$('.z_div_black1')},function(){

				})
  	})
  	 $('.z_return').click(function(){
    	window.history.back();
    })
    })

}();
