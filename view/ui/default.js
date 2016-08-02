// use ready as promise
$('.ui').ready(function(){
	obj = new_ui('play_btn');
	obj.set_rect(75,35);
	obj.set_text('Play');
	obj.as('btn btn-default');
	obj.move_to(1180,660);

	obj = new_ui('fraps');
	obj.set_rect(100,20);
	obj.set_text('fps: /');
	obj.as('alert alert-warning');
	obj.move_to(100,660)


	$('#play_btn').on('click',function(){
		LOOP_ON = !LOOP_ON;
		LOOP_ON ? $('#play_btn').text('Pause') : $('#play_btn').text('Play');
		LOOP_ON ? console.log("Loop Start") : console.log(" Loop End")
		game_loop();
	});
});