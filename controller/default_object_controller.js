class DefaultObject {
  
  constructor(id) {
    if(id_occupied(id)){
      throw 'id is occupied'
    }
    var div = document.createElement("div");
    div.id = id;
    this.elem = div;
  }

  move_to(x,y){
  	var tar = this.elem;
    var real_x = x - tar.offsetWidth / 2;
    var real_y = -(SCREEN_HEIGHT) + tar.offsetHeight + y;
    tar.style.left = real_x+'px';
    tar.style.bottom = real_y + 'px';
    return 0;
  }

  pos(){
    var tar = this.elem;
    return { 'x': parseFloat(tar.style.left.slice(0,-2)) + tar.offsetWidth / 2, 'y': -(SCREEN_HEIGHT) + tar.offsetHeight - parseFloat(tar.style.bottom.slice(0,-2)) }
  }
  get_trans(){
    return { 'width': this.elem.style.width, 'height': SCREEN_HEIGHT - (tar.offsetHeight - this.elem.style.height)}
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

  as(subclass){
    var name = this.elem.className;
    this.elem.className = name.split(' ')[0] + ' ' + subclass;
    return 0;
  }
  float_to(direction){
    if(direction == 'right'){
      this.elem.style['float'] = 'right';
    }else if (direction == 'left'){
      this.elem.style['float'] = 'left';
    }else{
      return 1;
    }
  }
}