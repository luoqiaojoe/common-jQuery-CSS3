/*
	自己的运动框架
*/

function getStyle(obj,attr){

	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];

}


function domove(obj,json,fn) {

	clearInterval(obj.timer);

	obj.timer = setInterval(function(){

		var bStop = true;

		for( attr in json){

			var iCur = 0;

			if(attr == 'opacity'){

				iCur = parseInt(parseFloat(getStyle(obj,attr))*100)

			} else{
				iCur = parseInt(getStyle(obj,attr));
			}

			iSpeed = (json[attr] - iCur)/8;

			iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);


			if(iCur!=json[attr]){
				bStop = false;
			}

			if(attr=='opacity'){

				obj.style.filter = 'alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity = (iCur+iSpeed)/100;

			} else{
				obj.style[attr] = iCur + iSpeed +'px';
			}
		}

		if(bStop){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}

	},30)
 
}