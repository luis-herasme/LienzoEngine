
import Vector2D from '../../Vector/Vector2D'
import Rect from './Rect'

class Collider extends Rect {
  collides (other) {
    if (this.position.x < other.position.x + other.size.x &&
    this.position.x + this.size.x > other.position.x &&
    this.position.y < other.position.y + other.size.y &&
    this.size.y + this.position.y > other.position.y) {
      return true
    } else {
      return false
    }
  }
}

export default Collider
