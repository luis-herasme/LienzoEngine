
import Vector2D from '../../Vector/Vector2D'

function id () {
  let ID = ''
  for (let i = 0; i < 10; i++) {
    ID += Math.round(Math.random() * 100)
  }
  return ID
}

class Rect {
  public position: Vector2D = new Vector2D(0, 0)
  public size: Vector2D = new Vector2D(10, 10)
  public id: string = id()

  constructor (position, size) {
    this.position = position
    this.size = size
  }
}

export default Rect
