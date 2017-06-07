;(function(){
	// 创建枪
	var gun = {

		ele:document.createElement('div'),

		init: function(){

			this.ele.style.position = 'absolute';
			this.ele.style.zIndex = 99;
			this.ele.style.width = '96px';
			this.ele.style.height = '96px';
			this.ele.style.background = 'url(img/gun.png) no-repeat center center',

			document.body.appendChild(this.ele);

			var that = this;

			document.body.addEventListener('mousemove',function(e){

				that.move(e.clientX,e.clientY);

			});

		},

		move:function(x,y){
			x = x - 48;
			y = y - 48;
			this.ele.style.left = x + 'px';
			this.ele.style.top = y + 'px';
		}
		
	}

	window.gun = gun;
})()