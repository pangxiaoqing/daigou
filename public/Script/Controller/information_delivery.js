;!function(){
	var service = hmd.service;

	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		$('.z_choice_span').click(function(){
			window.location.href='p_information_release.html'
		})
		$('.z_add_add').click(function(){
			window.location.href='h-purchase.html'
		})
		 $('.z_return').click(function(){
	    	window.history.back();
	    })
	});
}();
