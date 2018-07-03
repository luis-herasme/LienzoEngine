
import Circle from './Circle'
import { Vector2D } from 'vector_class'

class CircleTrigger extends Circle {
  private particlesInside: Array<any>

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
