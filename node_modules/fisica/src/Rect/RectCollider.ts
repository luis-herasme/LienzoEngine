
import { Vector2D } from 'vector_class'

class RectCollider {
  public position: Vector2D = new Vector2D(0, 0)
  public size: Vector2D = new Vector2D(10, 10)

  constructor(position, size) {
    this.position = position
    this.size = size
  }

  check(other) {
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