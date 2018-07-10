
import { Vector2D } from 'vector_class'
import _RigidBody from './../RigidBody'
import Collider from './Collider'

class RigidBody extends _RigidBody {

  public size: Vector2D = new Vector2D(10, 10)
  public onCollision: Function
  public onTriggerEnter: Function
  public onTriggerStay: Function
  public onTriggerExit: Function

  constructor(position = new Vector2D(0, 0), size = new Vector2D(10, 10), restitution = 1) {
    super(position, restitution)
    this.size = size
    this.mass = this.size.x * this.size.y
  }

  collidesWith(other: RigidBody | Collider) {
    if (this.position.x < other.position.x + other.size.x &&
      this.position.x + this.size.x > other.position.x &&
      this.position.y < other.position.y + other.size.y &&
      this.size.y + this.position.y > other.position.y) {

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
