
import Circle       from './Circle'
import Vector2D     from '../../Vector/Vector2D'
import Collider     from './Collider'
import Dynamic      from './Dynamic'

class Trigger extends Circle {
  private particlesInside: Array<any>

  contais (particle: Collider|Dynamic): boolean {
      let distance = Vector2D.sub(particle.position, this.position)
      if (distance.mag() < particle.radius + this.radius) {
        return true
      } else {
        return false
      }
  }

  update () {
    this.particlesInside = this.particlesInside.filter((p) => {
      if (this.contais(p)) {
        if (p.onTriggerStay) {
          p.onTriggerStay(this)
        }
        return true
      } else {
        if (p.onTriggerExit) {
          p.onTriggerExit(this)
        }
        return false
      }
    })
  }
}

export default Trigger
