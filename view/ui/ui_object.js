// use ready as promise
$('.ui').ready(function(){

	obj = new_ui('play_btn');
	obj.set_trans(50,35);
	obj.set_text('Play');
	obj.as('btn btn-default');
	obj.float_to('right');

	obj = new_ui('fraps');
	obj.set_trans(100,5);
	obj.set_text('fps: /');
	obj.as('alert alert-warning');
	obj.float_to('right');

	// obj.move_to(50,0);
	// obj.set_img(TEST_IMG);


	$('#play_btn').on('click',function(){
		LOOP_ON = !LOOP_ON;
		LOOP_ON ? console.log("Loop Start") : console.log(" Loop End")
		game_loop();
	});
});