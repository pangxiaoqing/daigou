;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
    hmd.require(url_arr,function(){
			 $('.z_return').click(function(){
		    	window.history.back();
		    })
    	$('.z_btn_trans').click(function(){
    		window.location.href='../../index.html'
    	})
    
//    hmd.data($('.pp')[0],'test','lala')
//    console.log(hmd.data($('.pp')[0],'test'));
//    console.log(hmd.getElementByAttr('oid'))
    })
   

}();
