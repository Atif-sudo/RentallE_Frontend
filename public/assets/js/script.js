
$(function(){


	// /* ---- Countdown timer ---- */

	// $('#counter').countdown({
	// 	timestamp : (new Date()).getTime() + 11*24*60*60*1000
	// });


	// /* ---- Animations ---- */

	// $('#links a').hover(
	// 	function(){ $(this).animate({ left: 3 }, 'fast'); },
	// 	function(){ $(this).animate({ left: 0 }, 'fast'); }
	// );

	// $('footer a').hover(
	// 	function(){ $(this).animate({ top: 3 }, 'fast'); },
	// 	function(){ $(this).animate({ top: 0 }, 'fast'); }
	// );


	/*--------------SingleProduct --------------*/

	


		$(".qtyminus").on("click",function(){
			var now = $(".qty").val();
			if ($.isNumeric(now)){
				if (parseInt(now) -1> 0)
				{ now--;}
				$(".qty").val(now);
			}
		})            
		$(".qtyplus").on("click",function(){
			var now = $(".qty").val();
			if ($.isNumeric(now)){
				$(".qty").val(parseInt(now)+1);
			}
		});
});
