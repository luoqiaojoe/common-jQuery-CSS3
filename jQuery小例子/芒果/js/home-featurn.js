// home-featurn  jq滑动效果
$(function(){
	$(".feature-item1 li").mouseenter(function(event) {
		$(this).children('.home-pic').stop().animate({
			top:0},500);// 当鼠标放上去的时候500毫秒打开
	}).mouseleave(function(event) {
		$(this).children('.home-pic').stop().animate({
			top:-328},500);//当鼠标离开的时候500毫秒关闭
	});
});



// — 右侧鼠标放上去白光闪过 
$(function(){
	$(".home-content-l-pic").mouseenter(function(){
		// $(".home-content-navimg b").stop().animate({top:420}, 500)
		$(this).find(".home-content-navimg b").stop().animate({top:450}, 500);
	})
	$(".home-content-l-pic").mouseleave(function(){
		$(".home-content-navimg b").css({top:-420});
		// $(".home-content-navimg b").stop().animate({top:-420}, 500);
		// $(this).find(".home-content-navimg b").stop().animate({top:-450}, 500);
	})
})


// 出境游的图片个体动画效果
$(function(){
	$(".home-content-r-pic li").mouseenter(function(){
		// alert(1111)
		$(this).children(".prc-cont").stop().animate({bottom:-50},300);//迪拜跟团游的背景开始
		$(this).find('.prc-conton').stop().animate({left:0},500); //迪拜跟团游的大背景透明色

	}).mouseleave(function(event) {
		$(this).children(".prc-cont").stop().animate({bottom:0},500);//迪拜跟团游的背景结束
		$(this).find('.prc-conton').stop().animate({left:-475},300); //迪拜跟团游的大背景透明色
	});


})
// 游轮字体变红
	$(function(){
		$(".home-content-l-p1ic li ").hover(function(event) {
			$(this).find("span").toggleClass('rr');
			
		})
	})
// 出境游的tab淡出淡入效果
$(function(){
	$("#home-nav ul li").mouseenter(function(event) {
		// $("#home-content-r div").css({opacity:0}).stop().animate({opacity:1},600);
		$("#home-content-r div").stop().animate({opacity:0.5},100).animate({opacity:1},200);
	});
	$("#home-nav ul li").mouseleave(function(event) {
		// $("#home-content-r div").css({opacity:0}).stop().animate({opacity:1},600);
		// $("#home-content-r div").stop().animate({opacity:0},10).animate({opacity:1},600)
	});
});
// 国内游tab淡出淡入效果
$(function(){
	$("#home-nav1 ul li").mouseenter(function(event) {
		$("#home-content-r1 div").css({opacity:0}).stop().animate({opacity:1},300);
		// $("#home-content-r div").stop().animate({opacity:0.5},10).animate({opacity:1},400);
	});
	$("#home-nav1 ul li").mouseleave(function(event) {
		// $("#home-content-r1 div").css({opacity:0}).stop().animate({opacity:1},600);
		// $("#home-content-r div").stop().animate({opacity:0},10).animate({opacity:1},600)
	});
});
// 周边游效果
$(function(){
	$("#home-nav2 ul li").mouseenter(function(event) {
		$("#home-content-r2 div").css({opacity:0}).stop().animate({opacity:1},800);
		// $("#home-content-r div").stop().animate({opacity:0.5},10).animate({opacity:1},400);
	});
	$("#home-nav2 ul li").mouseleave(function(event) {
		// $("#home-content-r1 div").css({opacity:0}).stop().animate({opacity:1},600);
		// $("#home-content-r div").stop().animate({opacity:0},10).animate({opacity:1},600)
	});
});
// 游轮
// $(function(){
// 	$("#home-nav3 ul li").mouseenter(function(event) {
// 		$(".home-content-r-pic").css({opacity:0}).stop().animate({opacity:1},800);
		
// 		// $("#home-content-r div").stop().animate({opacity:0.5},10).animate({opacity:1},400);
// 		// $(".home-content-r-pic").stop().fadeIn(500);
// 	});
// 	$("#home-nav3 ul li").mouseleave(function(event) {
// 		// $("#home-content-r1 div").css({opacity:0}).stop().animate({opacity:1},600);
// 		// $("#home-content-r div").stop().animate({opacity:0},10).animate({opacity:1},600)
// 	});
// });
// --------图片点击凸出
$(function(){
	$("#home-content-r3 li").mouseenter(function(event) {
		$(this).children("img").animate({width:0},{height:0},1000).animate({width:400},{height:400},1000)
		// animate({width:0, marginLeft:200}, 1000).animate({width:400, marginLeft:0}, 1000);
	})
})

// ------芒果动画
// $(function(){
// $(".home-title .home-tu").animate({left:600},5000)
// // .animate({left:600,opacity:0},5000)
// // $(".home-title .home-tu1").animate({right:600},5000)


// })
