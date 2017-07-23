window.onload = function() {
	var wait = 60;

	function time(o) {
		if(wait == 0) {
			o.removeAttribute("disabled");
			o.value = "60s";
			wait = 60;
		} else {
			o.setAttribute("disabled", true);
			o.value =wait + "s";
			wait--;
			setTimeout(function() {
				time(o)
			}, 1000)
		}
	}
		time(document.getElementById("btn"));
		document.getElementById("btn").onclick=function(){
		time(document.getElementById("btn"));
			
		}
}