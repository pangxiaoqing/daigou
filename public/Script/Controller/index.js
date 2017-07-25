;!function(){
	var service = hmd.service;

	var url_arr = [
		'./Script/Services/AppCommonService.js',
		'./Script/Methods/AppCommonMethods.js',
		'./Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){

    	$('.z_log').click(function(){
			window.location.href='Views/register.html?id=1'
			
		})
		$('.z_reg').click(function(){
			window.location.href='Views/register.html?id=2'
		})

	});
}();
