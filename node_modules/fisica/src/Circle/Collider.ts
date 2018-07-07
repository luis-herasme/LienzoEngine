
import { Vector2D } from 'vector_class'

class CircleCollider {
  public position: Vector2D = new Vector2D(0, 0)
  public radius: number = 5

  constructor (position: Vector2D, radius: number) {
    this.position = position
    this.radius = radius
  }

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