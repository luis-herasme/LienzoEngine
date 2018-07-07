
import Vector from 'vector_class'
import DynamicBody from './DynamicBody'

class DynamicCircle extends DynamicBody {
  public radius
  public type

  constructor (position, radius, restitution = 0.5) {
    super(position, restitution)
    this.radius = radius
    this.mass = Math.PI * Math.pow(this.radius, 2)
    this.type = 'circle'
  }

  circleCollision (other) {
    const distance = Vector.sub(this.position, other.position)
    if (distance.mag() < this.radius + other.radius && distance.mag()) {
      const direction = Vector.normalize(distance)
      direction.mult(this.radius + other.radius)
      direction.sub(distance)
      this.position.add(direction)

      if (other.isDynamic) {
        this.inelasticCollision(other)
      } else {
        this.velocity.inverse()
      }
      this.coliciona(other)
    }
  }

  rectCollision (rect) {
    const distX = Math.abs(this.position.x - rect.position.x - rect.size.x / 2)
    const distY = Math.abs(this.position.y - rect.position.y - rect.size.y / 2)

    if (distX > (rect.size.x / 2 + this.radius)) return false
    if (distY > (rect.size.y / 2 + this.radius)) return false

    if (distX <= (rect.size.x / 2)) {
      this.velocity.y *= -1
      this.coliciona(rect)
    }

    if (distY <= (rect.size.y / 2)) {
      this.velocity.x *= -1
      this.coliciona(rect)
    }

    const dx = distX - rect.size.x / 2
    const dy = distY - rect.size.y / 2

    if (dx * dx + dy * dy <= (this.radius * this.radius)) {
      this.velocity.addAngle(90)
      this.coliciona(rect)
    }
  }
}

export default DynamicCircle
