class UIObject extends DefaultObject {
  constructor(id) {
    super(id);
    this.elem.className = 'ui_obj';
    $('.ui').append(this.elem);
  }
  set_text(string){
  	this.elem.innerHTML = string;
  	return 0 ;
  }
  move_to(x,y){
    var tar = this.elem;
    var real_x = x - tar.offsetWidth / 2 ;
    var real_y = y - tar.offsetHeight / 2;
    tar.style.left = real_x+'px';
    tar.style.bottom = real_y + 'px';
    return 0;
  }


}