
import {Vector2D} from 'vector_class'

class StaticCircle {
  public position
  public radius
  public type

  constructor (position = new Vector2D(0, 0), radius = 5) {
    this.position = position
    this.radius = radius
    this.type = 'circle'
  }
}

export default StaticCircle
