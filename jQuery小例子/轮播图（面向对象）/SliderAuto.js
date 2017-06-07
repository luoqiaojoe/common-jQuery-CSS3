;(function(){
	function extend(defaultSetting,userSetting){
		//创建一个空对象
		var obj={};

		for(var p in defaultSetting){
			if(userSetting.hasOwnProperty(p) && userSetting[p] != null){ //(1)
				obj[p] = userSetting[p];
			}
			else{							   //(2)
				obj[p] = defaultSetting[p];
			}
		}
		return obj;
	}


	function Slider(contentId,userSetting={}) {	

		var that = this;
		var defaultSetting = {
			speed:2000,
			currentIndex:0,
			isAuto:true,
			isTxt:true,
			directorPos:"center"
		}

		this.setting = extend(defaultSetting,userSetting);//综合考虑用户的设置和默认值后得到的。
		console.info(this.setting)

		this.timer = null;		//定时器
		// 获取整体轮播图的容器
		// if(contentId是字符串)
		//   通过id去搜索
		// if(本身就是dom元素)
		//   则直接使用
		if(typeof contentId == "string"){
			this.container = document.getElementById(contentId);
			if(this.container == null){
				console.info("没有这个id，你看清楚再来");
				return {};
			}
		}
		else if(typeof contentId == "object")
		{
			this.container = contentId;
		}
		// 获取图片集合
		this.content          = this.container.querySelector(".slider-content");

		this.content.addEventListener("transitionend",function(){
			console.info(that.isback)
			if(that.isback){
				that.content.style.transition="";
				that.content.style.transform = "translateX(-800px)";
				that.isback = false;
			}

			else if(that.isfront){
				that.content.style.transition="";
				that.content.style.transform = "translateX(-"+800*(that.len)+"px)";
				that.isfront = false;
			}
		})

		this.lis          = this.container.querySelector(".slider-content").querySelectorAll("li");

		this.content.style.width = this.lis.length * this.lis[0].offsetWidth +"px";
		this.len          = this.lis.length - 2;//图片的张数
		this.directors    = []; //角标；
		this.currentIndex = this.setting.currentIndex;			//当前显示的那张图的编号
		this.speed        = this.setting.speed; 				// 每隔2s,切换一张图 2000ms 单位是ms
		//this.dom();
		dom.call(this);				//动态创建dom元素	
		//this.init();
		init.call(this);			//this.初始化，绑定一些事件
		this.goto(this.currentIndex);	//显示当前图片

		// if(this.setting.isAuto)
		// {
		// 	this.auto();
		// }

		this.setting.isAuto &&  this.auto(); //开始自动播放

	}
	function dom(){
		var that = this;

		//创建按钮，设置属性，添加事件响应，添加到外部的容器中
		this.btnRight     = document.createElement("span");
		this.btnRight.className = "btn btn-right";
		this.btnRight.innerHTML = "";
		this.btnRight.onclick =function(){
			that.next();
		}

		this.btnLeft     = document.createElement("span");
		this.btnLeft.className = "btn btn-left";
		this.btnLeft.innerHTML = "";
		this.btnLeft.onclick =function(){
			that.prev();
		}

		this.container.appendChild(this.btnRight);
		this.container.appendChild(this.btnLeft);


		//创建文字区域，设置属性，添加到外部的容器中
		if( this.setting.isTxt){
			this.txtArea = document.createElement("p");
			this.txtArea.className = "txt";
			this.txtArea.innerHTML = "";
			this.container.appendChild(this.txtArea);
		}
		//先创建角标的容器 ol 
		var ol = document.createElement("ol");
		ol.className = "slider-director";
		if(this.setting.directorPos == "center"){
			ol.style.left = "50%";
			ol.style.right="auto";
			ol.style.transform = "translateX(-50%) ";
		}
		else if(this.setting.directorPos == "right"){
			ol.style.left = "auto";
			ol.style.right="20px";
		}
		else{
			ol.style.left = "50%";
			ol.style.right="auto";
			ol.style.transform = "translateX(-50%) ";
		}

		
		for(var i=0;i<this.len;i++){	
			//用循环去创建多个li
			var li = document.createElement("li");
			li.innerHTML = i+1;
			this.directors.push(li);
			//添加到ol中
			ol.appendChild(li);
		}
		//ol添加到轮播图的容器中
		this.container.appendChild(ol);
	}

	



	function init(){
		// console.info("init",this)
		var that = this;
		for (var i = 0; i < this.directors.length; i++) {
			this.directors[i].onmouseover = function(abc){
				return function(){
					that.goto(abc);
				}
			}(i)
			// this.directors[i].abc = i;
			// this.directors[i].onmouseover = function(){
			// 	that.goto(this.abc);
			// }
		}

		this.container.onmouseenter = function(){
			that.pause();
		}

		this.container.onmouseleave = function(){
			that.continue();
		}
	}
	// 上一张（）
	Slider.prototype.prev = function(){
		//更新currentIndex
		this.currentIndex -= 1;
		if(this.currentIndex < 0){
			
			this.goto(this.currentIndex);
			this.isfront = true;
			this.currentIndex = this.len - 1;
		}
		else{
			this.goto(this.currentIndex);
		}
		
	}
	//下一张（）
	Slider.prototype.next = function(){
		//更新currentIndex
		this.currentIndex += 1;
		if(this.currentIndex >= this.len){
			this.goto(this.currentIndex);
			this.isback = true;
			this.currentIndex = 0;
		}
		else{
			this.goto(this.currentIndex);
			this.isback = false;
		}

		
	}
	//跳到指定张  n：[0,this.len-1]  
	Slider.prototype.goto = function (n) {

		this.currentIndex = n ;	//更新currentIndex
		//console.info(this.currentIndex);
		this.content.style.transition = "transform .5s";
		this.content.style.transform = "translateX(-"+ (n+1)*800 +"px)";
		

		for(var i =0; i<this.len;i++){
			this.directors[i].className = ""; //清除所有的className
		}
		this.directors[(n+this.len)%this.len].className="current";

		//更新p标签中的内容
		this.txtArea && ( this.txtArea.innerHTML = this.lis[(n+1)%this.len].querySelector("img").getAttribute("alt") );//当前图片中的alt属性
	}

	// Slider.prototype.goto = function (n) {

	// 	this.currentIndex = n ;	//更新currentIndex
	// 	//console.info(this.currentIndex);
	// 	// 把所有的图片改成display：none
	// 	for(var i = 0;i<this.len;i++){
	// 		this.lis[i].style.opacity = 0;
	// 		//this.lis[i].style.display="none";
	// 	}
	// 	// 把当前currentIndex改成display:block;
	// 	// this.lis[n].style.display = "block";
	// 	this.lis[n].style.opacity = 1;

	// 	for(var i =0; i<this.len;i++){
	// 		this.directors[i].className = ""; //清除所有的className
	// 	}
	// 	this.directors[n].className="current";

	// 	//更新p标签中的内容
	// 	this.txtArea && ( this.txtArea.innerHTML = this.lis[n].querySelector("img").getAttribute("alt") );//当前图片中的alt属性
	// }
	//自动播放（）
	Slider.prototype.auto = function () {
		var that = this;
		clearInterval(this.timer);
		this.timer = setInterval(function(){
			that.next();
		},this.speed);
	}

	//暂停播放（）
	Slider.prototype.pause = function(){
		clearInterval(this.timer)
	}
	//继续方法（）
	Slider.prototype.continue = function(){
		this.auto();
	}

	window.Slider = Slider;

})();

window.onload = function(){

	//找到全部的具有slider类的容器
	var sliders = document.querySelectorAll(".slider");
	//console.info(sliders);
	for(var i=0;i<sliders.length;i++){
		// console.info(sliders[i]);
		var userSetting = {};
		userSetting.speed = sliders[i].getAttribute("data-speed");
		userSetting.currentIndex = sliders[i].getAttribute("data-currentIndex");
		userSetting.isAuto = sliders[i].getAttribute("data-isAuto") == "true";
		userSetting.isTxt  = sliders[i].getAttribute("data-isTxt") == "true";
		userSetting.directorPos = sliders[i].getAttribute("data-directorPos");
		console.info(userSetting);

		new Slider(sliders[i],userSetting);
		// new Slider(sliders[i],sliders[i].dataset);

	}
}