// use ready as promise
$('.ui').ready(function(){

	obj = new_ui('back');
	obj.set_rect(150,35);
	obj.set_text('返回');
	obj.as('btn btn-default');
	obj.move_to(1180,660);


	$('#back').on('click',function(){
		LOOP_ON = false;
		SCENE_MNR.set_scene('view/scene/menu.js','menu');
	});
});