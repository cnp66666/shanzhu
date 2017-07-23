
//设置font-size字体大小

(function(win,docu){
    win.onresize = function(){
        change();
    };
    change();	
    function change(){
        var osize = docu.documentElement.clientWidth /(640/20);
        docu.documentElement.style.fontSize = osize+"px"
    }
})(window,document);

$(function(){
	$('#btn-1').click(function(){
		$('.cnt-fc').css('display','block')
	})
	$('#fc-btn').click(function(){
		$('.cnt-fc').css('display','none')
	})
})
