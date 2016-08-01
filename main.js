    function game_loop(){
      if(LOOP_ON){
    	// debug code
    	console.log(TEST++);
        setTimeout(game_loop, DELTA_TIME);
      }
    }
    