;(function(){

	function Cloud(){

		this.ele = document.createElement('div');
		this.height = getRdm(50,80);
		this.width =  2 * this.height;
		this.ele.style.height = this.height + 'px';
		this.ele.style.width = this.width + 'px';
		this.ele.style.position = 'absolute';
		this.ele.style.top = getRdm(0,300);
		this.ele.style.left = getRdm(0,document.documentElement.offsetWidth - this.width ) + 'px';

		this.ele.style.backgroundImage = 'url(img/cloud.png)';
		this.ele.style.backgroundRepeat = 'no-repeat'; 
		this.ele.style.backgroundSize = this.width + 'px ' + this.height + 'px' ; 

		this.speed = getRdm(1,5);
		document.body.appendChild(this.ele);

	}

	Cloud.prototype.move = function(){

		var currentLeft = this.ele.offsetLeft;

		if( currentLeft < "-"+this.ele.clientWidth){

			this.ele.style.left = document.documentElement.offsetWidth + 'px';

		} else {

			var newLeft = currentLeft - this.speed;

			this.ele.style.left = newLeft + 'px';

		}

	}

	window.Cloud = Cloud;
})()