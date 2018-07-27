import Vector2D from '../../vector/Vector2D'
import _RigidBody from './../RigidBody'
import Collider from './Collider'

class RigidBody extends _RigidBody {

  public radius: number
  public onCollision: Function
  public onTriggerEnter: Function
  public onTriggerStay: Function
  public onTriggerExit: Function

  constructor(position = new Vector2D(0, 0), radius = 5, restitution = 1) {
    super(position, restitution)
    this.radius = radius
    this.mass = Math.PI * Math.pow(this.radius, 2)
  }

  collidesWith(other: RigidBody | Collider) {
    const distance = Vector2D.sub(this.position, other.position)

    if (distance.mag() < this.radius + other.radius) {
      const direction = Vector2D.normalize(distance)
      direction.mult(this.radius + other.radius)
      this.position.add(direction)

      if (this.onCollision) {
        this.onCollision(other)
      }
      if (other.onCollision) {
        other.onCollision(this)
      }

      if (other instanceof RigidBody) {
        this.inelasticCollision(other)
      }

      if (other instanceof Collider) {
        this.velocity.inverse()
        this.velocity.mult(this.restitution)
      }

    }
  }
}

export default RigidBody
