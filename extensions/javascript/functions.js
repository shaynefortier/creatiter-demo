function switchMenu(){
	var menuSquare = document.getElementById('menu-navigation');
	if(menuSquare.style.left == "0%"){
		menuSquare.style.left = "-50%";
	}else{
		menuSquare.style.left = "0%";
	}
}
function stickyBackground(){
	var screenPosition = window.pageYOffset;
				
	if(screenPosition > 60){
		document.body.style.backgroundAttachment = "fixed";
		document.body.style.backgroundPosition = "center 0px";
	} else {
		document.body.style.backgroundAttachment = "scroll";
		document.body.style.backgroundPosition = "center 60px";
	}
}