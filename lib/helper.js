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
      fps = 1000 / (thisLoop - GLOBAL.prev_loop);
      GLOBAL.prev_loop = thisLoop;
      return fps | 0;
    }

    function reset_global(){
      for(key in GLOBAL){
        delete GLOBAL[key];
      }
      document.getElementById('global').remove();
      var ele = document.createElement('script');
      ele.src = 'config/js/globals.js';
      ele.id = 'global';
      document.getElementsByTagName('head')[0].appendChild(ele); 

    }