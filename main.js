   var flip = 1; 
   function game_loop(){
      if(LOOP_ON){
        setTimeout(game_loop, DELTA_TIME);
        UI_MAP['fraps'].set_text('fps:' + get_fps());
        

        DIV_MAP['rabi'].move_to(TEST*10,0);

        x_pos = DIV_MAP['rabi'].pos().x;
        
        if (flip == 1){ TEST++ ;   }else{	TEST--;  }

        if(x_pos > 1000){	flip = 0;}else if ( x_pos < 0){ flip = 1;}

      }
    }
    