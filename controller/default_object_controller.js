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
    var real_x = x - tar.offsetWidth / 2 ;
    var real_y = y - tar.offsetHeight /2 ;
    tar.style.left = real_x+'px';
    tar.style.bottom = real_y + 'px';
    return 0;
  }

  pos(){
    var tar = this.elem;
    var obj_x = parseFloat(tar.style.left.slice(0,-2));
    var obj_y = parseFloat(tar.style.bottom.slice(0,-2));

    return { 'x': obj_x + tar.offsetWidth / 2 - $('.gameboard').offset().left, 'y':  obj_y + tar.offsetHeight / 2  }
  }
  get_trans(){
    return { 'width': this.elem.style.width, 'height': SCREEN_HEIGHT - (tar.offsetHeight - this.elem.style.height)}
  }

  set_rect(width,height){
    var tar = this.elem;
    if(!tar.className.includes('rect')){
      tar.className = tar.className.replace('sphe','rect')
    }
    tar.style.width = width + 'px';
    tar.style.height = height + 'px';
    return 0;
  }

  set_sphe(radius){
    var tar = this.elem;
    if(!tar.className.includes('sphe')){
      tar.className = tar.className.replace('rect','sphe')
    }
    this.elem.style.width = radius + 'px';
    this.elem.style.height = radius + 'px';
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
    this.elem.className = name.split(' ')[0] +  ' ' + subclass;
    return 0;
  }

  float_to(direction){
    if(direction == 'right'){
      this.elem.style['float'] = 'right';
    }else if (direction == 'left'){
      this.elem.style['float'] = 'left';
    }else{
      this.elem.style['float'] = '';
    }
  }
}