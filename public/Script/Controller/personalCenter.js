
;!function(){
	var service = hmd.service;

	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		$('#w_centerLinks li').click(function(){
	  	var ind=$(this).index();
	  	var topage=$('#w_centerLinks li').eq(ind).children('.w_cc').attr('linkto');
	  	if(topage){
	  		topage='./'+topage+'.html';
	  		window.location.href=topage;
	  	}
	  })
		$('.w_homeIcon').click(function(){
			window.location.href='../../index.html'
		})

	});
}();

