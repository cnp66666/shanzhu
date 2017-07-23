$(function(){
	$("#span2").click(function(){
		$("input").val("");
	})
	$(".next").click(function(){
        var rge=/^[1][\d]{10}$/;
		
		if($("input").val()==""){
			$(".nextfail").show()
		}else if(!(rge.test($("input").val()))){
//          alert("手机格式不对")
			$(".nextfail").show()
		$("input").val("");
        }else{
			$(".nextsuccess").show();
			$("#phone").html($("input").val())
        }
//		{
//			
////			$(".nextsuccess").show();
//		}
	})
	$(".nextfail").click(function(){
		$(this).hide();
	})
	
	$(".divp2 span").click(function(){
		$(".nextsuccess").hide();
	})
	
//	$(".next").click(function(){
//      var rge=/^[1][\d]{10}$/;
//      if(!(rge.test($("input").val()))){
////          alert("手机格式不对")
//			$(".nextfail").show()
//		$("input").val("");
//      }else{
//      	return
//      }
//  });

})
