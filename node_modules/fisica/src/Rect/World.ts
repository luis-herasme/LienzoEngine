
class World {
  public maxPositionX = window.innerWidth
  public minPositionX = 0
  public maxPositionY = window.innerHeight
  public minPositionY = 0
  private particles: Array<any>

  constructor() {
    this.particles = []
  }

  setBounds(maxX: number, minX: number, maxY: number, minY: number) {
    this.maxPositionX = maxX
    this.minPositionX = minX
    this.maxPositionY = maxY
    this.minPositionY = minY
  }

  add(particle) {
    this.particles.push(particle)
  }

  remove(toRemove) {
    this.particles.slice(this.particles.indexOf(toRemove), 1)
  }

  update() {
    this.particles.forEach((particle) => {
      if (particle.dynamic) {
        this.insideWorldBounds(particle)
        particle.update()
      }

      this.particles.forEach((particle2) => {
        particle.check(particle2)
      })
    })
  }

  insideWorldBounds(particle) {
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
}

export default World
