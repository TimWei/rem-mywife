// use ready as promise
$('.ui').ready(function(){

	obj = new_ui('back');
	obj.set_rect(150,35);
	obj.set_text('返回');
	obj.as('btn btn-default');
	obj.move_to(100,500);

	obj = new_ui('board_ui');
	obj.set_rect(150,35);
	obj.set_text('畫面與UI分離 >');
	obj.as('btn btn-default');
	obj.move_to(100,350);


	$('#back').on('click',function(){
		LOOP_ON = false;
		SCENE_MNR.set_scene('view/scene/menu.js','rem');
	});

	$('#board_ui').on('click',function(){
		LOOP_ON = false;
		SCENE_MNR.set_scene('view/scene/board_ui.js');
	});

});