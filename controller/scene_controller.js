class Scene  {
  constructor() {
  }
  
  set_scene(scene){
  	// clear if exsit
  	if(document.getElementById('scene')){
	  	document.getElementById('scene').remove();
	  	document.getElementsByClassName('gameboard')[0].innerHTML = '';
	}
  	for(var key in DIV_MAP){
  		delete DIV_MAP[key];
  	}
  	// rebuild ui
  	var ele = document.createElement('div');
  	ele.className = 'ui';
  	document.getElementsByClassName('gameboard')[0].appendChild(ele);
  	// rebuild scene scipt
	var ele = document.createElement('script');
	ele.src = 'view/scene/' + scene + '.js';
	ele.id = 'scene';
	document.getElementsByTagName('head')[0].appendChild(ele); 
  }


  set_ui(ui){
  	if(document.getElementById('ui')){
	  	document.getElementById('ui').remove();
	 // 	document.getElementsByClassName('ui')[0].innerHTML = '';
	}
  	for(var key in UI_MAP){
  		delete UI_MAP[key];
  	}
  	var ele = document.createElement('script');
  	ele.src = 'view/ui/'+ ui + '.js';
  	ele.id = 'ui';
  	document.getElementsByTagName('head')[0].appendChild(ele);
  }
}