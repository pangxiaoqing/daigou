;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
  	var methods = hmd.methods;
    hmd.require(url_arr,function(){
			$('.z_btn_buy').click(function(){
				methods.operateLayer({$obj:$('.z_div_black')},function(){
	
					})
			})
			$('.z_yes').click(function(){
				methods.maskLayerObj.close();
				window.location.href='myDeal.html'
			})
	      	$('.z_no').click(function(){
				methods.maskLayerObj.close();
			})
	     $('.z_return').click(function(){
		    	window.history.back();
		    })  	
		      
    })

}();
