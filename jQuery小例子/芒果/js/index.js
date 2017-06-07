// mongo_city部分
$(function(){
	var $mongo_city_change = $(".city-change");
	var $mongo_city_sub  = $(".city-sub");
	var $mongo_city = $(".mongo-city");
	
	$mongo_city.mouseenter(function(event) {
		$mongo_city_sub.css({"display":"block"});
		$(this).addClass('on');
	}).mouseleave(function(event) {
		$mongo_city_sub.css({"display":"none"});
		$(this).removeClass('on');
	});
});
// 搜索框中
$(function(){
	var $search_classify = $(".search-classify");
	var $search_classify_link_i = $('.search-classify-link i');
	var $drop_down_list = $(".drop-down-list");
	$search_classify.mouseenter(function(){
		$drop_down_list.css({"display":"block"});
		$search_classify_link_i.addClass('active');
	}).mouseleave(function(event) {
		$drop_down_list.css({"display":"none"})
		$search_classify_link_i.removeClass('active');
		
	});

})

// mainnav中鼠标悬停弹列表
$(function(){
	var $mainnav_list_link = $(".mainnav-list-link");
	var $miannav_icons = $(".mainnav-icons");
	var $mainnav_list_link_content = $(".mainnav-list-link-content");

	$mainnav_list_link.hover(function(){
		// $(this).toggleClass('zhuan');
		$(this). toggleClass('show');

	});
})

// 左侧导航栏-----start------//
$(function(){
	// $("wrap-menu").mouseenter(function(event) {
	// 	$(this).animate({"marginLeft":"30px"}, 1000);
	// });
	var $mainnav_classfiy_list_li = $('.mainnav-classify-list').find('li');
	 var $wrap_menu = $('.wrap-menu');

	// $(".mainnav-classify-list li").mouseenter(function(){
	//  	$(".mainnav-classify-list li").find('.wrap-menu').animate({"left":"10px"}, 500);
	// })

	// 右侧边栏偏移事件
	// $mainnav_classfiy_list_li.hover(function(event) {
	// 	$(this).toggleClass('move');
	// })
	
	$mainnav_classfiy_list_li.mouseenter(function() {
		$(this).find('.wrap-menu').stop().animate({marginLeft:10},500);
		$(this).addClass('move').siblings().removeClass("move");
	}).mouseleave(function(){
		$(this).find('.wrap-menu').stop().animate({marginLeft:0},500);
		$(this).removeClass('move')
	})


});
// 左侧导航栏-----end------//


// 轮播图 ----start-------------//
$(function(){
	var $slider_ul = $(".mongo-slider ul");
	var $slider_ul_li = $(".mongo-slider ul li");
	var $slider_ol_li = $(".mongo-slider ol li");
	var $btn_left = $(".left-btn");
	var $btn_right = $(".right-btn");
	var index = 0;
	var timer;

	//点击右按钮时的动作
	$btn_right.click(function(){
		if(index< $slider_ol_li.length-1){
			index++;
			//角标的工作
			$slider_ol_li.eq(index).addClass('dian').siblings().removeClass('dian');
			//图片的工作
			$slider_ul.stop().animate({left:"-"+(index+1)+"00%"}, 1000);
			
		}else{
			index++;
			//角标的工作
			$slider_ol_li.eq(0).addClass('dian').siblings().removeClass('dian');
			//图片的工作
			$slider_ul.stop().animate({left:"-"+(index+1)+"00%"},1000,"swing",function(){
				$slider_ul.css({"left":"-100%"});
				index = 0;
			})
		}
	})

	//点击左按钮时动作
	$btn_left.click(function(){
		if(index >0 ){
			index--;
			//角标的工作
			$slider_ol_li.eq(index).addClass('dian').siblings().removeClass('dian');
			//图片的工作
			$slider_ul.stop().animate({left:"-"+(index+1)+"00%"}, 1000);
		}else{
			//角标的工作
			$slider_ol_li.eq($slider_ol_li.length-1).addClass('dian').siblings().removeClass('dian');
			index--;
			//图片的工作
			$slider_ul.stop().animate({left:"-"+(index+1)+"00%"}, 1000,"swing",function(){
				$slider_ul.css({"left":"-500%"});
				index = $slider_ol_li.length-1;
			});
		}
	})

	//图片自动轮播
	clearInterval(timer);
	timer = setInterval(function(){
		$btn_right.click();
	},3000)

	//角标悬停动画
	$slider_ol_li.mouseenter(function(event) {
		index = $(this).index();
		$(this).addClass('dian').siblings().removeClass('dian');
		$slider_ul.stop().animate({left:"-"+(index+1)+"00%"}, 1000);
		clearInterval(timer);
	}).mouseleave(function(event) {
		timer = setInterval(function(){
			$btn_right.click();
		},3000)
	});

	$slider_ul.mouseenter(function(){
		clearInterval(timer);
	}).mouseleave(function(event) {
		timer = setInterval(function(){
			$btn_right.click();
		},3000)
	});
})

// 轮播图 ----end-------------//

// 底部固定

$(function(){
	var $app_close=$(".app-close");
	var $app_inner=$(".app-inner");
	var $app_heard=$(".app-heard");
	
	$app_close.click(function() {
		// $app_inner.animate({width:"toggle"},500);
		$app_inner.animate({left:-1355},700)	//大图隐藏
		
		setTimeout(function(){	//为了防止缓慢出来所以要设置时间出来
			$app_heard.animate({left:0},500);	//小图出来

		},1000)
	})	
	
	$app_heard.click(function(event) {
		$app_heard.animate({left:-217},300);//小图隐藏
		setTimeout(function(){	
			$app_inner.animate({left:0},500);//大图出来

		},400)
		// $app_inner.animate({left:0},700);
	});
});
// ------------------------------侧边固定--------------------------------------
// $(function(){
// 	$(".hs-top .hs-tob").mouseenter(function(){
// 		$(this).children(".hs-link").css({"background":"#ff7200"});
// 		$(this).find(".yc-ico-hs").stop().css({"display":"block"}).animate({left:-106},300);
// 		// $(this).find(".yc-ico-hs").stop().animate({left:-106,opacity:1},300);//透明
// 		$(this).find(".ico-hs-link").addClass('hover').removeClass("ico-hs-link");
// 	}).mouseleave(function(){
// 		$(this).children(".hs-link").css({"background":"#333333"});
// 		$(this).find(".yc-ico-hs").stop().css({"display":"none"}).animate({left:-140},300);
// 		$(this).find(".hover").removeClass("hover").addClass('ico-hs-link');
// 	})
// })
// ------------------------------侧边固定--------------------------------------
	$(function(){
		$(".hs-top li").mouseenter(function() {
			$(this).children(".hs-link").css({"background":"#ff7200"});
			$(this).addClass('pp').siblings().removeClass('pp')
			$(this).children('.yc-ico-hs').stop().css({"display":"block"}).animate({left:-106},300)
			}).mouseleave(function(){
			$(this).children(".hs-link").css({"background":"#333333"});
			$(this).removeClass('pp');
			$(this).children('.yc-ico-hs').stop().css({"display":"none"}).animate({left:-140},300)
			})

			$(".hs-bottom li").mouseenter(function() {
			$(this).children(".hs-link").css({"background":"#ff7200"});
			$(this).addClass('pp').siblings().removeClass('pp')
			$(this).children('.yc-ico-hs').stop().css({"display":"block"}).animate({left:-106},300)
			}).mouseleave(function(){
			$(this).children(".hs-link").css({"background":"#333333"});
			$(this).removeClass('pp');
			$(this).children('.yc-ico-hs').stop().css({"display":"none"}).animate({left:-140},300)
			})

//--------------------------- 点击展开时候的的效果---------------------------
			$(".zhe").click(function() {
				$(".hs-top").hide();
				$(this).hide();
				$(".zhang").show();
				$(".zhang1").css({"display":"block"});
				$(".hs-slide").css({"background":"#fff"})
				// return false;
			});
			$(".zhang").click(function() {
				$(".hs-top").show();
				$(this).hide();
				$(".zhe").show();
				$(".zhang1").css({"display":"none"});
				$(".hs-slide").css({"background":"#333"})

				// return false;
			});



	})
// 返回顶部TOP
	$(function(){
			$(".ico-hs-link6").click(function(){
				$("html,body").animate({scrollTop:0},500);
				return false;
			})
		})
