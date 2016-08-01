class DivObject {
  
  constructor(id) {
    if(DIV_MAP[id] != undefined){
      throw 'id is occupied'
    }
    var div = document.createElement("div");
    div.id = id;
    div.className = 'div_obj';
    this.elem = div;
    $('.gameboard').append(div);
  }

  move_to(x,y){
  	var tar = this.elem 
    var real_x = x - tar.offsetWidth / 2;
    var real_y = -(SCREEN_HEIGHT) + tar.offsetHeight + y;
    tar.style.left = real_x+'px';
    tar.style.bottom = real_y + 'px';
    return 0;
  }

  get_trans(){
    return { 'width': this.elem.style.width, 'height': this.elem.style.height}
  }

  set_trans(width,height){
    this.elem.style.width = width + 'px';
    this.elem.style.height = height + 'px';
    return 0;
  }

  set_img(data){
    this.elem.style['background-image'] = 'url(' + data + ')'
    this.elem.style['background-size'] = 'contain';
    this.elem.style['background-repeat'] = 'no-repeat';
    this.elem.style['background-position'] = 'bottom';
    return 0;
  }
}