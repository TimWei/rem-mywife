    function log(string){
      console.log('=============');
      console.log(string);
      console.log('=============');
      return 0;
    }
    
    function new_div(id){
        DIV_MAP[id] = new DivObject(id);
        return DIV_MAP[id];
    }
    
    function new_ui(id){
        UI_MAP[id] = new UIObject(id);
        return UI_MAP[id];
    }
    
    function id_occupied(id){
    	return (document.getElementById(id) != null)
    }

    function get_fps(){
      var thisLoop = new Date;
      fps = 1000 / (thisLoop - PREV_LOOP);
      PREV_LOOP = thisLoop;
      return fps | 0;
    }