
import { Vector2D } from 'vector_class'
import Circle from './Circle'

class CircleCollider extends Circle {

  separate (distance: Vector2D, other): void {
    const direction = Vector2D.normalize(distance)
    direction.mult(this.radius + other.radius)
    direction.sub(distance)
    this.position.add(direction)
  }

  checkCollision (other) {
    const distance = Vector2D.sub(this.position, other.position)
    if (distance.mag() < this.radius + other.radius && distance.mag()) {
      return distance
    }
  }

  collision (other): boolean {
    const distance = this.checkCollision(other)
    if (distance) {
      this.separate(distance, other)
      return true
    }
    return false
  }
}

export default CircleCollider