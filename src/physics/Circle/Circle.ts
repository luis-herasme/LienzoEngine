
import Vector2D from '../../Vector/Vector2D'
import id       from '../../utils/id'

class Circle {
  public position: Vector2D = new Vector2D(0, 0)
  public radius: number = 5
  public id: string

  constructor (position, radius) {
    this.position = position
    this.radius = radius
    this.id = id()
  }
}

export default Circle
