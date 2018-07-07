
import Vector from 'vector_class'

class Body {
  public mass
  public friction
  public restitution

  public acceleration
  public velocity
  public collision: Function
  public name: String

  public center
  public far

  constructor(config) {
    this.mass = config.mass ? config.mass : 1
    this.friction = config.friction ? config.friction : 1
    this.restitution = config.restitution ? config.restitution : 0.9
    this.acceleration = config.acceleration ? new Vector(...config.acceleration) : new Vector(0, 0)
    this.velocity = config.velocity ? new Vector(...config.velocity) : new Vector(0, 0)
    this.collision = config.collision
    this.name = config.name
  }

  addForce(force) {
    this.acceleration.add(force)
  }
}

export default Body
