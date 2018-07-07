
import { Vector2D } from 'vector_class'
import RectCollider from './RectCollider'

class Dynamic extends RectCollider {

  public velocity: Vector2D = new Vector2D(0, 0)
  public acceleration: Vector2D = new Vector2D(0, 0)
  public restitution: number = 1
  public mass: number
  public dynamic: boolean = true

  constructor(position, restitution, radius) {
    super(position, radius)
    this.mass = this.size.x * this.size.y
    this.restitution = restitution
  }

  addForce(force): void {
    this.acceleration.add(force)
  }

  momentum(): Vector2D {
    return Vector2D.mult(this.velocity, this.mass)
  }

  inelasticCollision(other): void {
    const velocity1 = this.velocity
    const velocity2 = other.velocity
    const totalMomentum = other.momentum()
    totalMomentum.add(this.momentum())
    const totalMass = this.mass + other.mass

    // This velocity
    this.velocity = Vector2D.sub(velocity2, velocity1)
    this.velocity.mult(this.restitution * other.mass)
    this.velocity.add(totalMomentum)
    this.velocity.div(totalMass)

    // Other velocity
    other.velocity = Vector2D.sub(velocity1, velocity2)
    other.velocity.mult(other.restitution * this.mass)
    other.velocity.add(totalMomentum)
    other.velocity.div(totalMass)
  }

  update(): void {
    this.acceleration.div(this.mass)
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.zero()
  }

  collidesWith(other): void {
    if (super.check(other)) {
      if (other.dynamic) this.inelasticCollision(this)
      else this.velocity.inverse
    }
  }
}

export default Dynamic
