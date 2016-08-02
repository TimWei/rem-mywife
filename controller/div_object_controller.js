class DivObject extends DefaultObject {
  constructor(id) {
    super(id);
    this.elem.className = 'rect';
    $('.gameboard').append(this.elem);
  }
}