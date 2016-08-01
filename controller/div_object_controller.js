class DivObject extends DefaultObject {
  constructor(id) {
    super(id);
    this.elem.className = 'div_obj';
    $('.gameboard').append(this.elem);
  }
}