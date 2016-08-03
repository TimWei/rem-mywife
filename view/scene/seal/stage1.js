
	SCENE_MNR.set_ui('default');

    stage1 ={ qq: 1};

    $('.gameboard').on('click',function(e){
        if(e.target.className.includes('ui_obj')){return;}
        click_pos = get_relate_pos(e);
        tmp = new_div('bo' + stage1.qq++);
        tmp.set_sphe(20);
        tmp.as('blast');
        tmp.move_to(click_pos.x,click_pos.y);
        tmp.set_life(1000);
        // log(click_pos);
    });


    function init(){
        obj = new_div('rabi');
        obj.set_sphe(100);
        obj.move_to(600, 50);
    };

    function game_loop(){
      if(LOOP_ON){













        div_lifecycle();
        setTimeout(game_loop, DELTA_TIME);
        UI_MAP['fraps'].set_text('fps:' + get_fps());
      }
    } 

    init();
    game_loop();
