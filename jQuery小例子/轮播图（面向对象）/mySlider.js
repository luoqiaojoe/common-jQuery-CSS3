;(function(){

function extend(obj1,obj2){

		var newSetting = {};
		obj2 = obj2 || {};

		for(var p in obj1){

			if(obj2.hasOwnProperty(p)){
				newSetting[p] = obj2[p];
			} else {
				newSetting[p] = obj1[p];
			}

		}
		return newSetting;
	}

	function Slider(obj,mysetting){

		var defaultSetting = {
			index:2,
			isauto:true,
			speed:2000,
			txtarea:false,
			picnumlocation:'right'
		};

		this.setting = extend( defaultSetting , mysetting );

		this.currentIndex = +this.setting.index;
		this.speed = this.setting.speed;
		this.lis = obj.querySelectorAll('.pics li');
		this.len = this.lis.length;
		this.picNumLis  = []
		// console.log(this.picNumLis);

		this.timer = null;

		var that = this;

		this.createDom(obj);
		this.goto(this.currentIndex);

		// 点击左侧按钮上一张
		this.btnLeft.addEventListener('click',function (){
			that.prev();
		})

		// 点击右侧按钮下一张
		this.btnRight.addEventListener('click',function (){
			that.next();
		})

		// 鼠标移入角标，对应的图片显示
		for(var i=0;i<this.len;i++){

			var f = function(idx){
				return function(){
					that.goto(idx);
				}
			}(i);

			this.picNumLis[i].addEventListener('mouseenter',f);
		}

		// 自动播放
		if (this.setting.isauto.toString() == 'true') {
			// 鼠标移入，停止自动播放
			obj.addEventListener('mouseenter',function(){
				that.paused();
			})

			// 鼠标移出，继续自动播放
			obj.addEventListener('mouseleave',function(){
				that.autoPlay();
			})
			this.autoPlay();
		};

	}

	Slider.prototype.createDom = function(obj){

		var that = this;
		// 创建左边按钮的父元素
		this.btnLeft = document.createElement('span');
		this.btnLeft.className = 'btn-left';
			// 创建左边按钮
		this.btnLeft.btnPrev = document.createElement('span');
		this.btnLeft.btnPrev.className = 'btn-prev';

		this.btnLeft.appendChild(this.btnLeft.btnPrev);
		obj.appendChild(this.btnLeft);

		// 创建右边按钮的父元素
		this.btnRight = document.createElement('span');
		this.btnRight.className = 'btn-right';
			// 创建右边按钮
		this.btnRight.btnPrev = document.createElement('span');
		this.btnRight.btnPrev.className = 'btn-next';

		this.btnRight.appendChild(this.btnRight.btnPrev);
		obj.appendChild(this.btnRight);

		// 创建文字区域
		this.textArea = document.createElement('div');

		if(this.setting.txtarea.toString() == 'false'){
			this.textArea.className = 'textArea none';
		} else {
			this.textArea.className = 'textArea';
		}
		this.textArea.innerHTML = this.lis[this.currentIndex].querySelector('img')['alt'];

		obj.appendChild(this.textArea);

		// 创建角标
		this.picNumOl = document.createElement('ol');

		if( this.setting.picnumlocation == 'right' ){
			this.picNumOl.className = 'picNum goright';
		} else{
			this.picNumOl.className = 'picNum';
		}
			// 创建角标的li
		for(var i=0;i<this.len;i++){

			var li = document.createElement('li');

			if ( i == this.currentIndex ) {
				li.className = 'on';
			};
			this.picNumLis.push(li);
			this.picNumOl.appendChild(li);
		}
		
		obj.appendChild(this.picNumOl);

	}

	Slider.prototype.prev = function(){
		this.goto( ( this.currentIndex - 1 + this.len ) % this.len );
	}

	Slider.prototype.next = function(){
		this.goto( ( this.currentIndex + 1 ) % this.len );
	}

	Slider.prototype.goto = function (thatIndex){

		for(var i=0;i<this.len;i++) {
			this.lis[i].className = '';
			this.picNumLis[i].className = '';
		}
		this.lis[thatIndex].className = 'on';
		this.picNumLis[thatIndex].className = 'on';

		this.currentIndex = thatIndex;

		this.textArea.innerHTML = this.lis[this.currentIndex].querySelector('img')['alt'];
	}

	Slider.prototype.autoPlay = function(){
		var that = this;
		this.timer = setInterval(function(){
			that.next();
		},this.speed)
	}

	Slider.prototype.paused = function(){
		clearInterval(this.timer);
	}

	window.Slider = Slider;

	window.addEventListener('load',function(){

		var obj = document.querySelectorAll('.slider');

		for(var i=0;i<obj.length;i++){

			new Slider(obj[i],obj[i].dataset);

		}

	})
	

})()