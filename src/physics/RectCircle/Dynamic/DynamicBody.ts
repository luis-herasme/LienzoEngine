
import Vector from '../../Vector'

class DinamicBody {
  constructor (position = new Vector(0, 0), restitution = 1) {
    this.restitution = restitution
    this.position = position
    this.velocity = new Vector(0, 0)
    this.acceleration = new Vector(0, 0)

    this.isDynamic = true
  }

  addForce (force) {
    this.acceleration.add(force)
  }

  momentum () {
    return Vector.mult(this.velocity, this.mass)
  }

  inelasticCollision (other) {
    const velocity1 = this.velocity
    const velocity2 = other.velocity
    const totalMomentum = other.momentum()
    totalMomentum.add(this.momentum())
    const totalMass = this.mass + other.mass

    // This velociry
    this.velocity = Vector.sub(velocity2, velocity1)
    this.velocity.mult(this.restitution * other.mass)
    this.velocity.add(totalMomentum)
    this.velocity.div(totalMass)

    // Other velociry
    other.velocity = Vector.sub(velocity1, velocity2)
    other.velocity.mult(other.restitution * this.mass)
    other.velocity.add(totalMomentum)
    other.velocity.div(totalMass)
  }

  update () {
    this.acceleration.div(this.mass)
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.zero()
  }
}

export default DinamicBody
