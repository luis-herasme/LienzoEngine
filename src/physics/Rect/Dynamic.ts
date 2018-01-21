
import Vector2D from '../../Vector/Vector2D'
import Collider from './Collider'
const Vector = Vector2D
class Dynamic  extends Collider {

  public velocity: Vector2D = new Vector2D(0, 0)
  public acceleration: Vector2D = new Vector2D(0, 0)
  public friction: number = 0.99
  public restitution: number = 1
  public mass: number
  public dynamic: boolean = true

  constructor (position, restitution, size) {
    super(position, size)
    this.mass = size.x * size.y
    this.restitution = restitution
  }

  addForce (force): void {
    this.acceleration.add(force)
  }

  momentum (): Vector2D {
    return Vector.mult(this.velocity, this.mass)
  }

  inelasticCollision (other): void {
    const velocity1 = this.velocity
    const velocity2 = other.velocity
    const totalMomentum = other.momentum()
    totalMomentum.add(this.momentum())
    const totalMass = this.mass + other.mass

    // This velocity
    this.velocity = Vector.sub(velocity2, velocity1)
    this.velocity.mult(this.restitution * other.mass)
    this.velocity.add(totalMomentum)
    this.velocity.div(totalMass)

    // Other velocity
    other.velocity = Vector.sub(velocity1, velocity2)
    other.velocity.mult(other.restitution * this.mass)
    other.velocity.add(totalMomentum)
    other.velocity.div(totalMass)
  }

  update (): void {
    this.acceleration.div(this.mass)
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.velocity.mult(this.friction)
   // if (this.velocity.mag() < 0.05) {
   //   this.velocity.zero()
   // }
    this.acceleration.zero()
  }
}

export default Dynamic
