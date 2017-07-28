;!function(){
	var service = hmd.service;

	var url_arr = [
		'./Script/Services/AppCommonService.js',
		'./Script/Methods/AppCommonMethods.js',
		'./Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
//		$('#datepicker').datepicker();
		var data = [{name:'Lili',age:25,weight:'47kg'},{name:'Jhon',age:26,weight:'46kg'},{name:'wanghua',age:27,weight:'43kg'}];
		hmd.operateTemplateByScript('id',data);

    	hmd.operateTemplateByHTML();
    //console.log($("#odiv"));//数组下标可以把jquery对象转为DOM对象
    //console.log($("#odiv")[0]);
		//var attr = $("#attr").attr("aaa");
   		 hmd.getElementByAttr('data-repeat',$("#attr"));
    	$('.z_log').click(function(){
			window.location.href='Views/register.html?id=1'
			
		})
		$('.z_reg').click(function(){
			window.location.href='Views/register.html?id=2'
		})

	});
}();
