// $(document).ready(function(){
    SCENE_MNR.set_ui('default');
    
	obj = new_div('rabi');
	obj.set_rect(75,125);
	obj.move_to(50,0);


	flip = 0;
    function game_loop(){
      if(LOOP_ON){
        setTimeout(game_loop, DELTA_TIME);
        UI_MAP['fraps'].set_text('fps:' + get_fps());
        DIV_MAP['rabi'].move_to(GLOBAL.test*10,0);

        x_pos = DIV_MAP['rabi'].pos().x;
        
        if (flip == 1){ GLOBAL.test++ ;   }else{	GLOBAL.test--;  }

        if(x_pos > 1000){	flip = 0;}else if ( x_pos < 0){ flip = 1;}

      }
    } 

    game_loop();





// });

