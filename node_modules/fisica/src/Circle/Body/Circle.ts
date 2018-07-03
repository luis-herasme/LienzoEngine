
import { Vector2D } from 'vector_class'

class Circle {
  public position: Vector2D = new Vector2D(0, 0)
  public radius: number = 5

  constructor (position, radius) {
    this.position = position
    this.radius = radius
  }
}

export default Circle
