;(function(){
	// 创建分数
	var score = {

		ele:document.createElement('div'),
		mark:0,
		init:function(){

			this.ele.style.position = 'absolute';
			this.update(0);
			document.body.appendChild(this.ele);

		},
		update:function(s){
			this.mark += s;
			this.ele.innerHTML = this.mark;
		}

	}

	window.score = score;
})()