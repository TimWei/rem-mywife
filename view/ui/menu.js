// use ready as promise
$('.ui').ready(function(){	

	var ui_count = 6;
	x_pos = SCREEN_WIDTH/5 + 30;
	obj = new_ui('top_banner');
	obj.set_rect(450,80);
	obj.set_text('姆，我婆');
	obj.as('alert alert-success');
	obj.move_to(x_pos,550);

	obj = new_ui('controller_and_view');
	obj.set_rect(450,35);
	obj.set_text('Controller/View(施工中)');
	obj.as('btn btn-default');
	obj.move_to(x_pos,450);

	obj = new_ui('board_and_ui');
	obj.set_rect(450,35);
	obj.set_text('畫面與UI分離(施工中)');
	obj.as('btn btn-default');
	obj.move_to(x_pos, 400);

	obj = new_ui('demo');
	obj.set_rect(450,35);
	obj.set_text('Demo');
	obj.as('btn btn-default');
	obj.move_to(x_pos, 350)

	obj = new_ui('back_to_github');
	obj.set_rect(450,35);
	obj.set_text('回到專案頁');
	obj.as('btn btn-danger');
	obj.move_to(x_pos, 200);

	$('#controller_and_view').on('click',function(){
		SCENE_MNR.set_scene('view/scene/control_view.js','control_view');
	});

	$('#board_and_ui').on('click',function(){
		SCENE_MNR.set_scene('view/scene/board_ui.js');
	});

	$('#demo').on('click',function(){
		SCENE_MNR.set_scene('view/scene/demo.js');
	});

	$('#back_to_github').on('click',function(){
		window.location.href = 'https://github.com/TimWei/rem-mywife';
	});

	$('.ui').on('click',function(e){
		if(e.target.className == 'ui' ){
			ui_shaking(4);
		}
		ui_count -- ;
		if(ui_count == 3){

			for(key in UI_MAP){
				tar = UI_MAP[key];
				pos = tar.pos();
				tar.move_to(pos.x + 700, pos.y);
			}
			document.getElementById('rem').id = 'ram';
		}else if(ui_count == 0){
			for(key in UI_MAP){
				tar = UI_MAP[key];
				pos = tar.pos();
				tar.move_to(pos.x - 700, pos.y);
			}
			document.getElementById('ram').id = 'rem';
			ui_count = 6;
		}
	});


});