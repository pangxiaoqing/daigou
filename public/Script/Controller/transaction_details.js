;!function(){
  var url_arr = [
    '../Script/Services/AppCommonService.js',
    '../Script/Methods/AppCommonMethods.js',
    '../Script/Template/AppHTMLTemplate.js'
  ];
  	var service = hmd.service;
    hmd.require(url_arr,function(){

      $('.login_btn').click(function(){
        service.oLogin(function(data){
          console.log(data)
        })
      })
    
//    hmd.data($('.pp')[0],'test','lala')
//    console.log(hmd.data($('.pp')[0],'test'));
      console.log(hmd.getElementByAttr('oid'))
    })
    $('.z_return').click(function(){
    	window.history.back();
    })

}();
