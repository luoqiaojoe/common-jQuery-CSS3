;(function(){
	// 动画总导演
	var director = {

		frameIndex:0,
		balloonNum:10,
		currentBalloonNum:0,
		score:0,
		actors:[],

		action:function(){

			var i = 0,
				that = this;

			background.getSrc();
			score.init();
			gun.init();

			for( i=0;i<3;i++){
				this.actors.push( new Cloud() );
			}

			// 判断枪是否击中气球

			document.body.addEventListener('click',function(e){

				for( var i=0;i<that.actors.length;i++){

					var obj = that.actors[i];

					if( obj.constructor === Balloon ) {

						// var objW = obj.clientWidth / 2;
						// var objH = obj.clientHeight / 2;
						var x = obj.ele.offsetLeft + 48;
						var y = obj.ele.offsetTop + 48;

						if( Math.pow( x - e.clientX,2) + Math.pow( y - e.clientY,2) < Math.pow(48,2) ){

							obj.boooom();
							document.getElementById('audio').play();

						}

					}

				}

			})

			setInterval(function(){

				that.frameIndex++;

				if( that.frameIndex %10 == 0 && that.currentBalloonNum < that.balloonNum ){

					that.currentBalloonNum++;
					that.actors.push( new Balloon() );

				}

				for(i=0;i<that.actors.length;i++){

					that.actors[i].move();

				}	
			},50)

		}
		
	}

	window.director = director;
})()