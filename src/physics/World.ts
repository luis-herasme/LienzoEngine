
import DynamicRect from './Rect/RigidBody'
import DynamicCircle from './Circle/RigidBody'

class World {

  public maxPositionX: number = 800
  public minPositionX: number = 0
  public maxPositionY: number = 600
  public minPositionY: number = 0

  public particles: Array<any> = []
  public dynamicParticles: Array<any> = []

  setBounds(maxX: number, minX: number, maxY: number, minY: number): void {
    this.maxPositionX = maxX
    this.minPositionX = minX
    this.maxPositionY = maxY
    this.minPositionY = minY
  }

  add(particle): void {
    if ((particle instanceof DynamicRect) || (particle instanceof DynamicCircle)) {
      this.dynamicParticles.push(particle)
    } else {
      particle.World = this
      this.particles.push(particle)
    }
  }

  remove(particle): void {
    if ((particle instanceof DynamicRect) || (particle instanceof DynamicCircle)) {
      const index = this.dynamicParticles.indexOf(particle)
      if (index > -1) {
        this.dynamicParticles = this.dynamicParticles.slice(index, 1)
      }
    } else {
      const index = this.particles.indexOf(particle)
      if (index > -1) {
        this.particles = this.particles.slice(index, 1)
      }
    }
  }

  insideWorldBounds(particle): void {
    if (particle.position.x > this.maxPositionX) {
      particle.position.x = this.maxPositionX
      particle.velocity.x *= -1
    } else if (particle.position.x < this.minPositionX) {
      particle.position.x = this.minPositionX
      particle.velocity.x *= -1
    }

    if (particle.position.y > this.maxPositionY) {
      particle.position.y = this.maxPositionY
      particle.velocity.y *= -1
    } else if (particle.position.y < this.minPositionY) {
      particle.position.y = this.minPositionY
      particle.velocity.y *= -1
    }
  }

  update(): void {
    for (let index = 0; index < this.dynamicParticles.length; index++) {
      const particle = this.dynamicParticles[index]
      particle.update()
/*
      for (let index2 = 0; index2 < this.particles.length; index2++) {
        const particle2 = this.particles[index2]
        particle.collidesWith(particle2)
      }
*/
      for (let index2 = 0; index2 < this.dynamicParticles.length; index2++) {
        if (index !== index2) {
          const particle2 = this.dynamicParticles[index2]
          particle.collidesWith(particle2)
        }
      }
    }
  }
}

export default World
