
import { Vector2D } from 'vector_class'

class CircleTrigger {
  private particlesInside: Array<any>
  public position: Vector2D = new Vector2D(0, 0)
  public radius: Number = 5

  constructor (position: Vector2D, radius: Number) {
    this.position = position
    this.radius = radius
  }

  check (other) {
    const distance = Vector2D.sub(this.position, other.position)
/*
    if (distance.mag() < this.radius + other.radius && distance.mag()) {
      if (!_.includes(this.particlesInside, other)) {
        other.gamObject.onTriggerEnter()
        this.particlesInside.push(other)
      } else {
        other.gamObject.onTriggerExit()
      }
    }
*/
  }
}

export default CircleTrigger
