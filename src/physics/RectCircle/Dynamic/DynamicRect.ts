
import DynamicBody  from './DynamicBody'
import Vector2D     from '../../../Vector/Vector2D'

class DynamicRect extends DynamicBody {
  public size     : Vector2D
  public mass     : number
  public type     : string
  public collides : Function

  constructor (position, size, restitution = 1, collides?) {
    super(position, restitution)

    this.collides = collides
    this.size     = size
    this.mass     = size.x * size.y
    this.type     = 'rect'
  }

  circleCollision (circle) {
    const distX = Math.abs(circle.position.x - this.position.x - this.size.x / 2)
    const distY = Math.abs(circle.position.y - this.position.y - this.size.y / 2)

    if (distX > (this.size.x / 2 + circle.radius)) return false
    if (distY > (this.size.y / 2 + circle.radius)) return false

    if (distX <= (this.size.x / 2)) {
      circle.velocity.y *= -1
      this.collides(this)
    }

    if (distY <= (this.size.y / 2)) {
      circle.velocity.x *= -1
      this.collides(circle)
    }

    const dx = distX - this.size.x / 2
    const dy = distY - this.size.y / 2

    if (dx * dx + dy * dy <= (circle.radius * circle.radius)) {
      circle.velocity.addAngle(90)
      this.collides(circle)
    }
  }

  rectCollision (rect) {

  }
}

export default DynamicRect
