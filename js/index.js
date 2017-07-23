$(function() {
	$(".button").click(function() {
		var $input1 = $(".zhuce input").val();
		var $input2 = $(".zhuce1 input").val();
		if($input1 == "" || $input2 == "") {
			$(".fail").show();
			$(this).attr("href", "#");
			$(".zhuce input").val("");
			$(".zhuce1 input").val("");
		} else {
			$(".success").css("display", "block");
			$(".zhuce input").val("");
			$(".zhuce1 input").val("");
			$(this).attr("href", "html/gerenzhuye.html");
		}
		$(".fail").click(function() {
			$(this).hide();
		})
		
	})
})