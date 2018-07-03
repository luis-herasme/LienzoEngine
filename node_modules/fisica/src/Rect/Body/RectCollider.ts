
import Vector from '../../../Vector'
import Rect from './Rect'

class RectCollider extends Rect {
  check (other) {
    if (this.position.x < other.position.x + other.size.x &&
      this.position.x + this.size.x > other.position.x &&
      this.position.y < other.position.y + other.size.y &&
      this.size.y + this.position.y > other.position.y) {
     return true
    }
    return false
  }
}

export default RectCollider