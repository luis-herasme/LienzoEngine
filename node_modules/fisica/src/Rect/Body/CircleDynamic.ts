
import { Vector2D } from 'vector_class'
import CircleCollider from './CircleCollider'

class Dynamic  extends CircleCollider {

  public velocity: Vector = new Vector(0, 0)
  public acceleration: Vector = new Vector(0, 0)

  public restitution: number = 1
  public mass: number
  public dynamic: boolean = true

  constructor (position, restitution, radius) {
    super(position, radius)
    this.mass = Math.PI * Math.pow(this.radius, 2)
    this.restitution = restitution
  }

  addForce (force): void {
    this.acceleration.add(force)
  }

  momentum (): Vector {
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
    this.acceleration.zero()
  }

  check (other): void {
    super.check(other)
    if (super.checkCollision(other)) {
      if (other.dynamic) this.inelasticCollision(other)
      else this.velocity.inverse
    }
  }
}

export default Dynamic
