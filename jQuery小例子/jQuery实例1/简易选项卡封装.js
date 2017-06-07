function TabSwitch( id,btn,divsion ) {

	var oDiv = document.getElementById(id);
		this.btns = oDiv.getElementsByTagName(btn);
		this.divs = oDiv.getElementsByTagName(divsion);
	var i = 0,
		len = this.btns.length;

		that = this;

	for(i=0;i<len;i++){

		this.btns[i].idx = i;

		this.btns[i].onclick = function(){
			that.tab(this);
		}

	}

};

TabSwitch.prototype.tab = function( btn ){

	len = this.btns.length;

	for( var i=0;i<len;i++ ){

		this.btns[i].className = '';
		this.divs[i].className = '';

	}

	btn.className = 'on';
	this.divs[btn.idx].className = 'on';

};