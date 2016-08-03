    // $(document).ready(function(){
	SCENE_MNR.set_ui('default');

    //use hashtable as var namespace
    var stage3 = {
        // params for control sin func.
        pi: Math.PI,
        c: 1,
        c_2: 0,
        bullet_index: 0,
        BUL_MAP: {},
        ctr: 0
    };

    function init(){
        obj = new_div('rabi');
        obj.set_sphe(100);
        obj.move_to(600, 50);

        obj = new_div('boss');
        obj.set_sphe(100);
        obj.move_to(350, 500);

    };


    function boss_move_per_frame(boss){
        rate = Math.sin( (stage3.c / 100) * 2 * stage3.pi );
        rate_2 = Math.sin( (stage3.c_2 / 100) * 2 * stage3.pi );
        vec =  [20, 50];
        curr_pos = boss.pos();
        boss.move_to(curr_pos.x + (rate_2 * vec[0]) , curr_pos.y - (rate * vec[1]) );
        stage3.c += 5 ;
        stage3.c_2 ++;
        if(stage3.c > 100){ stage3.c = 0;}
        if(stage3.c_2 > 100){ stage3.c_2 = 0;}
    }

    
    function vec_rabi_to_boss(){
        pos_rabi =  DIV_MAP['rabi'].pos();
        pos_boss = DIV_MAP['boss'].pos();
        x = pos_rabi.x - pos_boss.x;
        y = pos_rabi.y - pos_boss.y;
        normalize = Math.sqrt(x * x + y * y);
        return {'x': x/normalize, 'y': y/normalize};

    }
    
    function build_bullet(){
        pos = DIV_MAP['boss'].pos();
        vec = vec_rabi_to_boss();
        bul = new_bullet('bullet' + stage3.bullet_index++, -vec.y, +vec.x);
        if(stage3.bullet_index > 300){stage3.bullet_index = 0;} 
        bul2 = new_bullet('bullet' + stage3.bullet_index++, vec.y, -vec.x);
        if(stage3.bullet_index > 100){stage3.bullet_index = 0;} 
        bul.set_sphe(10);
        bul.as('bullet');
        bul.move_to(pos.x, pos.y);
        bul.set_life(3000);

        bul2.set_sphe(10);
        bul2.as('bullet');
        bul2.move_to(pos.x, pos.y);
        bul2.set_life(1000);
    }

    function cul_bullet(){
        map = stage3.BUL_MAP;
        for(key in map){
            tar = map[key];
            pos = tar.pos();
            

            tar.move_to(pos.x + tar.vec.x*15,  pos.y + tar.vec.y*15);
        }
    }

    function bullect_lifecycle(){
      for(key in stage3.BUL_MAP){
        var tar = stage3.BUL_MAP[key];
        if(tar.lifetime != null){
          tar.lifetime -- ;
        }
        if(tar.lifetime < 1){
          tar.destroy(stage3.BUL_MAP);
        }
      }
    }

    function new_bullet(id,x,y){
        stage3.BUL_MAP[id] = new DivObject(id);
        stage3.BUL_MAP[id].vec = {'x':x,'y':y}
        return stage3.BUL_MAP[id];
    }

    function game_loop(){
      if(LOOP_ON){
        if(stage3.ctr %5 == 0){build_bullet();}
        boss_move_per_frame(DIV_MAP['boss']);
        cul_bullet();
        //div_lifecycle();
        bullect_lifecycle();
        setTimeout(game_loop, DELTA_TIME);
        UI_MAP['fraps'].set_text('fps:' + get_fps());
        stage3.ctr++;
        if(stage3.ctr > 200){stage3.ctr = 0;}
      }
    } 

    init();
    game_loop();





// });

