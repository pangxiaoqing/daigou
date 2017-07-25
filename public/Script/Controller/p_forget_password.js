;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
    hmd.require(url_arr,function(){
     	$('.p_headerleft').click(function(){
     		window.history.back();
     	})
     
     
    })
}();
