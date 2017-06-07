;(function(){
// body的背景图
	var background = {

		src:'img/bg.jpg',

		getSrc:function(newsrc){

			var newsrc = newsrc || this.src;

			document.body.style.backgroundImage = 'url('+ newsrc +')';

		}

	}
	window.background = background;

})()