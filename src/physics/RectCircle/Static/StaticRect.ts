
import Vector from '../../../Vector/Vector2D'

export default class StaticRect {
  public position: Vector
  public size    : Vector
  public type    : string

  constructor (position = new Vector(0, 0), size = new Vector(5, 5)) {
    this.position = position
    this.size = size
    this.type = 'rect'
  }
}
