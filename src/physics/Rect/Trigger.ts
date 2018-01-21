
declare var require: any
const _ = require('lodash')
import Vector from '../../../Vector'
import Circle from './Circle'

class CircleTrigger extends Circle {
  private particlesInside: Array<any>

  check (other) {
    const distance = Vector.sub(this.position, other.position)

    if (distance.mag() < this.radius + other.radius && distance.mag()) {
      if (!_.includes(this.particlesInside, other)) {
        other.gamObject.onTriggerEnter()
        this.particlesInside.push(other)
      } else {
        other.gamObject.onTriggerExit()
      }
    }
  }
}

export default CircleTrigger
