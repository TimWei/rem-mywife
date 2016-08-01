class UI {
  
  constructor(id) {
    if(OBJ_MAP[id] != undefined){
      throw 'id is occupied'
    }
    var div = document.createElement("div");
    div.id = id;
    div.className = 'div_obj';
    this.elem = div;
    $('.gameboard').append(div);
  }

}