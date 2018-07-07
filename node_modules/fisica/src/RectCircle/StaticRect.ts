
import { Vector2D } from 'vector_class'

class StaticBox {
  public position
  public size
  public type

  constructor(position = new Vector2D(0, 0), size = new Vector2D(5, 5)) {
    this.position = position
    this.size = size
    this.type = 'rect'
  }
}

export default StaticBox
