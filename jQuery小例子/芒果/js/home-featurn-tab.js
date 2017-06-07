// 出境游的jstab选项卡

// 面向对象思想写
// function Tab(homecontitem){

// this.homecontitem=document.getElementById(homecontitem);
// this.home_cont_item=this.homecontitem.getElementsByTagName("div")[1];
// this.lis=this.home_cont_item.getElementsByTagName('li');

// this.home_content=this.homecontitem.getElementsByTagName("div")[2];
// this.home_content_r=this.home_content.getElementsByTagName("div")[4].getElementsByTagName("div");
// console.log(this.home_content_r)
// }
// var t1=new Tab("homecontitem");

// 第一种方法H5新添加的属性
// for(var i=0;i<homenavlis.length;i++){
// 	homenavlis[i].index=i;
// 	homenavlis[i].onmouseover=function() {
// 		for(var j=0;j<homenavlis.length;j++){
// 				homenavlis[j].className="";
// 				home_content_rdivs[j].classList.remove('on1');

// 		}
// 		homenavlis[this.index].className="on";
// 		home_content_rdivs[this.index].classList.add('on1');
// 	};
// }

// timer=setInterval(function(){

// },1000)




// 方法二
// 出境游的jstab选项卡
// var home_nav=document.getElementById("home-nav");
// var homenavlis=home_nav.getElementsByTagName("li");

// var home_content_r=document.getElementById("home-content-r");
// // var home_content_rdivs=home_content_r.getElementsByTagName("div");
// var home_content_rdivs=home_content_r.getElementsByClassName("home-content-r-pic");
// console.log(home_content_rdivs);
// for(var i=0;i<homenavlis.length;i++){
// 	homenavlis[i].index=i;
// 	homenavlis[i].onmouseover=(function(event) {
// 		for(var j=0;j<homenavlis.length;j++){
// 				homenavlis[j].className="";
// 				home_content_rdivs[j].style.display="none";
// 		}
// 		homenavlis[this.index].className="on";
// 		home_content_rdivs[this.index].style.display="block"
// 	});
// }


function f(id1,id2){
var home_nav=document.getElementById(id1);
var homenavlis=home_nav.getElementsByTagName("li");

var home_content_r=document.getElementById(id2);
// var home_content_rdivs=home_content_r.getElementsByTagName("div");
var home_content_rdivs=home_content_r.getElementsByClassName("home-content-r-pic");
console.log(home_content_rdivs);
for(var i=0;i<homenavlis.length;i++){
	homenavlis[i].index=i;
	homenavlis[i].onmouseover=(function(event) {
		for(var j=0;j<homenavlis.length;j++){
				homenavlis[j].className="";
				home_content_rdivs[j].style.display="none";
		}
		homenavlis[this.index].className="on";
		home_content_rdivs[this.index].style.display="block"
	});
}
}
f("home-nav","home-content-r");//出境游
f("home-nav1","home-content-r1");//国内游
f("home-nav2","home-content-r2");//周边游
f("home-nav3","home-content-r3");//游轮