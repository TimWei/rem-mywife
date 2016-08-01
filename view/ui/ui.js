// use ready as promise
$('.ui').ready(function(){
	$('#but_s').on('click',function(){
		LOOP_ON = !LOOP_ON;
		game_loop();
	});
});