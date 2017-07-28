
;!function(){
	var service = hmd.service;
	var flag = false;
	var url_arr = [
		'../Script/Services/AppCommonService.js',
		'../Script/Methods/AppCommonMethods.js',
		'../Script/Template/AppHTMLTemplate.js'
	];
	hmd.require(url_arr,function(){
		/*
		 
		 * 发布航班信息的日期
		 * pxq 2017-07-26
		 * */
		//$("#dtBox").DateTimePicker();
		var currYear = (new Date()).getFullYear();	
		var opt={};
		opt.date = {preset : 'date'};
		opt.datetime = {preset : 'datetime'};
		opt.time = {preset : 'time'};
		opt.default = {
			theme: 'android-ics light', //皮肤样式
			display: 'modal', //显示方式 
			mode: 'scroller', //日期选择模式
			dateFormat: 'yyyy-mm-dd',
			lang: 'zh',
			showNow: true,
			nowText: "今天",
			startYear: currYear - 50, //开始年份
			endYear: currYear + 10 //结束年份
		};
	
		$("#USER_AGE").mobiscroll($.extend(opt['date'], opt['default']));
		$("#USER_AGE").addClass("p_over_color");
		
		/*
		 
		 * 航班信息页面load进入城市tab
		 * pxq 2017-07-27
		 * */
		
		$('#p_start').click(function(){
			$("#p_fight_input").attr('for','3');
			$("body").removeClass("p_fight_bg");
			$(".p_fight").hide();
			$('#p_city').show();
			$("#p_city").load('h-purchase.html',function(){});
			setInterval(function(){
				if(!($("#p_start").text() == '选择航班始发地')){
					$("#p_start").next().html('');
				}
			},1000);
		})
		$('#p_end').click(function(){
			$("#p_fight_input").attr('for','4');
			$("body").removeClass("p_fight_bg");
			$(".p_fight").hide();
			$('#p_city').show();
			$("#p_city").load('h-purchase.html',function(){});
			setInterval(function(){
				if(!($("#p_end").text() == '选择航班目的地')){
					$("#p_end").next().html('');
				}
			},1000);
		})
		/*点击返回按钮*/	
		$("body").click(function(e){
			var _target = e.target;
			if(_target.id == "z_back1"){
				//window.history.back();
				window.location.href="../../Views/p_fight_information.html";
			}
		});
		/*
		 
		 * 发布航班信息完成接口
		 * pxq 2017-07-27
		 * */
		$('#p_over').click(function(){
			//window.location.href='listWanted.html'
			checkfight();
			console.log(123,flag);
			if(flag){
			service.addSchedule(function(data){
				console.log(data);
				sessionStorage.setItem("p_start_txt",$("#p_start").text());
				sessionStorage.setItem("p_end_txt",$("#p_end").text())
				window.location.href='listWanted.html'
			});
			}
		});
		/*
		 
		 * 发布航班信息完成接口前台验证
		 * pxq 2017-07-27
		 * */
		function checkfight(){
			if($("#p_start").text() == '选择航班始发地'){
				$("#p_start").next().html("请点击选择航班始发地");
				flag = false;
				return false;
			}else{
				$("#p_start").next().html('');
			    flag = true;
			}
			if($("#p_end").text() == '选择航班目的地'){
				$("#p_end").next().html("请点击选择航班目的地");
				flag = false;
				return false;
			}else{
				$("#p_end").next().html('');
			    flag = true;
			}
			if($("#USER_AGE").val() == ''){
				$("#USER_AGE").next().html("请点击选择航班到达日期");
				flag = false;
				return false;
			}else{
				$("#USER_AGE").next().html('');
			    flag = true;
			}
	     }
		

	     
		
  })

	
}();
