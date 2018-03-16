
import Vector2D from '../Vector/Vector2D'

class World {
  public boundsSet
  
  private maxPositionX: number = window.innerWidth
  private minPositionX: number = 0
  private maxPositionY: number = window.innerHeight
  private minPositionY: number = 0
  private gravity: Vector2D
  private dynamicParticles: Array<any>
  private particles: Array<any>

  constructor (gravity?: Vector2D) {
    this.gravity = gravity
    this.dynamicParticles = []
    this.particles = []
    this.boundsSet = false
  }

  setBounds (bounds: Array<any>): void {
    this.boundsSet = true
    this.maxPositionX = bounds[0]
    this.minPositionX = bounds[1]
    this.maxPositionY = bounds[2]
    this.minPositionY = bounds[3]
  }

  add (particle): void {
    particle.World = this
    this.particles.push(particle)
    if (particle.dynamic) {
      this.dynamicParticles.push(particle)
    }
  }

  remove (particle): void {
    this.particles.splice(this.particles.indexOf(particle), 1)
  }

  insideWorldBounds (particle): void {
    // Horizontal bounds
    if (particle.position.x + particle.radius > this.maxPositionX) {
      particle.position.x = this.maxPositionX - particle.radius - 1
      particle.velocity.x *= -1 * particle.restitution
    } else if (particle.position.x - particle.radius < this.minPositionX) {
      particle.position.x = this.minPositionX + particle.radius + 1
      particle.velocity.x *= -1 * particle.restitution
    }

    // Vectical bounds
    if (particle.position.y + particle.radius > this.maxPositionY) {
      particle.position.y = this.maxPositionY - particle.radius - 1
      particle.velocity.y *= -1 * particle.restitution
    } else if (particle.position.y - particle.radius < this.minPositionY) {
      particle.position.y = this.minPositionY + particle.radius + 1
      particle.velocity.y *= -1 * particle.restitution
     // particle.addForce(new Vector2D(0, -10))
    }
  }

  insideBounds (particle): void {
    // Horizontal bounds
    if (particle.position.x + particle.size.x > this.maxPositionX) {
      particle.position.x = this.maxPositionX - particle.size.x - 1
      particle.velocity.x *= -1 * particle.restitution
    } else if (particle.position.x < this.minPositionX) {
      particle.position.x = this.minPositionX
      particle.velocity.x *= -1 * particle.restitution
    }

    // Vectical bounds
    if (particle.position.y >= this.maxPositionY - particle.size.y) {
      // console.log()
      particle.position.y = this.maxPositionY - particle.size.y
      // particle.velocity.y *= -1 * particle.restitution
      particle.velocity.y = 0
      // particle.addForce(Vector2D.inverse(Vector2D.mult(this.gravity, 2)))
     // particle.addForce(this.gravity)
    } else if (particle.position.y <= this.minPositionY) {
     
      particle.position.y = this.minPositionY
      particle.addForce(Vector2D.inverse(Vector2D.mult(this.gravity, 1)))
      particle.velocity.y *= -1 * particle.restitution
     // particle.addForce(new Vector2D(0, -10))
     
    }
  }

  update (): void {
    this.particles.forEach(particle => {
    this.check(particle)
    //  if (!particle.gameObject.static) {
        if (particle.update) particle.update()
        if (this.gravity) {
         if (particle.addForce) particle.addForce(this.gravity)  
        }
        if (this.boundsSet) this.insideBounds(particle)
      // }
    })
  }

  center (body) {
    return {
      x: body.position.x + body.size.x / 2,
      y: body.position.y + body.size.y / 2
    }
  }

  separate (particle, other) {
    const w = 0.5 * (particle.size.x + other.size.x)
    const h = 0.5 * (particle.size.y + other.size.y)

    const dx = this.center(particle).x - this.center(other).x
    const dy = this.center(particle).y - this.center(other).y
    const s = 0
    if (Math.abs(dx) <= w && Math.abs(dy) <= h)
    {
      /* collision! */
      const wy = w * dy
      const hx = h * dx
  
      if (wy > hx) {
        if (wy > -hx) {
          particle.position.y = other.position.y + other.size.y + s// bottom
          particle.velocity.y = 0
        } else {
          particle.position.x = other.position.x - particle.size.x - s /* on the Rigth */
          particle.velocity.x = 0
        }
      } else {
        if (wy > -hx) {
          particle.position.x = other.position.x + other.size.x + s  // left
          particle.velocity.x = 0
        } else {
          particle.position.y = other.position.y - particle.size.y - s/* at the Top */
          particle.velocity.y = 0
          // particle.addForce(Vector2D.inverse(Vector2D.mult(this.gravity, 2)))
        }
      }
    }
  }

  check (particle) {
    for (let i = 0; i < this.particles.length; i++) {
      if (particle.id !== this.particles[i].id) {
        if (particle.position.x < this.particles[i].position.x + this.particles[i].size.x &&
          particle.position.x + particle.size.x > this.particles[i].position.x &&
          particle.position.y < this.particles[i].position.y + this.particles[i].size.y &&
          particle.size.y + particle.position.y > this.particles[i].position.y) {
/*
            if (!particle.gameObject.static && !this.particles[i].gameObject.static) {
              particle.inelasticCollision(this.particles[i])
            }
*/
           // if (!particle.gameObject.static) {
              this.separate(particle, this.particles[i])
           // }

            if (particle.collision) {
              particle.collision(this.particles[i])
            }

            if (this.particles[i].collision) {
              this.particles[i].collision(particle)
            }
          }
      }
    }
  }

}

export default World
