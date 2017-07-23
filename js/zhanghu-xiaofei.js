var a=false
$("#xiaofei").singleTap(function (){
	
	if(a==true){
		a=false
		$("#xianshi").css("display","none")
		$("#black").css("display","none")
		console.log(a)
	}
	else {
		
		$("#xianshi").css("display","block")
		$("#black").css("display","block")
		a=true
		console.log(a)
	}
	
})

$("#black").singleTap(function (){
	a=false
	$("#xianshi").css("display","none")
	$("#black").css("display","none")
})
$("#xuanxiang p").singleTap(function (){
	a=false
	$("#xianshi").css("display","none")
	$("#black").css("display","none")
})
