$(function(){
	
	$('.bt-span').singleTap(function(){
		
		$('.show-Ul').show();
		$('.show-div').show()
		
	});
	
	$('.show-Ul li input').each(function(){
		$(this).singleTap(function(){
			
			$('.show-Ul').hide();
			$('.show-div').hide()
		});
	});
	
})
