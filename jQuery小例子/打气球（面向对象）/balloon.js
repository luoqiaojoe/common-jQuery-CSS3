;(function(){
	// 创建气球
	function Balloon(){

		this.ele = document.createElement('div');
		this.ele.className = 'balloon';
		this.reBirth();
		document.body.appendChild(this.ele);

		var that = this;

		// 爆炸完成后，立即重生
		this.ele.addEventListener('animationend',function(){

			this.className = 'balloon';
			that.reBirth();


		})
	}

	Balloon.prototype.move = function(){

		var currentTop = this.ele.offsetTop;

		if( currentTop < "-"+this.ele.clientHeight){

			this.reBirth();

		} else {

			var newTop = currentTop - this.speed;

			this.ele.style.top = newTop + 'px';

		}

	}

	Balloon.prototype.boooom = function(){

			this.ele.className = 'balloon boom';
			score.update(this.mark);

	}

	Balloon.prototype.reBirth = function(){

		this.ele.style.top = getRdm(500,600) + 'px';
		this.ele.style.left = getRdm(0,document.documentElement.offsetWidth-96)  + 'px';
		this.mark = getRdm(1,8);
		this.speed = this.mark;
		this.ele.style.backgroundPositionX = (this.mark-1)%4*-96 + 'px';
		this.ele.style.backgroundPositionY = (Math.ceil(this.mark/4)-1)*-123 + 'px';

	}

	window.Balloon = Balloon;
})()