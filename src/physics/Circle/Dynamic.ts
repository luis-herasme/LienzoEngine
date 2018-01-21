
import Vector2D from '../../Vector/Vector2D'
import Collider from './Collider'

class Dynamic  extends Collider {
  public velocity       : Vector2D = new Vector2D(0, 0)
  public acceleration   : Vector2D = new Vector2D(0, 0)
  public restitution    : number
  public dynamic        : boolean = true
  public mass           : number
  public futurePosition : Vector2D
  public moved          : boolean = false
  public friction       : number

  constructor (config) {
    super(config.position, config.radius)
    this.futurePosition = new Vector2D(0, 0)
    this.mass = Math.PI * Math.pow(this.radius, 2)
    this.restitution = config.restitution
    this.friction = config.friction
  }

  addForce (force): void {
    this.acceleration.add(force)
  }

  momentum (): Vector2D {
    return Vector2D.mult(this.velocity, this.mass)
  }

  inelasticCollision (other): void {
    const velocity1 = this.velocity
    const velocity2 = other.velocity

    const totalMomentum = Vector2D.add(other.momentum(), this.momentum())
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

  update () {
    this.acceleration.div(this.mass)
    this.velocity.add(this.acceleration)
    // const tempPosition = this.position.copy()
    this.position.add(this.velocity)
    // this.World.separate(this)
    this.velocity.mult(this.friction)
    this.acceleration.zero()
  }
}

export default Dynamic
