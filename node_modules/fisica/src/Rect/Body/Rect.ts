
import * as uuidv1 from 'uuid/v1'
import Vector from '../../../Vector'

class Rect {
  public position:Vector = new Vector(0, 0)
  public size: Vector = new Vector(10, 10)
  public id: string = uuidv1()

  constructor (position, size) {
    this.position = position
    this.size = size
  }
}

export default Rect
