// use ready as promise
$('.ui').ready(function(){

	obj = new_ui('back');
	obj.set_rect(150,35);
	obj.set_text('返回');
	obj.as('btn btn-default');
	obj.move_to(100,500);

	obj = new_ui('board_ui');
	obj.set_rect(150,35);
	obj.set_text('< Controller&View');
	obj.as('btn btn-default');
	obj.move_to(100,370);

	obj = new_ui('demo');
	obj.set_rect(150,35);
	obj.set_text('DEMO >');
	obj.as('btn btn-default');
	obj.move_to(100,320);


	$('#back').on('click',function(){
		LOOP_ON = false;
		SCENE_MNR.set_scene('view/scene/menu.js','rem');
	});

	$('#demo').on('click',function(){
		SCENE_MNR.set_scene('view/scene/demo.js');
	});

	$('#board_ui').on('click',function(){
		SCENE_MNR.set_scene('view/scene/control_view.js');
	});


});
