    function log(string){
      console.log('=============');
      console.log(string);
      console.log('=============');
    }
    
    function new_div(id){
      	DIV_MAP[id] = new DivObject(id);
      	return DIV_MAP[id];
    }
    