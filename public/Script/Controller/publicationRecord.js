
;!function(){
	var service = hmd.service;

	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		$('.w_backIcon').click(function(){
	  	window.history.back();
	  })
		$('.w_infoErr').click(function(){
			window.location.href='release_details.html'
		})

	});
}();
