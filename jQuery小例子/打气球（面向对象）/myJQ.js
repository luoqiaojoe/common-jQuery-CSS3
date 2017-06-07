;(function(){
	function getRdm(m,n){

		return m + Math.round( Math.random()*(n - m) );

	}
	window.getRdm = getRdm;
})()