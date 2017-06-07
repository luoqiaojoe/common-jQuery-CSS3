//导航栏 
$(function(){
	$('.menu_mod').on('mouseenter',function(){
		var index = $(this).index();
		$(this).addClass('active');
		$('.menu_list .menu_list_mod').eq(index).addClass('active');
		$('.menu_list .menu_list_mod').eq($(this).index()).on('mouseenter',function(){
			$(this).addClass('active');
			$('.menu_mod').eq($(this).index()).addClass('active');
		});
	}).on('mouseleave',function(){
		$(this).removeClass('active');
		$('.menu_list .menu_list_mod').eq($(this).index()).removeClass('active');
		$('.menu_list .menu_list_mod').eq($(this).index()).on('mouseleave',function(){
			$(this).removeClass('active');
			$('.menu_mod').eq($(this).index()).removeClass('active');
		});	
	});
});
//省份变更，浏览记录，用户信息等
$(function(){
	$('#change_pro').on('click',function(){
		$('#province_list').toggleClass('active');
		$('#change_pro .icon').toggleClass('icon_up');
	});
	$('#viewed').on('click',function(){
		$('#viewed_list').toggleClass('active');
		$('#viewed .icon').toggleClass('icon_up');
	});
	$('#use_info_btn').on('click',function(){
		$('#use_info').toggleClass('active');
	});
});
// 导航信息下标
$(function(){
	var arr=[30,126,258,372,504];
	$('.main_menu .active').on('mouseenter',function(){
		$('#slider_border').css({left:arr[$(this).index()]+'px',width:$(this).width()+'px'});
	}).on('mouseleave',function(){
		$('#slider_border').css({left:'30px',width:'36px'});
	});
});
// 城市周边游
$(function(){
	$('#tab_btn>li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab_mod:eq('+$(this).index()+')').addClass('active').siblings().removeClass('active');
	});
});