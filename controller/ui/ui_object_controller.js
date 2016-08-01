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
}