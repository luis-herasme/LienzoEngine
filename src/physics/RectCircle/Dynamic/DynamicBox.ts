
import DynamicBody from './DynamicBody'

class DynamicBox extends DynamicBody {
  constructor (position, side, restitution = 1) {
    super(position, restitution)
    this.side = side
    this.mass = Math.pow(this.side, 2)
    this.type = 'box'
  }
}

export default DynamicBox
