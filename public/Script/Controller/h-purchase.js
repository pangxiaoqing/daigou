
;!function(){
	var service = hmd.service;

	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		$('.h-words').click(function(){
			window.location.href='h-purchase2.html'
		})
		$('.y-back').click(function(){
			window.history.back();
		})
	});
}();
