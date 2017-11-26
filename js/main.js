$(function(){
	var isIE=$.browser.msie,
				isIE8=isIE && $.browser.version=='8.0';
	//左侧Nav 父类点击事件
	var leftMenuItems=$("#leftMenu").children(".item");
	leftMenuItems.children("p").click(function(){
		leftMenuItems.removeClass("z_cur");
		$(this).parent(".item").addClass("z_cur");
		var curChidren=$(this).next(".childrenMenu");
		var allChildren=$(".childrenMenu");
		if(curChidren.length){
			allChildren.removeClass("z_children");
			curChidren.addClass("z_children");
		}
	});
	// 子类点击事件
	var childMenuItems=$(".childrenMenu").children(".childItem");
	childMenuItems.click(function(){
		childMenuItems.removeClass("z_child_cur");
		$(this).addClass("z_child_cur");
	})
// 设置add 空白区高度
	if($(".add_wrap").length){
		var _addWrapTop=$(".m_section").offset().top+10;
	}
	if($(".fixedBtn").length){
		var _fixBtnHeight=$(".fixedBtn").height();
	}
	$(window).resize(function(){
		var winHeight=$(window).height();
		var headerHeight=$("#header").outerHeight(true)+2;
		var contentHeight=winHeight-headerHeight;
		$(".nav_left").height(contentHeight);
		var winWidth=$(window).width();
		var navWidth=$(".nav_left").outerWidth(true);
		var isIE=$.browser.msie,
				isIE8=isIE && $.browser.version=='8.0';
				if(isIE8){
					var contentWidth=winWidth-navWidth+10;
				}else{
					var contentWidth=winWidth-navWidth+17;
				}
		$(".mainContent_right").height(contentHeight-10)
		$("#contenter").height(contentHeight);

		// 设置add 空白区高度
		if($(".add_wrap").length){
			var _addWrapHeight=winHeight-_addWrapTop-_fixBtnHeight-20;//
			$(".m_section").height(_addWrapHeight);
		}

	}).resize();
	// 左侧滚动条
	$(".nav_left").niceScroll({
		cursorborder:''
	});


	// checkBox_lab
	if(isIE8){
		var chkLab=$(".checkBox_lab");
		//init;
		if(chkLab.length){
			var checked=chkLab.children("input:checkbox:checked").each(function(){
				$(this).next("i").addClass("checked").removeClass("unchecked");
			});
			
			//click
			chkLab.mousedown(function(){
				var _isChecked=$(this).children("input[type='checkbox']").is(':checked');
				var Icon=$(this).children("i");
				if(_isChecked){
					Icon.addClass("unchecked").removeClass("checked")
				}else{
					Icon.addClass("checked").removeClass("unchecked")
				}
			});
		}
	}

	//兼容IE8，9的placeholder
	var _jQPro=[];
	for(var i in jQuery.prototype){
		_jQPro.push(i);
	}
	if($.inArray("placeholder",_jQPro) >-1){
		$('input, textarea').placeholder();
	}
	//下拉框events
	var selectBox=$(".select_box");
	if(selectBox.length){
		selectBox.click(function(){
			if($(this).children(".results_wrap").css('display')=='none'){
				 $(".results_wrap").hide();
				 $(this).children(".results_wrap").show();
			}else{
				$(".results_wrap").hide();
			}
			$(this).children(".iconfont").toggleClass("icon-jiantou3 icon-jiantoukongup");
			return false;
		});
		$(".results_wrap").children(".options").click(function(){
			var _txt=$(this).html();
			$(this).parents(".select_box").children(".seleced_option").html(_txt);
			$(this).parent(".results_wrap").hide();
			$(this).parents(".select_box").children(".iconfont").toggleClass("icon-jiantou3 icon-jiantoukongup");
			return false;
		});

		$('body').bind('click',function(event){
		if (!$( event.target ).closest(".select_box").length ){
			   $(".results_wrap").hide();
			}
		});
	}



})







