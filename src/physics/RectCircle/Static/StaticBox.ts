
import Vector from '../../../Vector/Vector2D'

export default class StaticBox {
  public position: Vector
  public side    : number
  public type    : string

  constructor (position = new Vector(0, 0), side = 5) {
    this.position = position
    this.side = side
    this.type = 'box'
  }
}
