(function(){
	var index = 0;
	var timer;
	timer = setInterval(function(){
		index++;
		index%=$('#banner li').length;
		$('#banner ul').animate({left:'-'+(index*100)+'%'}, 1000,
			function(){
				if(index==$('#banner li').length-1){
					index=0;
					this.style.left = "0%";
				}
	 		}
	 	);
	}, 3000);
})();