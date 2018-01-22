
class World {
  public maxPositionX
  public minPositionY
  public minPositionX
  public maxPositionY

  public dynamicParticles
  public circleParticles
  public rectParticles

  public x
  public y

  constructor (x, y) {
    this.x = x
    this.y = y
    this.dynamicParticles = []
    this.circleParticles = []
    this.rectParticles = []

    this.maxPositionX = window.innerWidth
    this.minPositionX = 0
    this.maxPositionY = window.innerHeight
    this.minPositionY = 0
  }

  add (particle) {
    if (particle.type === 'circle') {
      this.circleParticles.push(particle)
    } else if (particle.type === 'rect') {
      this.rectParticles.push(particle)
    }

    if (particle.isDynamic) {
      this.dynamicParticles.push(particle)
    }
  }

  remove (particle) {
    if (particle.type === 'circle') {
      this.circleParticles.splice(this.circleParticles.indexOf(particle), 1)
    } else if (particle.type === 'rect') {
      this.rectParticles.splice(this.rectParticles.indexOf(particle), 1)
    }

    if (particle.isDynamic) {
      this.dynamicParticles.splice(this.dynamicParticles.indexOf(particle), 1)
    }
  }

  update () {
    this.dynamicParticles.forEach((particle) => {
      this.insideWorldBounds(particle)
      particle.update()

      this.circleParticles.forEach((circle) => {
        particle.circleCollision(circle)
      })

      this.rectParticles.forEach((rect) => {
        particle.rectCollision(rect)
      })
    })
  }

  insideWorldBounds (particle) {
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
