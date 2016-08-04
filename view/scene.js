// use ready as promise
SCENE_MNR = new Scene();
$(document).ready(function(){
	if(document.location.href.split('#')[1]){
		SCENE_MNR.set_scene('view/scene/'+document.location.href.split('#')[1]+'.js');
	}		
	else{SCENE_MNR.set_scene('view/scene/menu.js','rem');}
	
});

