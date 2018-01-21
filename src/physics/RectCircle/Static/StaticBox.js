
import Vector from '../../Vector'

class StaticBox {
  constructor (position = new Vector(0, 0), side = 5) {
    this.position = position
    this.side = side
    this.type = 'box'
  }
}

export default StaticBox
