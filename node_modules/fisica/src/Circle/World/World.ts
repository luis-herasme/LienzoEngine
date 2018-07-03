
import { Vector2D } from 'vector_class'

class World {
  public maxPositionX: number = window.innerWidth
  public minPositionX: number = 0
  public maxPositionY: number = window.innerHeight
  public minPositionY: number = 0

  private dynamicParticles: Array<any>
  private particles: Array<any>

  constructor () {
    this.dynamicParticles = []
    this.particles = []
  }

  setBounds (maxX: number, minX: number, maxY: number, minY: number): void {
    this.maxPositionX = maxX
    this.minPositionX = minX
    this.maxPositionY = maxY
    this.minPositionY = minY
  }

  add (particle): void {
    this.particles.push(particle)
    if (particle.dynamic) {
      this.dynamicParticles.push(particle)
    }
  }

  remove (particle): void {
    // this.particles = _.filter(this.particles, particle => toRemove.id !== particle.id)
  }

  insideWorldBounds (particle): void {
    // Horizontal bounds
    if (particle.position.x + particle.radius > this.maxPositionX) {
      particle.position.x = this.maxPositionX - particle.radius
      particle.velocity.x *= -1
    } else if (particle.position.x - particle.radius < this.minPositionX) {
      particle.position.x = this.minPositionX + particle.radius
      particle.velocity.x *= -1
    }

    // Vectical bounds
    if (particle.position.y + particle.radius > this.maxPositionY) {
      particle.position.y = this.maxPositionY - particle.radius
      particle.velocity.y *= -1
    } else if (particle.position.y - particle.radius < this.minPositionY) {
      particle.position.y = this.minPositionY + particle.radius
      particle.velocity.y *= -1
    }
  }

  update (): void {
    this.dynamicParticles.forEach(particle => {
      particle.update()
      this.particles.forEach(other => particle.check(other))
    })
    /*this.particles.forEach(particle => {
      if (particle.dynamic) {
        this.insideWorldBounds(particle)
        particle.update()
      }
      // this.particles.forEach(particle2 => particle.check(particle2))
    })*/
  }
}

export default World
