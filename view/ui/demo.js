// use ready as promise
$('.ui').ready(function(){


	obj = new_ui('play_btn');
	obj.set_rect(150,35);
	obj.set_text('開始');
	obj.as('btn btn-success');
	obj.move_to(100,320);

	obj = new_ui('board_ui');
	obj.set_rect(150,35);
	obj.set_text('< 畫面與UI分離');
	obj.as('btn btn-default');
	obj.move_to(100,370);

	obj = new_ui('back');
	obj.set_rect(150,35);
	obj.set_text('返回');
	obj.as('btn btn-default');
	obj.move_to(100,500);

	obj = new_ui('fraps');
	obj.set_rect(100,20);
	obj.set_text('fps: /');
	obj.as('alert alert-warning');
	obj.move_to(1180,500)


	$('#play_btn').on('click',function(){
		tar = $('#play_btn');
		LOOP_ON = !LOOP_ON;
		if(LOOP_ON){
			tar.text('停止') 
			console.log("Loop Start")
			tar.removeClass('btn-success');
			tar.addClass('btn-danger');
		}else{
			tar.text('播放') 
			console.log("Loop End")
			tar.removeClass('btn-danger');
			tar.addClass('btn-success');
		}
		game_loop();
	});

	$('#back').on('click',function(){
		LOOP_ON = false;
		SCENE_MNR.set_scene('view/scene/menu.js','rem');
	});


	$('#board_ui').on('click',function(){
		LOOP_ON = false;
		SCENE_MNR.set_scene('view/scene/board_ui.js');
	});
});