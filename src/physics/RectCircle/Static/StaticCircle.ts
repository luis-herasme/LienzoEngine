
import Vector from '../../../Vector/Vector2D'

export default class StaticCircle {
  public position: Vector
  public radius  : number
  public type    : string

  constructor (position = new Vector(0, 0), radius = 5) {
    this.position = position
    this.radius = radius
    this.type = 'circle'
  }
}
