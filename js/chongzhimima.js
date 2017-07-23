$(function(){
    $(".next").click(function(){
    	var $val=$(".input1").val();
    	if($val.length<6||$val.length>24){
    		$(".nextsuccess").show()
    		$(".input1").val("")
    	}else{
    		$(".nextfail").show()
    		$(".true").attr("href","../index.html")
    	}
    	$(".nextsuccess").click(function(){
    		$(this).hide()
    	})
    })
	
	
	
	
	
})
window.onload=function(){
	var oEye = document.querySelector('#span2');
		oEye.onclick = function(){
			var oInp = document.querySelector('.input1');
			var oVal = oInp.value;
			if(oVal == ""){
				return;
			}else{
				if(oInp.type == "text"){
					oInp.type = "password";
				}else{
					oInp.type = "text";
				}
			}
		}
}
