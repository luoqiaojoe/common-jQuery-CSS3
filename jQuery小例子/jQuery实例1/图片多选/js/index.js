$(function(){

		var $li = $('li');

		// 图片的选中或取消选中效果
		$li.click(function(){

			$(this).toggleClass('on');

			$slecAllHtml();
			$iptCss();
		})

		// 全选
		$('.slecAll').click(function(){

			if($(this).html() == '全选' ) {

				$li.each(function(){
					$(this).addClass('on');
				})

				$(this).html('全不选');

			} else {

				$li.each(function(){
					$(this).removeClass('on');
				})

				$(this).html('全选');

			}

			$iptCss();

		})

		// 其他按钮改变图片被选中的个数后，“全选”按钮value值的变化
		var $slecAllHtml = function(){

			if($('li.on').length == $('li').length){
				$('.slecAll').html('全不选');
			} else {
				$('.slecAll').html('全选');
			}

		}

		// 反选
		$('.slecRves').click(function(){

			$li.each(function(){

				$(this).toggleClass('on');

			})

			$slecAllHtml();
			$iptCss();

		})

		// 其他按钮改变图片被选中的个数后，“提交”按钮样式的变化
		var $iptCss = function(){

			if ($('li.on').length!=0) {
				$('input[type="submit"]').css({

					'color':'#fff',
					'backgroundColor':'#ff8e3f'

				});
			}else {

				$('input[type="submit"]').css({

					'color':'#ff8e3f',
					'backgroundColor':'#fff'

				});

			};

		}

		// 点击提交按钮
		$('input[type="submit"]').click(function(){

			if($('li.on').length == 0) {

				alert('请您至少选择一张图片！')

				return false
			}

			confirm('您确认提交吗？')

			var choosen = '';

			$('li.on').each(function(){

				choosen = choosen +','+ $(this).attr('name');

			})
			
			$('input[type="hidden"]').val(choosen);
	
		})

	})