// use ready as promise
$('.ui').ready(function(){

	x_pos = SCREEN_WIDTH/5 + 30;

	obj = new_ui('top_banner');
	obj.set_rect(450,80);
	obj.set_text('姆，我婆');
	obj.as('alert alert-success');
	obj.move_to(x_pos,550);

	obj = new_ui('controller_and_view');
	obj.set_rect(450,35);
	obj.set_text('Controller/View模式');
	obj.as('btn btn-default');
	obj.move_to(x_pos,450);

	obj = new_ui('board_and_ui');
	obj.set_rect(450,35);
	obj.set_text('畫面與UI分離');
	obj.as('btn btn-default');
	obj.move_to(x_pos, 400);

	obj = new_ui('demo');
	obj.set_rect(450,35);
	obj.set_text('demo');
	obj.as('btn btn-warning');
	obj.move_to(x_pos, 300)
	$('#controller_and_view').on('click',function(){
		SCENE_MNR.set_scene('view/scene/control_view.js');
	});

	$('#board_and_ui').on('click',function(){
		SCENE_MNR.set_scene('view/scene/board_ui.js');
	});

	$('#demo').on('click',function(){
		SCENE_MNR.set_scene('view/scene/demo.js');
	});
});