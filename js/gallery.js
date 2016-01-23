$(document).ready(function() { 
	console.log('This is working'); 
});

//first version

// $(function enlargeImage(){
//     $('#image1').on('click', function (){
//     	$(this).width(400);
//     });
// });

//resize image on alternating clicks
var clicks = 0;

var alternate = 0;
$(function resizeImage(){
$('.gallery-image').on('click', function(){
	console.log("click registered")

    if(alternate == 0){
    		console.log("flag = 0 and image will be enlarged")
            $(this).width(300);

            alternate = 1;
            return;
        }

    else{
    		console.log("flag = 1")
            $(this).width(200);

            alternate = 0;
            return;
        }

	});

});