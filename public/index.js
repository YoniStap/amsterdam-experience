$(document).ready(function() {
		$("img").click(
		function() {
			if (this.width === 400){ 
				$(this).width(1200);
				$(this).height(600);
			}

			else if (this.width === 1200){
				$(this).width(400);
				$(this).height(200);
				}
			});
});


